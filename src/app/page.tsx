import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-blue-600">gsm.asia</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Available Tools</Link>
            <Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link>
          </nav>
          <div>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Login / Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-blue-800 text-blue-200 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Instant Remote Servicing & API
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6">
            Rent GSM Tools & Get Remote Servicing Instantly
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Choose a tool, pay securely, submit credentials, and let certified technicians handle your remote repair.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-2 rounded-xl shadow-lg flex items-center max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search tools (e.g., UnlockTool, Chimera, FRP)..." 
              className="w-full px-4 py-2 text-slate-800 focus:outline-none"
            />
            <button className="bg-emerald-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="text-blue-600 text-2xl font-bold mb-2">⏱️ Hourly Rental</div>
            <p className="text-slate-600 text-sm">Pay per hour or per service with flexible wallet integration.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="text-blue-600 text-2xl font-bold mb-2">🛡️ Verified Sellers</div>
            <p className="text-slate-600 text-sm">Safer remote access with certified and trusted professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="text-blue-600 text-2xl font-bold mb-2">📊 Trackable Status</div>
            <p className="text-slate-600 text-sm">Real-time tracking from Pending to Completed workflow.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
