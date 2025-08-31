import { useEffect, useRef, useState } from "react";

export default function NewEntryModal({ open, onClose, onSave }:{ open:boolean; onClose:()=>void; onSave:(text:string)=>Promise<void> }){
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);
  useEffect(()=>{
    if(recording){
      timerRef.current = window.setInterval(()=> setSeconds((s)=>s+1), 1000);
    } else if(timerRef.current){
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return ()=>{ if(timerRef.current) clearInterval(timerRef.current); };
  },[recording]);

  if(!open) return null;
  const mm = String(Math.floor(seconds/60)).padStart(2,"0");
  const ss = String(seconds%60).padStart(2,"0");

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6 border">
        <h2 className="text-2xl font-bold">New Journal Entry</h2>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} rows={10} className="mt-4 w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Type what's on your mind..."/>
        <div className="mt-3 flex items-center gap-3">
          <button onClick={()=> setRecording((r)=>!r)} className={`rounded-md px-3 py-2 text-sm font-semibold ${recording?"bg-red-600 text-white":"bg-secondary text-secondary-foreground"}`}>
            {recording? "Stop Recording" : "Record Voice Note"}
          </button>
          {recording && <span className="text-sm text-red-700">Recording… {mm}:{ss}</span>}
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-md border px-4 py-2 font-medium">Cancel</button>
          <button onClick={async()=>{ await onSave(text); onClose(); }} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Save Entry</button>
        </div>
      </div>
    </div>
  );
}
