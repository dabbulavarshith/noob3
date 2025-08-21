import { Navigation } from "@/components/navigation";
import { useMarketData } from "@/hooks/use-market-data";

export default function SimpleDashboard() {
  const { data, isLoading } = useMarketData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-6xl mx-auto pt-24 p-4 space-y-8">
        <h1 className="text-3xl font-bold mb-4">MarketPulse (Static)</h1>

        {isLoading ? (
          <div>Loading market data…</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {data.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-border p-4 bg-card"
              >
                <div className="font-medium">{s.symbol}</div>
                <div className="text-lg">{s.name}</div>
                <div className="text-2xl mt-2">{s.price.toFixed(2)}</div>
                <div
                  className={`mt-1 ${
                    s.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {s.change >= 0 ? "▲" : "▼"} {s.change} ({s.changePercent}%)
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
