export type JournalEntry = { id: string; date: string; text: string };

export default function JournalGrid({ entries, onOpen }:{ entries: JournalEntry[]; onOpen:(e:JournalEntry)=>void }){
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((e)=> (
        <button key={e.id} onClick={()=>onOpen(e)} className="rounded-xl border bg-white p-4 text-left hover:shadow-md transition-shadow">
          <p className="text-xs text-foreground/60">{new Date(e.date).toLocaleDateString()}</p>
          <p className="mt-2 line-clamp-3 text-sm text-foreground/90">{e.text}</p>
        </button>
      ))}
    </div>
  );
}
