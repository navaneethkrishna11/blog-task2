export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="card bg-white shadow-md rounded-md p-8 text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6">Click Below to Access Dashboard</h1>
        <a
          href="/dashboard/"
          className="inline-block bg-black text-white text-xl font-semibold px-6 py-3 rounded-md hover:bg-amber-800 transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
