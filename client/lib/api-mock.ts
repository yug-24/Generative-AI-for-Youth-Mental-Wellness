export async function sendMessageToAI(message: string): Promise<string> {
  await delay(800 + Math.random() * 700);
  const generic = [
    "I hear you. That sounds really tough—what part feels heaviest right now?",
    "Thank you for sharing that with me. Would a short grounding exercise help?",
    "It's okay to feel this way. What’s one small thing that might bring you comfort today?",
  ];
  return generic[Math.floor(Math.random() * generic.length)];
}

export async function fetchChatHistory(){
  await delay(500);
  return [
    { id: "1", role: "ai", text: "Welcome back! How are you feeling today?", ts: Date.now()-3600000 },
    { id: "2", role: "user", text: "A bit anxious about exams.", ts: Date.now()-3500000 },
  ];
}

export async function saveJournalEntry(text: string): Promise<{ id: string }>{
  await delay(500);
  return { id: crypto.randomUUID() };
}

export async function fetchJournalEntries(){
  await delay(600);
  return Array.from({ length: 9 }).map((_,i)=> ({
    id: String(i+1),
    date: new Date(Date.now()-i*86400000).toISOString(),
    text: sampleText[i%sampleText.length],
  }));
}

export async function fetchResources(){
  await delay(600);
  const categories = ["Stress","Anxiety","Family","Exams"] as const;
  return Array.from({ length: 9 }).map((_,i)=> ({
    id: String(i+1),
    title: `Resource ${i+1}`,
    description: sampleText[(i+2)%sampleText.length],
    category: categories[i%categories.length],
    image: `/placeholder.svg`,
  }));
}

export async function fetchJourney(){
  await delay(500);
  return [
    { id: "m1", title: "Completed your first journal entry", date: new Date(Date.now()-7*86400000).toISOString(), status: "done" },
    { id: "m2", title: "Read 3 articles on managing anxiety", date: new Date(Date.now()-3*86400000).toISOString(), status: "done" },
    { id: "m3", title: "Practiced a breathing exercise", status: "pending" },
    { id: "m4", title: "Schedule a reflection reminder", status: "upcoming" },
  ];
}

export async function updateProfile(data: { name: string; password?: string }){
  await delay(500);
  return { ok: true };
}

export async function updatePreferences(prefs: { emailNotif: boolean; inAppNotif: boolean }){
  await delay(400);
  return { ok: true };
}

export async function deleteAccount(){
  await delay(800);
  return { ok: true };
}

const sampleText = [
  "Today felt heavy, but writing it down helped me breathe a little easier.",
  "I tried a short walk and noticed the trees—felt calmer afterward.",
  "Talking about it makes it less scary. One step at a time.",
  "Remembered to be kind to myself today.",
  "Even small wins count; I completed my assignment.",
];

function delay(ms: number) { return new Promise((r) => setTimeout(r, ms)); }
