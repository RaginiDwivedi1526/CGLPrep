const mockQuestions = [
  // --- QUANTITATIVE APTITUDE ---
  // Number System
  {
    topic: "Number System", subject: "Quant", difficulty: "Easy",
    q: "What is the unit digit of (123)^45 ?",
    opts: ["1", "3", "7", "9"], ans: 3, exp: "The unit digit pattern of 3 is 3, 9, 7, 1. 45 / 4 gives remainder 1. So the unit digit is 3^1 = 3."
  },
  {
    topic: "Number System", subject: "Quant", difficulty: "Moderate",
    q: "If a number N is divided by 132, the remainder is 10. What is the remainder when N is divided by 12?",
    opts: ["10", "2", "8", "0"], ans: 0, exp: "N = 132k + 10. Since 132 is a multiple of 12 (12*11), dividing N by 12 yields the same remainder as dividing 10 by 12, which is 10."
  },
  {
    topic: "Number System", subject: "Quant", difficulty: "Difficult",
    q: "Find the number of trailing zeros in 1000!",
    opts: ["248", "249", "250", "200"], ans: 1, exp: "Number of zeros = [1000/5] + [1000/25] + [1000/125] + [1000/625] = 200 + 40 + 8 + 1 = 249."
  },
  // Algebra
  {
    topic: "Algebra", subject: "Quant", difficulty: "Easy",
    q: "If x + 1/x = 3, find the value of x^2 + 1/x^2.",
    opts: ["7", "9", "11", "5"], ans: 0, exp: "Squaring both sides: x^2 + 1/x^2 + 2 = 9 => x^2 + 1/x^2 = 7."
  },
  {
    topic: "Algebra", subject: "Quant", difficulty: "Difficult",
    q: "If x + y + z = 0, find the value of x^3 + y^3 + z^3.",
    opts: ["0", "xyz", "3xyz", "1"], ans: 2, exp: "Using the identity: If x+y+z=0, then x^3 + y^3 + z^3 = 3xyz."
  },
  // Geometry
  {
    topic: "Geometry", subject: "Quant", difficulty: "Moderate",
    q: "In a triangle ABC, AB = 5, BC = 12, and AC = 13. Find the inradius.",
    opts: ["2", "3", "4", "5"], ans: 0, exp: "It's a right-angled triangle. Inradius r = (AB + BC - AC) / 2 = (5 + 12 - 13) / 2 = 4 / 2 = 2."
  },

  // --- REASONING ---
  {
    topic: "Reasoning", subject: "Reasoning", difficulty: "Moderate",
    q: "In a certain code, COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code?",
    opts: ["MFEDJJOE", "EOJDEJFM", "MFEJDJOE", "EOJDJEFM"], ans: 1, exp: "Letters are reversed and then +1, -1 alternately or similar shift. Correct shift yields EOJDEJFM."
  },
  {
    topic: "Reasoning", subject: "Reasoning", difficulty: "Difficult",
    q: "A clock shows 3:15. What is the angle between the minute hand and the hour hand?",
    opts: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"], ans: 1, exp: "Angle = |30H - 5.5M| = |90 - 5.5*15| = |90 - 82.5| = 7.5 degrees."
  },

  // --- ENGLISH ---
  {
    topic: "English Language", subject: "English", difficulty: "Moderate",
    q: "Identify the antonym of: MITIGATE",
    opts: ["Alleviate", "Aggravate", "Soothe", "Placate"], ans: 1, exp: "Mitigate means to make less severe. Aggravate is the exact opposite."
  },
  {
    topic: "English Language", subject: "English", difficulty: "Difficult",
    q: "Choose the correct sentence:",
    opts: [
      "Hardly had he left when it started raining.",
      "Hardly had he left than it started raining.",
      "Hardly he left when it started raining.",
      "Hardly did he leave than it started raining."
    ], ans: 0, exp: "'Hardly... when' is the correct correlative conjunction pair. Rule of inversion applies."
  },

  // --- CURRENT AFFAIRS ---
  {
    topic: "Current Affairs", subject: "General Awareness", difficulty: "Moderate",
    q: "Who was recently appointed as the new Chief Justice of India in 2026?",
    opts: ["Justice Sanjiv Khanna", "Justice B.R. Gavai", "Justice Surya Kant", "Justice Dipankar Datta"], ans: 0, exp: "Justice Sanjiv Khanna succeeded as the Chief Justice."
  },
  {
    topic: "Current Affairs", subject: "General Awareness", difficulty: "Moderate",
    q: "Which country hosted the G20 Summit in 2026?",
    opts: ["India", "Brazil", "USA", "South Africa"], ans: 3, exp: "South Africa hosted the G20 summit in 2025/2026."
  },
  {
    topic: "Current Affairs", subject: "General Awareness", difficulty: "Difficult",
    q: "Which ISRO mission successfully launched the new earth observation satellite recently?",
    opts: ["EOS-06", "EOS-08", "Cartosat-3", "RISAT-2B"], ans: 1, exp: "EOS-08 was launched successfully by ISRO for earth observation."
  },

  // --- GENERAL AWARENESS ---
  {
    topic: "General Awareness", subject: "GA", difficulty: "Moderate",
    q: "Which article of the Indian Constitution deals with the Right to Equality?",
    opts: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 32"], ans: 0, exp: "Articles 14 to 18 of the Indian Constitution guarantee the Right to Equality."
  },
  {
    topic: "General Awareness", subject: "GA", difficulty: "Difficult",
    q: "Who was the founder of the Nanda Dynasty?",
    opts: ["Dhana Nanda", "Mahapadma Nanda", "Chandragupta Maurya", "Bimbisara"], ans: 1, exp: "Mahapadma Nanda was the founder of the Nanda Dynasty."
  }
];

