import Link from 'next/link';
import { Search, ShieldCheck, Zap, Key, UserCheck, ArrowRight, Server, Phone, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl font-bold text-xl tracking-wider">
              gsm.asia
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
              v2.0 Live API
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <Link href="/" className="text-blue-600 font-semibold">Home</Link>
            <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="#sellers" className="hover:text-blue-600 transition">Verified Sellers</Link>
            <Link href="#api" className="hover:text-blue-600 transition">Reseller API</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-blue-600 px-3 py-2">
              Sign In
            </Link>
            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-3.5 py-1.5 rounded-full font-medium mb-6">
            <Zap className="w-3.5 h-3.5" /> Asia's Premier GSM Service Marketplace
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Rent GSM Tools & Instant <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Remote Servicing
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Connect directly with verified GSM sellers. Order IMEI repairs, tool rentals, and server credits with real-time API execution.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center px-4 py-2 text-slate-800">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search Xiaomi Auth, UnlockTool, FRP, Server Credits..." 
                className="w-full text-slate-900 placeholder-slate-400 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition shadow-md">
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Zap className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Instant API Sync</h3>
              <p className="text-xs text-slate-500">Automated order execution 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Verified Sellers</h3>
              <p className="text-xs text-slate-500">Certified GSM technicians & suppliers</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg"><Key className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Secure Wallet</h3>
              <p className="text-xs text-slate-500">Instant deposits & safe payouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Popular Services & Rentals</h2>
            <p className="text-slate-500 text-sm mt-1">Direct connections with automated GSM reseller APIs</p>
          </div>
          <Link href="/services" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">Xiaomi EDL Auth</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Instant Authorized flashing & unbrick service.</p>
            <div className="flex items-center justify-between pt-3 border-t">
              <div>
                <span className="text-xs text-slate-400 block">Starting at</span>
                <span className="font-extrabold text-slate-900 text-lg">$15.00</span>
              </div>
              <button className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">OnePlus IMEI Repair</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Remote servicing & certificate repair.</p>
            <div className="flex items-center justify-between pt-3 border-t">
              <div>
                <span className="text-xs text-slate-400 block">Starting at</span>
                <span className="font-extrabold text-slate-900 text-lg">$16.00</span>
              </div>
              <button className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">Remote FRP Unlock</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Fast Samsung/MTK/SPD FRP removal.</p>
            <div className="flex items-center justify-between pt-3 border-t">
              <div>
                <span className="text-xs text-slate-400 block">Starting at</span>
                <span className="font-extrabold text-slate-900 text-lg">$30.00</span>
              </div>
              <button className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">Server Credits x100</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Octoplus / Chimera / UnlockTool refills.</p>
            <div className="flex items-center justify-between pt-3 border-t">
              <div>
                <span className="text-xs text-slate-400 block">Starting at</span>
                <span className="font-extrabold text-slate-900 text-lg">$100.00</span>
              </div>
              <button className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-extrabold text-white">gsm.asia</span>
            <p className="text-xs text-slate-500 mt-1">© 2026 gsm.asia. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/api-docs" className="hover:text-white transition">API Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
