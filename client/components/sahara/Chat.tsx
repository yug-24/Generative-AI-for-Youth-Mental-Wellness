import { useEffect, useRef, useState } from "react";
import { Send, AlertTriangle } from "lucide-react";
import { sendMessageToAI } from "@/lib/api-mock";

interface Msg { id: string; role: "user" | "ai"; text: string; ts: number }

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: "w1", role: "ai", text: "Hi Aanya, I'm here for you. What's on your mind today?", ts: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  const onSend = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    const reply = await sendMessageToAI(text);
    setLoading(false);
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "ai", text: reply, ts: Date.now() }]);
  };

  return (
    <div className="grid grid-rows-[1fr_auto] h-[calc(100vh-120px)] border rounded-xl bg-white">
      <div ref={listRef} className="overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
            <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm shadow ${m.role === "user" ? "bg-sky-200" : "bg-gray-200"}`}>
              <p className="whitespace-pre-wrap">{m.text}</p>
              <p className="text-[10px] text-gray-600 mt-1">{new Date(m.ts).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
        {loading && <p className="text-sm text-foreground/60">Sahara is typing…</p>}
      </div>
      <div className="border-t p-3 flex items-center gap-2">
        <button onClick={() => setShowCrisis(true)} className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm font-medium text-orange-700 bg-orange-100"><AlertTriangle size={16}/> Crisis?</button>
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSend()} placeholder="Type a message" className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"/>
        <button onClick={onSend} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow"><Send size={16}/> Send</button>
      </div>
      {showCrisis && <CrisisModal onClose={() => setShowCrisis(false)} />}
    </div>
  );
}

function CrisisModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 border">
        <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2"><AlertTriangle/> If you're in crisis</h2>
        <p className="mt-2 text-foreground/80">If you feel unsafe or in immediate danger, please contact these Indian helplines now:</p>
        <ul className="mt-4 space-y-2 text-foreground">
          <li>• Kiran National Helpline: 1800-599-0019</li>
          <li>• AASRA 24/7: +91 9820466726</li>
          <li>• Vandrevala Foundation: 1860-2662-345 | +91 9999 666 555</li>
        </ul>
        <p className="mt-4 text-sm text-foreground/70">These numbers are provided for immediate support. Sahara is not a substitute for professional help.</p>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded-md bg-primary px-4 py-2 text-primary-foreground font-semibold">I understand</button>
        </div>
      </div>
    </div>
  );
}
