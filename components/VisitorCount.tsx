"use client";
import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const plausibleApi = process.env.NEXT_PUBLIC_PLAUSIBLE_API; // optional
    async function fetchCount() {
      try {
        // Try internal serverless proxy first
        const resProxy = await fetch('/api/visitor-count');
        if (resProxy.ok) {
          const d = await resProxy.json();
          if (typeof d.count === 'number') { setCount(d.count); return; }
        }

        // Then try Plausible endpoint if provided
        if (plausibleApi) {
          const res = await fetch(plausibleApi);
          if (res.ok) {
            const data = await res.json();
            if (typeof data.count === 'number') { setCount(data.count); return; }
          }
        }
      } catch (e) {
        // fallback
      }

      try {
        const stored = Number(localStorage.getItem('visitor_count') || '0');
        const next = stored + 1;
        localStorage.setItem('visitor_count', String(next));
        setCount(next);
      } catch (e) {
        setCount(null);
      }
    }
    fetchCount();
  }, []);

  if (count === null) return <span className="text-gray-400 text-sm">Visitors: —</span>;
  return <span className="text-gray-400 text-sm">Visitors (anon): {count}</span>;
}
