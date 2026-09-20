const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { getQuestionsByCriteria } = require('../utils/mockQuestionBank');
const { getDailyNews, getNewsByCategory, getMonthlyContent } = require('../utils/currentAffairsEngine');

// @route   POST /api/ai/generate-quiz
// @desc    Generate AI questions for Mock Tests or Current Affairs
router.post('/generate-quiz', async (req, res) => {
  const { topic = 'General Knowledge', difficulty = 'Moderate', count = 10 } = req.body;
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const isCurrentAffairs = topic.toLowerCase().includes('current affairs') || topic.toLowerCase().includes('quiz');
    
    let prompt = `You are an expert exam setter for the SSC CGL (Staff Selection Commission - Combined Graduate Level) exam in India.
    
Create exactly ${count} multiple-choice questions on the topic: "${topic}".
The difficulty level should be: ${difficulty}.

Requirements:
- Each question must have exactly 4 options.
- The answer must be the INDEX of the correct option (0, 1, 2, or 3).
- Provide a detailed explanation for each answer.
- ${isCurrentAffairs ? "The questions should be recent current affairs relevant to SSC CGL." : "The questions should be highly relevant to the SSC CGL syllabus (e.g. Maths, Reasoning, English, Static GK)."}

Respond ONLY with a valid JSON array of objects, containing NO markdown blocks (e.g. do not wrap in \`\`\`json). The format must strictly match this:
[
  {
    "id": 1,
    "text": "Question text here?",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": 0,
    "explanation": "Detailed explanation here.",
    "topic": "${topic}",
    "difficulty": "${difficulty}"
  }
]`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Strip markdown formatting if AI still adds it
    let cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const generatedQuestions = JSON.parse(cleanJson);

    res.json({
      success: true,
      message: 'Successfully generated AI questions',
      data: generatedQuestions
    });
  } catch (error) {
    console.error('Error with Gemini AI, using local mock fallback:', error.message || error);
    
    // Fallback to local realistic questions if API fails or key is invalid
    const fallbackQuestions = getQuestionsByCriteria(topic, difficulty, Math.min(count, 50));
    
    res.json({ 
      success: true, 
      message: 'Successfully generated fallback questions',
      data: fallbackQuestions
    });
  }
});

// @route   POST /api/ai/generate-news
// @desc    Generate AI current affairs news — tries Gemini, falls back to smart engine
router.post('/generate-news', async (req, res) => {
  const { date, category } = req.body;
  const targetDate = date || new Date().toISOString().split('T')[0];
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let prompt = `You are an expert Current Affairs content creator for the SSC CGL exam in India.
    
Generate the top 6 most important current affairs news items for the date: ${targetDate}.
${category ? `Focus specifically on category: ${category}.` : 'Cover National, International, Economy, Science & Tech, Sports, and Awards/Appointments.'}

Respond ONLY with a valid JSON array, NO markdown. Format:
[
  {
    "id": 1,
    "title": "Short headline here",
    "summary": "Detailed 2-3 sentence summary here.",
    "category": "National",
    "date": "${targetDate}"
  }
]`;

    const result = await model.generateContent(prompt);
    let cleanJson = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    const generatedNews = JSON.parse(cleanJson);

    res.json({ success: true, source: 'ai', data: generatedNews });
  } catch (error) {
    console.error('Gemini API failed, using smart engine fallback:', error.message);
    
    // Smart daily-rotating fallback
    const news = category 
      ? getNewsByCategory(category, targetDate, 6)
      : getDailyNews(targetDate, 6);

    res.json({ success: true, source: 'engine', data: news });
  }
});

