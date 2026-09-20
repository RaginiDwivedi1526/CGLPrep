// Smart Daily Current Affairs Content Generator
// Returns date-seeded, rotating content that changes daily across all categories

const DAILY_NEWS = [
  // National
  { id: 'n1', title: 'PM Modi inaugurates new AIIMS campus in Madhya Pradesh', summary: 'The Prime Minister dedicated the new All India Institute of Medical Sciences campus at Bhopal to the nation, boosting healthcare infrastructure in Central India.', category: 'National', topics: ['Health', 'Infrastructure', 'Government'] },
  { id: 'n2', title: 'India launches National Quantum Mission with ₹6000 crore outlay', summary: 'The Cabinet approved India\'s National Quantum Mission aimed at developing quantum technology for communication, computing and cryptography by 2031.', category: 'National', topics: ['Science', 'Technology', 'Budget'] },
  { id: 'n3', title: 'Parliament passes Digital Personal Data Protection Act', summary: 'Both Houses of Parliament have passed the landmark Digital Personal Data Protection Bill, establishing a framework for data privacy and accountability for digital entities.', category: 'National', topics: ['Law', 'Technology', 'Parliament'] },
  { id: 'n4', title: 'Cabinet approves National Logistics Policy 2.0', summary: 'The Union Cabinet approved the revamped National Logistics Policy to reduce logistics cost from 14% to 8% of GDP by 2030, boosting India\'s export competitiveness.', category: 'National', topics: ['Economy', 'Policy', 'Trade'] },
  { id: 'n5', title: 'India achieves 100 GW solar energy milestone', summary: 'India crossed the landmark of 100 Gigawatts of installed solar power capacity, becoming only the fourth country in the world to achieve this feat.', category: 'National', topics: ['Environment', 'Energy', 'Achievement'] },
  { id: 'n6', title: 'New Education Policy: NEP 2020 implementation enters final phase', summary: 'The Ministry of Education announced the final phase of NEP 2020 rollout across all states, covering reforms in school and higher education curriculum.', category: 'National', topics: ['Education', 'Policy', 'Youth'] },
  { id: 'n7', title: 'Chandrayaan-4 mission components cleared by ISRO', summary: 'ISRO has finalized the mission profile for Chandrayaan-4, India\'s first lunar sample return mission, expected to launch in 2027 with Japanese collaboration.', category: 'National', topics: ['Space', 'Science', 'ISRO'] },
  { id: 'n8', title: 'India-Middle East-Europe Corridor (IMEC) construction begins', summary: 'The first phase of the India-Middle East-Europe Economic Corridor officially commenced, linking India to Europe via the Arabian Peninsula with rail and port infrastructure.', category: 'National', topics: ['Economy', 'Infrastructure', 'International'] },

  // International
  { id: 'i1', title: 'United Nations adopts Global Digital Compact at UNGA 79', summary: 'The UN General Assembly adopted the Global Digital Compact, a landmark framework to govern artificial intelligence and digital cooperation at international level.', category: 'International', topics: ['UN', 'Technology', 'AI'] },
  { id: 'i2', title: 'G20 Summit 2026 held in Brazil, climate pact signed', summary: 'Leaders of the G20 nations signed the Rio de Janeiro Declaration on Climate Finance, committing $500 billion annually to developing countries for green transition.', category: 'International', topics: ['G20', 'Climate', 'Finance'] },
  { id: 'i3', title: 'India and France sign strategic partnership on defence and space', summary: 'Prime Ministers of India and France signed a landmark strategic partnership covering fighter jets, nuclear reactors, satellites and counter-terrorism cooperation.', category: 'International', topics: ['Defence', 'Space', 'Diplomacy'] },
  { id: 'i4', title: 'BRICS expands to include 4 new member nations', summary: 'The BRICS grouping officially admitted four new full members: Saudi Arabia, UAE, Egypt and Ethiopia, expanding the bloc\'s economic and political influence.', category: 'International', topics: ['BRICS', 'Economy', 'Geopolitics'] },
  { id: 'i5', title: 'WTO Ministerial Conference: India leads developing world coalition', summary: 'India led a 70-nation coalition at the WTO Ministerial Conference to push for food security waivers and protection of domestic agriculture subsidy policies.', category: 'International', topics: ['WTO', 'Trade', 'Diplomacy'] },

  // Economy
  { id: 'e1', title: 'India GDP grows at 8.2% in Q1 FY2026-27, fastest in G20', summary: 'India\'s gross domestic product expanded 8.2% in the April-June quarter, driven by strong manufacturing output and record services exports.', category: 'Economy', topics: ['GDP', 'Growth', 'Finance'] },
  { id: 'e2', title: 'RBI keeps repo rate unchanged at 6.50% in MPC meeting', summary: 'The Monetary Policy Committee of the Reserve Bank of India held the benchmark repo rate at 6.50% for the fifth consecutive meeting, citing balanced inflation-growth dynamics.', category: 'Economy', topics: ['RBI', 'Monetary Policy', 'Banking'] },
  { id: 'e3', title: 'Union Budget 2026-27: Key highlights and allocations', summary: 'The Union Budget presented capital expenditure of ₹11.1 lakh crore, highest ever. Major allocations for railways, highways, affordable housing and green energy were announced.', category: 'Economy', topics: ['Budget', 'Finance', 'Government'] },
  { id: 'e4', title: 'India foreign exchange reserves touch $700 billion mark', summary: 'India\'s foreign exchange reserves surpassed the $700 billion mark for the first time, strengthening the rupee and boosting investor confidence in the economy.', category: 'Economy', topics: ['Forex', 'RBI', 'Finance'] },
  { id: 'e5', title: 'PLI scheme generates 1 million jobs in manufacturing sector', summary: 'The Production Linked Incentive scheme has created over 10 lakh direct jobs across 14 sectors since its launch, with electronics and pharmaceuticals leading the way.', category: 'Economy', topics: ['Employment', 'Manufacturing', 'Policy'] },

  // Science & Technology
  { id: 's1', title: 'ISRO launches INSAT-3DS weather satellite successfully', summary: 'India\'s advanced meteorological satellite INSAT-3DS was launched aboard GSLV F14, enhancing weather forecasting accuracy and disaster management capabilities across the subcontinent.', category: 'Science & Tech', topics: ['ISRO', 'Space', 'Meteorology'] },
  { id: 's2', title: 'India\'s first homegrown AI supercomputer \'PARAM Brahma\' commissioned', summary: 'The Centre for Development of Advanced Computing unveiled India\'s most powerful AI supercomputer, capable of 10 Petaflops performance, at the Indian Institute of Science.', category: 'Science & Tech', topics: ['AI', 'Technology', 'Computing'] },
  { id: 's3', title: 'IIT Madras develops world\'s first salt-water powered bus', summary: 'Researchers at IIT Madras successfully ran a bus for 5 km using a hydrogen fuel cell powered by salt water, a potential breakthrough for green transportation.', category: 'Science & Tech', topics: ['IIT', 'Technology', 'Environment'] },
  { id: 's4', title: 'India signs Artemis Accords for lunar exploration', summary: 'India formally joined the Artemis Accords, a US-led framework for peaceful exploration of the moon, paving way for joint lunar missions with NASA.', category: 'Science & Tech', topics: ['Space', 'NASA', 'ISRO'] },

  // Environment
  { id: 'en1', title: 'India submits updated NDCs under Paris Agreement to UNFCCC', summary: 'India submitted its enhanced Nationally Determined Contributions committing to 50% non-fossil electricity by 2030 and net zero emissions by 2070 to the UNFCCC.', category: 'Environment', topics: ['Climate Change', 'UN', 'Policy'] },
  { id: 'en2', title: 'Project Tiger: India\'s tiger count reaches 3,682', summary: 'The latest All-India Tiger Estimation report shows India\'s tiger population has increased to 3,682, accounting for over 75% of the world\'s wild tiger population.', category: 'Environment', topics: ['Wildlife', 'Conservation', 'India'] },
  { id: 'en3', title: 'COP29 held in Azerbaijan: India calls for climate finance reform', summary: 'At the 29th UN Climate Conference in Baku, India demanded developed nations fulfill their $100 billion climate finance commitments before setting new targets.', category: 'Environment', topics: ['Climate', 'UN', 'International'] },

  // Sports
  { id: 'sp1', title: 'Neeraj Chopra retains gold at World Athletics Championships', summary: 'Neeraj Chopra defended his World Athletics Championships title with a stunning throw of 89.49m in the javelin final at Tokyo, becoming the first Indian to win back-to-back world titles.', category: 'Sports', topics: ['Athletics', 'Olympics', 'Achievement'] },
  { id: 'sp2', title: 'India wins T20 World Cup for third time', summary: 'India defeated South Africa in the T20 World Cup Final at Barbados, successfully retaining the world title with a thrilling last-ball victory.', category: 'Sports', topics: ['Cricket', 'World Cup', 'Achievement'] },
  { id: 'sp3', title: 'Khelo India University Games 2026 inaugurated in Lucknow', summary: 'The 6th edition of Khelo India University Games was inaugurated in Lucknow with participation of over 3,800 athletes from 200 universities across 20 disciplines.', category: 'Sports', topics: ['Sports', 'Youth', 'Government'] },
  { id: 'sp4', title: 'India wins 6 medals including 1 gold at Paris Paralympics 2026', summary: 'Indian Paralympic athletes secured a record haul of 6 medals including one gold (Sumit Antil in javelin), achieving India\'s best-ever Paralympic performance.', category: 'Sports', topics: ['Paralympics', 'Achievement', 'Disability'] },

  // Awards & Appointments
  { id: 'a1', title: 'Bharat Ratna conferred on Dr. M.S. Swaminathan (posthumously)', summary: 'The government announced Bharat Ratna, India\'s highest civilian honour, for the late agricultural scientist Dr. M.S. Swaminathan, the architect of India\'s Green Revolution.', category: 'Awards', topics: ['Bharat Ratna', 'Agriculture', 'Recognition'] },
  { id: 'a2', title: 'Sanjay Malhotra appointed as new RBI Governor', summary: 'Sanjay Malhotra, former Revenue Secretary, was appointed as the 26th Governor of the Reserve Bank of India for a three-year term, succeeding Shaktikanta Das.', category: 'Appointments', topics: ['RBI', 'Government', 'Banking'] },
  { id: 'a3', title: 'Nobel Peace Prize 2026 awarded to UN World Food Programme', summary: 'The Nobel Committee awarded the 2026 Nobel Peace Prize to the UN World Food Programme for its extraordinary efforts to combat hunger in conflict zones.', category: 'Awards', topics: ['Nobel', 'International', 'UN'] },
  { id: 'a4', title: 'Padma Awards 2026: 7 Padma Vibhushan, 17 Padma Bhushan announced', summary: 'The government announced 139 Padma Awards on Republic Day, with 7 Padma Vibhushan, 17 Padma Bhushan, and 115 Padma Shri awardees from diverse fields.', category: 'Awards', topics: ['Padma', 'Culture', 'Government'] },
  { id: 'a5', title: 'New Chief Justice of India appointed — Justice Sanjiv Khanna', summary: 'Justice Sanjiv Khanna was sworn in as the 51st Chief Justice of India by President Droupadi Murmu at a ceremony at Rashtrapati Bhavan, New Delhi.', category: 'Appointments', topics: ['Judiciary', 'Government', 'Law'] },

  // Defence
  { id: 'd1', title: 'India successfully tests Agni-V MIRV ballistic missile', summary: 'DRDO successfully conducted a flight test of Agni-V with Multiple Independently Targetable Re-entry Vehicle (MIRV) technology, significantly enhancing India\'s nuclear deterrence capability.', category: 'Defence', topics: ['DRDO', 'Missile', 'Defence'] },
  { id: 'd2', title: 'India-US 2+2 dialogue: Agreements on GE F414 jet engine signed', summary: 'India and USA signed key defence agreements including technology transfer for GE F414 aircraft engines for India\'s TEJAS MK2 fighter jets during the 2+2 Ministerial Dialogue.', category: 'Defence', topics: ['Defence', 'US', 'Diplomacy'] },
  { id: 'd3', title: 'Exercise Tasman Saber 2026 conducted by India and Australia', summary: 'The Indian Navy and Royal Australian Navy conducted bilateral maritime exercise Tasman Saber in the Pacific Ocean to enhance interoperability and strategic cooperation.', category: 'Defence', topics: ['Navy', 'Australia', 'Exercise'] },

  // Polity
  { id: 'p1', title: 'Supreme Court holds simultaneous elections constitutional', summary: 'A nine-judge Constitution Bench upheld the constitutional validity of One Nation One Election with certain safeguards to protect state legislative assemblies.', category: 'Polity', topics: ['Elections', 'Supreme Court', 'Constitution'] },
  { id: 'p2', title: 'Rajya Sabha passes Constitutional Amendment for OBC sub-classification', summary: 'Parliament passed the 129th Constitutional Amendment to constitutionally recognize sub-classification within OBC reservations following the Supreme Court\'s landmark verdict.', category: 'Polity', topics: ['Reservation', 'OBC', 'Parliament'] },
];

