import { useMemo } from "react";

export type Resource = { id:string; title:string; description:string; category: string; image: string };

export function ResourceFilters({ categories, active, onChange }:{ categories:string[]; active:string; onChange:(c:string)=>void }){
  return (
    <div className="flex flex-wrap gap-2">
      {(["All", ...categories]).map((c)=> (
        <button key={c} onClick={()=>onChange(c)} className={`rounded-full px-4 py-2 text-sm border ${active===c?"bg-primary text-primary-foreground":"bg-white hover:bg-secondary/70"}`}>{c}</button>
      ))}
    </div>
  );
}

export function ResourceCard({ r }:{ r: Resource }){
  return (
    <div className="rounded-xl border bg-white overflow-hidden hover:shadow-md transition-shadow">
      <img src={r.image} alt="Thumbnail" className="h-32 w-full object-cover"/>
      <div className="p-4">
        <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">{r.category}</span>
        <h3 className="mt-2 font-semibold">{r.title}</h3>
        <p className="text-sm text-foreground/80 mt-1 line-clamp-3">{r.description}</p>
      </div>
    </div>
  );
}

export function ResourceList({ resources }:{ resources: Resource[] }){
  const grid = useMemo(()=> resources, [resources]);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {grid.map((r)=> <ResourceCard key={r.id} r={r} />)}
    </div>
  );
}