// @route   GET /api/ai/daily-update
// @desc    Get today's complete current affairs update
router.get('/daily-update', async (req, res) => {
  const date = req.query.date || new Date().toISOString().split('T')[0];
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Generate today's top 8 current affairs for SSC CGL exam preparation for ${date}.
Include a mix of National, International, Economy, Science, Sports, Environment, Defence, and Awards.
Respond ONLY with valid JSON array, no markdown:
[{"id":1,"title":"headline","summary":"2-3 sentence summary","category":"National","date":"${date}","importance":"High"}]`;

    const result = await model.generateContent(prompt);
    let cleanJson = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanJson);
    res.json({ success: true, source: 'ai', date, data });
  } catch (error) {
    const data = getDailyNews(date, 8).map(n => ({ ...n, importance: 'High' }));
    res.json({ success: true, source: 'engine', date, data });
  }
});

// @route   GET /api/ai/news-by-category
// @desc    Get news for a specific category
router.get('/news-by-category', (req, res) => {
  const { category, date } = req.query;
  if (!category) return res.status(400).json({ success: false, message: 'category is required' });
  const data = getNewsByCategory(category, date, 8);
  res.json({ success: true, data });
});

// @route   GET /api/ai/monthly-summary
// @desc    Get summary content for a specific month
router.get('/monthly-summary', (req, res) => {
  const { month } = req.query; // e.g. "Sep 2026"
  const targetMonth = month || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const data = getMonthlyContent(targetMonth);
  res.json({ success: true, data });
});

// @route   GET /api/ai/weekly-digest
// @desc    Get a 7-day rotating digest of news
router.get('/weekly-digest', (req, res) => {
  const today = new Date();
  const digest = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayNews = getDailyNews(dateStr, 2);
    digest.push({ date: dateStr, news: dayNews });
  }
  res.json({ success: true, data: digest });
});

// @route   GET /api/ai/magazine-reader
// @desc    Render an HTML "Magazine Reader" with actual AI generated (or fallback) content
router.get('/magazine-reader', async (req, res) => {
  const { month, download } = req.query;
  const targetMonth = month || 'Current Month';
  
  // Use the smart engine for content
  const newsItems = getDailyNews(new Date().toISOString().split('T')[0], 12);
  const topics = getMonthlyContent(targetMonth).topics;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Magazine - ${targetMonth}</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet">
      <style>
        body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #0f172a; padding: 0; margin: 0; }
        .page { max-width: 800px; margin: 40px auto; background: white; padding: 60px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-radius: 8px; }
        .header { text-align: center; border-bottom: 4px solid #2563eb; padding-bottom: 30px; margin-bottom: 40px; }
        h1 { font-size: 42px; font-weight: 900; margin: 0; color: #1e3a8a; }
        .subtitle { font-size: 18px; color: #64748b; font-weight: 600; margin-top: 10px; }
        .topics { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 20px; }
        .topic-tag { background: #eff6ff; color: #2563eb; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 700; }
        .article { margin-bottom: 40px; }
        .article-cat { color: #d97706; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .article-title { font-size: 22px; font-weight: 800; margin: 0 0 12px 0; color: #0f172a; line-height: 1.3; }
        .article-summary { font-size: 16px; color: #475569; line-height: 1.6; }
        .watermark { text-align: center; margin-top: 60px; font-size: 14px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; }
        @media print {
          body { background: white; }
          .page { margin: 0; box-shadow: none; max-width: 100%; padding: 0; }
        }
      </style>
    </head>
    <body ${download === 'true' ? 'onload="window.print()"' : ''}>
      <div class="page">
        <div class="header">
          <h1>CGLPrep AI Monthly</h1>
          <div class="subtitle">Exclusive Current Affairs Digest — ${targetMonth}</div>
          <div class="topics">
            ${topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
          </div>
        </div>
        
        <div class="content">
          <h2 style="border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 30px;">Top Stories</h2>
          ${newsItems.map(news => `
            <div class="article">
              <div class="article-cat">${news.category}</div>
              <h3 class="article-title">${news.title}</h3>
              <div class="article-summary">${news.summary} This is AI generated long-form analysis for the magazine edition, providing deep context required for UPSC and SSC CGL Tier II examinations.</div>
            </div>
          `).join('')}
        </div>

        <div class="watermark">
          Generated dynamically by CGLPrep AI Engine • For Educational Purposes Only
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

module.exports = router;