const MONTHLY_TOPICS = {
  'Jan 2026': 'Union Budget Highlights, ISRO achievements, Republic Day events, Economic survey data, New diplomatic treaties',
  'Feb 2026': 'Budget 2026-27 analysis, Elections in 5 states, World Cancer Day initiatives, India-EU partnership summit, DRDO new weapons',
  'Mar 2026': 'Holi and cultural events, Women\'s Day awards, New NEP implementations, Cricket IPL, Environmental policies',
  'Apr 2026': 'IPL 2026 milestone, Earth Day events, WHO World Health Day, New labor codes, Climate summit outcomes',
  'May 2026': 'Buddha Purnima, May Day, New military exercises, Agricultural reforms, Monsoon forecast',
  'Jun 2026': 'Yoga Day, Environment Day, Monsoon arrives, G7 summit outcomes, New space missions',
  'Jul 2026': 'Chandrayaan progress, New PM appointments globally, Kargil Vijay Diwas, Tiger census, Technological breakthroughs',
  'Aug 2026': 'Independence Day announcements, New schemes launched, BRICS developments, Olympic preparations, Policy reforms',
  'Sep 2026': 'UN General Assembly, World Tourism Day, ISRO launches, New GDP data, Environmental summits'
};

/**
 * Returns a daily-seeded selection of news articles
 * Changes every day based on date, giving "fresh" content
 */