// Fallback generic questions if topic doesn't match closely
const genericQuestions = [
  { q: "Select the odd one out.", opts: ["Circle", "Ellipse", "Sphere", "Triangle"], ans: 2, exp: "Sphere is 3D, rest are 2D." },
  { q: "If A is B's brother, and C is A's mother, what is B's relation to C?", opts: ["Son/Daughter", "Brother", "Nephew", "Uncle"], ans: 0, exp: "B is the sibling of A. So B is also the child of C." },
  { q: "Find the missing number in the series: 2, 6, 12, 20, ?", opts: ["30", "28", "32", "36"], ans: 0, exp: "Difference is 4, 6, 8... Next is 10. 20+10 = 30." }
];

const getQuestionsByCriteria = (requestedTopic, requestedDifficulty, count) => {
  const t = requestedTopic.toLowerCase();
  
  // 1. Initial pool from mock questions
  let pool = [...mockQuestions, ...genericQuestions.map(g => ({...g, topic: requestedTopic, difficulty: 'Moderate'}))];

  // 2. Filter by topic (boost topic matches)
  let topicMatches = pool.filter(q => 
    t.includes((q.topic || '').toLowerCase()) || 
    t.includes((q.subject || '').toLowerCase()) ||
    (q.topic || '').toLowerCase().includes(t)
  );

  if (topicMatches.length > 0) {
    // We prefer topic matches, but we'll mix them in
    pool = [...topicMatches, ...pool]; 
  }

  // 3. Filter by Difficulty
  if (requestedDifficulty && requestedDifficulty.toLowerCase() !== 'mixed') {
    let diffFiltered = pool.filter(q => q.difficulty && q.difficulty.toLowerCase() === requestedDifficulty.toLowerCase());
    if (diffFiltered.length > 0) {
      pool = diffFiltered; // Strictly use this difficulty
    }
  }

  // Deduplicate pool by question text
  pool = Array.from(new Map(pool.map(item => [item.q, item])).values());

  // 4. Guarantee exact 'count' by repeating if necessary
  let finalPool = [];
  while (finalPool.length < count && pool.length > 0) {
    for (let i = 0; i < pool.length && finalPool.length < count; i++) {
      // Deep copy to ensure unique IDs later if repeated
      finalPool.push({ ...pool[i] }); 
    }
  }
  pool = finalPool;

  // 5. Shuffle the pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // 6. Format
  return pool.map((item, index) => ({
    id: index + 1,
    text: `${item.q}`,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: `[${item.difficulty || requestedDifficulty}] ${item.exp}`,
    topic: item.topic || requestedTopic,
    difficulty: item.difficulty || requestedDifficulty
  }));
};

module.exports = { getQuestionsByCriteria };
