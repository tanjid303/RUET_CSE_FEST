export interface EventData {
  id: number;
  slug: string;
  name: string;
  hook: string;
  description: string;
  teamSize: string;
  date: string;
  fee: string;
  venue: string;
  status: 'open' | 'coming_soon' | 'closed';
  category: 'Competitive' | 'Gaming' | 'General';
  prizes: string;
  rules: string[];
  timeline: string;
}

export const events: EventData[] = [
  {
    id: 1,
    slug: 'iupc',
    name: 'Inter-University Programming Contest',
    hook: 'The ultimate battle of algorithms, problem-solving, and speed.',
    description: 'The Inter-University Programming Contest (IUPC) at RUET CSE Fest 2026 brings together the sharpest problem solvers from all over the country. Teams of three will compete in a high-pressure, 5-hour contest to solve complex algorithmic problems under standard ICPC rules.',
    teamSize: '3 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'CSE Building Labs',
    status: 'coming_soon',
    category: 'Competitive',
    prizes: 'TBA',
    rules: [
      'Each team must consist of exactly 3 eligible university students.',
      'Contest duration is 5 hours. Problems will be in English.',
      'Only standard programming languages (C++, Java, Python) are allowed.',
      'Any form of communication with outsiders or plagiarism will lead to instant disqualification.'
    ],
    timeline: 'TBA'
  },
  {
    id: 2,
    slug: 'hackathon',
    name: 'National Hackathon',
    hook: 'Build innovative solutions to real-world problems in a 36-hour sprint.',
    description: 'The Hackathon challenges developers and designers to build a functional prototype addressing critical problem statements. Teams will work non-stop to deliver web, mobile, or hardware-integrated solutions.',
    teamSize: '3-5 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'Central Library Lab',
    status: 'coming_soon',
    category: 'Competitive',
    prizes: 'TBA',
    rules: [
      'Teams must build their projects from scratch during the hackathon.',
      'All team members must remain onsite for coding and mentoring rounds.',
      'Projects will be judged based on utility, implementation, UI/UX, and the final pitch.'
    ],
    timeline: 'TBA'
  },
  {
    id: 3,
    slug: 'gamejam',
    name: 'GameJam',
    hook: 'Unleash your creativity and build an interactive game within the theme.',
    description: 'GameJam brings game designers, developers, and artists together to build an original game within a strict time limit. A surprise theme will dictate the design constraints.',
    teamSize: '1-4 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'CSE Lab 3',
    status: 'coming_soon',
    category: 'Gaming',
    prizes: 'TBA',
    rules: [
      'The game must be built within the specified theme announced at the start.',
      'Pre-made art and audio assets are allowed if appropriately licensed.',
      'Submission must include executable game files and gameplay video.'
    ],
    timeline: 'TBA'
  },
  {
    id: 4,
    slug: 'ctf',
    name: 'Capture The Flag (CTF)',
    hook: 'Test your cybersecurity and hacking skills in a jeopardy-style arena.',
    description: 'A jeopardy-style cybersecurity contest. Teams solve challenges in Web Exploitation, Cryptography, Reverse Engineering, Forensics, and Pwn to capture hidden flags.',
    teamSize: '3 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'Virtual Lab',
    status: 'coming_soon',
    category: 'Competitive',
    prizes: 'TBA',
    rules: [
      'Sharing flags or collaborating between different teams is strictly forbidden.',
      'Do not attack the infrastructure or attempt to disrupt the scoreboard.',
      'Decisions of the CTF admins are final.'
    ],
    timeline: 'TBA'
  },
  {
    id: 5,
    slug: 'datathon',
    name: 'National Datathon',
    hook: 'Discover patterns, build predictive models, and pitch data insights.',
    description: 'Datathon is an intensive competition focusing on data modeling, machine learning, and data analytics. Teams will be given a dataset and must deliver actionable insights and predictive outcomes.',
    teamSize: '1-3 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'Seminar Room',
    status: 'coming_soon',
    category: 'Competitive',
    prizes: 'TBA',
    rules: [
      'Teams must submit their complete code repository (GitHub/Kaggle notebook).',
      'Judging includes model accuracy, methodology validity, and presentation clarity.'
    ],
    timeline: 'TBA'
  },
  {
    id: 6,
    slug: 'treasure-hunt',
    name: 'Treasure Hunt',
    hook: 'Decode tech riddles scattered across the campus to find the grand treasure.',
    description: 'An onsite riddle-solving game testing lateral thinking and general tech trivia. Teams solve clues hidden in physical locations across the RUET campus using QR codes.',
    teamSize: '4 members',
    date: '1 October - 15 October 2026',
    fee: 'Free',
    venue: 'RUET Campus',
    status: 'coming_soon',
    category: 'General',
    prizes: 'TBA',
    rules: [
      'Only registered students of RUET CSE department can participate.',
      'Teams must solve clues in order. Skipping checkpoints is not possible.',
      'Physical damage to campus properties is strictly prohibited.'
    ],
    timeline: 'TBA'
  },
  {
    id: 7,
    slug: 'vlsi-thon',
    name: 'VLSI-thon',
    hook: 'Design, simulate, and optimize circuit architectures.',
    description: 'A dedicated challenge for hardware enthusiasts. Design digital and analog circuit modules, perform optimization, and simulate layouts on industrial EDA software tools.',
    teamSize: '2-3 members',
    date: '1 October - 15 October 2026',
    fee: 'TBA',
    venue: 'VLSI Lab',
    status: 'coming_soon',
    category: 'Competitive',
    prizes: 'TBA',
    rules: [
      'Basic templates/libraries will be provided at the start of the event.',
      'Designs must run on standard simulation tools available at the RUET VLSI Lab.'
    ],
    timeline: 'TBA'
  },
  {
    id: 8,
    slug: 'cultural-night',
    name: 'Cultural Night & Concert',
    hook: 'Unwind after intense battles with music, drama, and a live concert.',
    description: 'A spectacular evening program to celebrate the event. Features classical and contemporary performances by students, followed by a live performance from a guest rock band.',
    teamSize: 'Individual',
    date: '1 October - 15 October 2026',
    fee: 'Free',
    venue: 'RUET Auditorium',
    status: 'coming_soon',
    category: 'General',
    prizes: 'Certificates and Guest Band Souvenirs',
    rules: [
      'Open to all RUET students and fest participants with a valid ID card.',
      'Strict adherence to security protocols at the auditorium entrance is required.'
    ],
    timeline: 'TBA'
  },
  {
    id: 9,
    slug: 'tech-talk',
    name: 'Tech-Talk & Seminars',
    hook: 'Learn from industry pioneers about AI, Web3, and career roadmaps.',
    description: 'Seminars by industry experts, software engineers, and alumni covering modern tech trends, machine learning research, and global software engineering careers.',
    teamSize: 'Individual',
    date: '1 October - 15 October 2026',
    fee: 'Free',
    venue: 'Auditorium Seminar Hall',
    status: 'coming_soon',
    category: 'General',
    prizes: 'Certificate of Attendance',
    rules: [
      'Pre-registration is required to guarantee entry due to limited seating.',
      'Q&A session will occur at the end of each talk.'
    ],
    timeline: 'TBA'
  },
  {
    id: 10,
    slug: 'gala-night',
    name: 'Prize Giving & Gala Dinner',
    hook: 'Celebrate the victories and wrap up the fest with a grand feast.',
    description: 'The closing ceremony honoring the winners of all fest events, followed by cultural showcases and a grand feast/dinner bringing together students, faculty, and industry sponsors.',
    teamSize: 'Individual',
    date: '1 October - 15 October 2026',
    fee: 'Free',
    venue: 'RUET Gym & Playground',
    status: 'coming_soon',
    category: 'General',
    prizes: 'Trophy distribution for all champions and runners-up',
    rules: [
      'Strictly restricted to CSE Department members, guests, and official participants.',
      'Gala dinner coupons must be collected in advance.'
    ],
    timeline: 'TBA'
  }
];
