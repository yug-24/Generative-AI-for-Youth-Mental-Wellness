import { CheckCircle2, Circle, Clock } from "lucide-react";

type Milestone = { id:string; title:string; date?:string; status:"done"|"pending"|"upcoming" };

export default function JourneyVisualizer({ items }:{ items: Milestone[] }){
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border"/>
      <ul className="space-y-6">
        {items.map((m)=> (
          <li key={m.id} className="relative pl-12">
            <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border">
              {m.status==="done" && <CheckCircle2 className="text-emerald-600"/>}
              {m.status==="pending" && <Clock className="text-orange-600"/>}
              {m.status==="upcoming" && <Circle className="text-foreground/50"/>}
            </span>
            <h3 className="font-semibold">{m.title}</h3>
            {m.date && <p className="text-xs text-foreground/60">{new Date(m.date).toLocaleDateString()}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
