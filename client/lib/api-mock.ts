export async function sendMessageToAI(message: string): Promise<string> {
  await delay(800 + Math.random() * 700);
  const generic = [
    "I hear you. That sounds really tough—what part feels heaviest right now?",
    "Thank you for sharing that with me. Would a short grounding exercise help?",
    "It's okay to feel this way. What’s one small thing that might bring you comfort today?",
  ];
  return generic[Math.floor(Math.random() * generic.length)];
}

export async function saveJournalEntry(text: string): Promise<{ id: string }>{
  await delay(500);
  return { id: crypto.randomUUID() };
}

function delay(ms: number) { return new Promise((r) => setTimeout(r, ms)); }
