import { useEffect, useState } from "react";
import JournalGrid, { JournalEntry } from "@/components/sahara/JournalGrid";
import NewEntryModal from "@/components/sahara/NewEntryModal";
import Spinner from "@/components/sahara/Spinner";
import { fetchJournalEntries, saveJournalEntry } from "@/lib/api-mock";

export default function JournalPage(){
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<JournalEntry | null>(null);

  useEffect(()=>{ (async()=>{ setLoading(true); const data = await fetchJournalEntries(); setEntries(data); setLoading(false); })(); },[]);

  const handleSave = async (text: string)=>{
    const { id } = await saveJournalEntry(text);
    const newEntry = { id, date: new Date().toISOString(), text };
    setEntries((e)=> [newEntry, ...e]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Story</h1>
        <button onClick={()=>setOpen(true)} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">+ New Entry</button>
      </div>
      {loading ? (
        <div className="grid place-items-center h-40"><Spinner size={28}/></div>
      ) : (
        <JournalGrid entries={entries} onOpen={(e)=> setView(e)} />
      )}

      <NewEntryModal open={open} onClose={()=>setOpen(false)} onSave={handleSave} />

      {view && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50" onClick={()=>setView(null)}>
          <div className="w-full max-w-2xl rounded-xl bg-white p-6 border" onClick={(e)=>e.stopPropagation()}>
            <h2 className="text-xl font-semibold">Entry • {new Date(view.date).toLocaleString()}</h2>
            <p className="mt-3 whitespace-pre-wrap">{view.text}</p>
            <div className="mt-6 text-right">
              <button onClick={()=>setView(null)} className="rounded-md bg-primary px-4 py-2 text-primary-foreground font-semibold">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
