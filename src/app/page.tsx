export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-extrabold text-[#FFD700] mb-4">Vegas Good Times</h1>
      <p className="text-lg text-white/80 mb-8">
        Book unforgettable shows, dining, and nightlife across the Strip and Downtown.
      </p>

      <div className="space-y-4">
        <a
          href="/category/nightlife"
          className="block text-lg font-bold text-[#FFD700] hover:underline"
        >
          🔥 View Hot Shows
        </a>
        <a
          href="/category/food"
          className="block text-lg font-bold text-blue-400 hover:underline"
        >
          🍽 Explore Dining Options
        </a>
      </div>
    </main>
  );
}
