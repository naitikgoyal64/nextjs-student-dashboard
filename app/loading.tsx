export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="animate-pulse space-y-6">

        <div className="h-60 rounded-3xl bg-zinc-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="h-60 rounded-3xl bg-zinc-800"></div>

          <div className="h-60 rounded-3xl bg-zinc-800"></div>

          <div className="h-60 rounded-3xl bg-zinc-800"></div>

        </div>

      </div>
    </main>
  )
}