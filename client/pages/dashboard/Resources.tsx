import { useEffect, useMemo, useState } from "react";
import Spinner from "@/components/sahara/Spinner";
import { ResourceFilters, ResourceList, Resource } from "@/components/sahara/Resources";
import { fetchResources } from "@/lib/api-mock";

export default function ResourcesPage(){
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("All");

  useEffect(()=>{ (async()=>{ setLoading(true); const data = await fetchResources(); setResources(data); setLoading(false); })(); },[]);

  const categories = useMemo(()=> Array.from(new Set(resources.map(r=>r.category))), [resources]);
  const filtered = useMemo(()=> active==="All"? resources : resources.filter(r=> r.category===active), [resources, active]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pathfinder Resources</h1>
      <ResourceFilters categories={categories} active={active} onChange={setActive} />
      {loading ? <div className="grid place-items-center h-40"><Spinner size={28}/></div> : <ResourceList resources={filtered} />}
    </div>
  );
}
