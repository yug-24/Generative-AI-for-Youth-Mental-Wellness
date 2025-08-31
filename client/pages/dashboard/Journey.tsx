import { useEffect, useState } from "react";
import Spinner from "@/components/sahara/Spinner";
import JourneyVisualizer from "@/components/sahara/JourneyVisualizer";
import { fetchJourney } from "@/lib/api-mock";

export default function JourneyPage(){
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{ (async()=>{ setLoading(true); const data = await fetchJourney(); setItems(data); setLoading(false); })(); },[]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Wellness Journey</h1>
      {loading ? <div className="grid place-items-center h-40"><Spinner size={28}/></div> : <JourneyVisualizer items={items as any} />}
    </div>
  );
}