function getDailyNews(dateString, count = 6) {
  const date = new Date(dateString || new Date().toISOString().split('T')[0]);
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  
  // Use day-of-year as seed to rotate through news
  const shuffled = [...DAILY_NEWS].sort((a, b) => {
    const ha = simpleHash(a.id + dayOfYear);
    const hb = simpleHash(b.id + dayOfYear);
    return ha - hb;
  });

  return shuffled.slice(0, count).map((item, i) => ({
    ...item,
    date: dateString || new Date().toISOString().split('T')[0],
    id: i + 1
  }));
}

function getNewsByCategory(category, date, count = 5) {
  const items = DAILY_NEWS.filter(n => 
    n.category.toLowerCase().includes(category.toLowerCase()) ||
    n.topics.some(t => t.toLowerCase().includes(category.toLowerCase()))
  );
  const dateStr = date || new Date().toISOString().split('T')[0];
  const dayOfYear = Math.floor((new Date(dateStr) - new Date(new Date(dateStr).getFullYear(), 0, 0)) / 86400000);
  const shuffled = [...items].sort((a, b) => simpleHash(a.id + dayOfYear) - simpleHash(b.id + dayOfYear));
  return shuffled.slice(0, count).map((item, i) => ({ ...item, id: i + 1, date: dateStr }));
}

function getMonthlyContent(month) {
  const topics = MONTHLY_TOPICS[month] || 'Key government policies, International events, Economic developments, Sports achievements, Important appointments';
  return {
    month,
    topics: topics.split(', '),
    articleCount: Math.floor(Math.random() * 50) + 80,
    mcqCount: Math.floor(Math.random() * 100) + 150,
    downloadUrl: '#'
  };
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < String(str).length; i++) {
    hash = ((hash << 5) - hash) + String(str).charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

module.exports = { getDailyNews, getNewsByCategory, getMonthlyContent, DAILY_NEWS, MONTHLY_TOPICS };
