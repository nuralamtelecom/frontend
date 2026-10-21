"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Star,
  Zap,
  Wrench,
  ArrowRight,
  Clock,
  User,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

type Tool = {
  id: string;
  title: string;
  category: string;
  pricePerHour: number;
  rating: number;
  sellerName: string;
  featured?: boolean;
};

const toolsMock: Tool[] = [
  {
    id: "t1",
    title: "UnlockTool",
    category: "Unlocking",
    pricePerHour: 9.99,
    rating: 4.7,
    sellerName: "GSM Master Team",
    featured: true,
  },
  {
    id: "t2",
    title: "Chimera",
    category: "Mobile Repair",
    pricePerHour: 14.5,
    rating: 4.9,
    sellerName: "SecureBox Sellers",
  },
  {
    id: "t3",
    title: "Borneo",
    category: "Diagnostics",
    pricePerHour: 11.25,
    rating: 4.6,
    sellerName: "Remote Service Pro",
  },
  {
    id: "t4",
    title: "Medusa Box",
    category: "Service Suite",
    pricePerHour: 18.0,
    rating: 4.8,
    sellerName: "FlashLab BD",
  },
  {
    id: "t5",
    title: "Octoplus",
    category: "Unlocking",
    pricePerHour: 16.75,
    rating: 4.5,
    sellerName: "ToolHub Seller",
  },
  {
    id: "t6",
    title: "Octoplus Pro",
    category: "Repair",
    pricePerHour: 19.25,
    rating: 4.4,
    sellerName: "Pro Remote Team",
  },
];

function formatMoney(n: number) {
  return n % 1 === 0 ? `$${n.toFixed(0)}` : `$${n.toFixed(2)}`;
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const frac = rating - full;

  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && frac >= 0.4 && frac < 0.8;

        return (
          <span key={i} className="relative inline-block">
            <Star className="h-4 w-4" fill={isFull ? "currentColor" : "none"} stroke="currentColor" />
            {isHalf && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star className="h-4 w-4" fill="currentColor" stroke="currentColor" />
              </span>
            )}
            {!isFull && !isHalf && <span className="invisible">.</span>}
          </span>
        );
      })}
    </div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<"home" | "tools" | "how" | "auth">("home");

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return toolsMock;
    return toolsMock.filter((t) => `${t.title} ${t.category} ${t.sellerName}`.toLowerCase().includes(q));
  }, [query]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const topNav = [
    { label: "Home", section: "home" as const, id: "home" },
    { label: "Available Tools", section: "tools" as const, id: "tools" },
    { label: "How It Works", section: "how" as const, id: "how" },
    { label: "Login/Register", section: "auth" as const, id: "auth" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 ring-1 ring-red-500/40">
                <Sparkles className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <div className="text-sm font-black tracking-widest text-red-400">GSM.ASIA</div>
                <div className="text-xs text-slate-400 font-semibold">Tool Rental • Remote Servicing</div>
              </div>
            </div>

            {/* Desktop links */}
            <nav className="hidden items-center gap-6 md:flex">
              {topNav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveSection(item.section);
                    scrollTo(item.id);
                  }}
                  className={[
                    "text-sm font-bold transition",
                    activeSection === item.section ? "text-white" : "text-slate-300 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile */}
            <div className="md:hidden">
              <button
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-extrabold"
                onClick={() => scrollTo("tools")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-extrabold text-red-300">
              <Zap className="h-4 w-4 text-red-400" />
              Instant remote servicing after rental
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Rent GSM Tools & Get Remote Servicing Instantly
            </h1>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Choose a tool, pay securely, submit AnyDesk/UltraViewer credentials, and let sellers handle the remote repair—fast, reliable, and trackable.
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tools (e.g., UnlockTool, Chimera, Borneo)"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm font-semibold text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                </div>
              </div>

              <button
                onClick={() => scrollTo("tools")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm shadow-red-600/30 transition hover:bg-red-500"
              >
                Explore Tools <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <Clock className="h-4 w-4 text-red-400" />
                  Hourly Rental
                </div>
                <div className="mt-2 text-xs text-slate-400 font-semibold">Pay per hour/service</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                  Verified Sellers
                </div>
                <div className="mt-2 text-xs text-slate-400 font-semibold">Safer remote access</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <Wrench className="h-4 w-4 text-red-400" />
                  Trackable Status
                </div>
                <div className="mt-2 text-xs text-slate-400 font-semibold">Pending → Completed</div>
              </div>
            </div>
          </div>

          {/* Hero right */}
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-b from-red-600/25 via-transparent to-transparent blur-xl" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold text-red-300">Featured Picks</div>
                  <div className="mt-2 text-xl font-black">Top-rated tools this week</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs font-extrabold text-slate-200 border border-white/10">
                  GSM Remote
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {toolsMock
                  .filter((t) => t.featured)
                  .slice(0, 2)
                  .map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-black">{t.title}</div>
                        <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <User className="h-3.5 w-3.5" />
                          {t.sellerName}
                        </div>
                      </div>
                      <div className="text-right">
                        <Stars rating={t.rating} />
                        <div className="mt-2 text-xs text-slate-400 font-semibold">{formatMoney(t.pricePerHour)} / hour</div>
                      </div>
                    </div>
                  ))}

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold">Ready to start?</div>
                    <button
                      onClick={() => scrollTo("tools")}
                      className="rounded-xl bg-red-600 px-4 py-2 text-xs font-extrabold text-white hover:bg-red-500 transition"
                    >
                      Browse now
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 font-semibold">
                    Select tool & pay, then submit AnyDesk/UltraViewer credentials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black">Available Tools</h2>
            <p className="mt-1 text-slate-400 font-semibold">Transparent pricing • Ratings • Seller marketplace</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-extrabold text-slate-200">
              Results: {filteredTools.length}
            </div>
            <button
              onClick={() => setQuery("")}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-extrabold text-slate-200 hover:bg-white/10 transition"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-red-500/40 hover:bg-white/7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/40 flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-lg font-black">{tool.title}</div>
                      <div className="text-xs text-slate-400 font-semibold">{tool.category}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-extrabold text-slate-200">
                  {formatMoney(tool.pricePerHour)}
                  <span className="text-slate-400">/hr</span>
                </div>
              </div>

              <div className="mt-4">
                <Stars rating={tool.rating} />
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <User className="h-4 w-4 text-slate-500" />
                  Seller: <span className="text-slate-200">{tool.sellerName}</span>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-200">
                    <Clock className="h-4 w-4 text-red-400" />
                    Pricing: Hourly
                  </div>
                  <div className="mt-1 text-xs text-slate-400 font-semibold">Includes remote servicing workflow</div>
                </div>
              </div>

              <button
                onClick={() => alert(`Rent Now: ${tool.title}`)}
                className="mt-5 w-full rounded-2xl bg-red-600 px-4 py-3 text-sm font-black text-white transition hover:bg-red-500"
              >
                Rent Now
              </button>

              <div className="mt-3 text-xs text-slate-400 font-semibold">
                Status after rental: Pending → Seller Connected → Completed
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div>
          <h2 className="text-2xl font-black">How It Works</h2>
          <p className="mt-1 text-slate-400 font-semibold">A simple 3-step remote servicing flow</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 ring-1 ring-red-500/40">
                <span className="text-lg font-black text-red-300">1</span>
              </div>
              <div>
                <div className="text-sm font-extrabold text-red-300">Step One</div>
                <div className="text-lg font-black">Select Tool & Pay</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-300 leading-relaxed">
              Pick your tool, choose the service time, and complete payment securely.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 ring-1 ring-red-500/40">
                <span className="text-lg font-black text-red-300">2</span>
              </div>
              <div>
                <div className="text-sm font-extrabold text-red-300">Step Two</div>
                <div className="text-lg font-black">Submit ID & Password</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-300 leading-relaxed">
              Provide your AnyDesk or UltraViewer ID (and password if required) to start remote servicing.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 ring-1 ring-red-500/40">
                <span className="text-lg font-black text-red-300">3</span>
              </div>
              <div>
                <div className="text-sm font-extrabold text-red-300">Step Three</div>
                <div className="text-lg font-black">Seller Logs In Remotely</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-300 leading-relaxed">
              The seller connects, performs the service, and updates order status to Completed.
            </div>
          </div>
        </div>
      </section>

      {/* Auth CTA */}
      <section id="auth" className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-600/15 via-white/5 to-transparent p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-extrabold text-red-300">
                <ShieldCheck className="h-4 w-4" />
                Secure & Trackable
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-black">Login / Register to Start Renting</h3>
              <p className="mt-2 text-slate-300 font-semibold">Your orders, credentials, and progress live in the dashboard.</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => alert("Login clicked")}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-slate-100 hover:bg-white/10 transition"
              >
                Login
              </button>
              <button
                onClick={() => alert("Register clicked")}
                className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-black text-white hover:bg-red-500 transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/40 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-widest text-red-400">GSM.ASIA</div>
                  <div className="text-xs text-slate-400 font-semibold">Tool Rental & Remote Servicing</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-400 font-semibold leading-relaxed">
                Rent GSM tools, submit AnyDesk/UltraViewer details, and get remote help from verified sellers.
              </p>
            </div>

            <div>
              <div className="text-sm font-extrabold text-white">Quick Links</div>
              <div className="mt-4 grid gap-2">
                <button onClick={() => scrollTo("home")} className="text-sm text-slate-300 hover:text-white text-left font-semibold">
                  Home
                </button>
                <button onClick={() => scrollTo("tools")} className="text-sm text-slate-300 hover:text-white text-left font-semibold">
                  Available Tools
                </button>
                <button onClick={() => scrollTo("how")} className="text-sm text-slate-300 hover:text-white text-left font-semibold">
                  How It Works
                </button>
                <button onClick={() => scrollTo("auth")} className="text-sm text-slate-300 hover:text-white text-left font-semibold">
                  Login/Register
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm font-extrabold text-white">Contact</div>
              <div className="mt-4 text-sm text-slate-300 font-semibold leading-relaxed">
                Support: <span className="text-slate-100">support@gsm.asia</span>
                <br />
                Telegram/WhatsApp: <span className="text-slate-100">+880XXXXXXXXX</span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-extrabold text-slate-200">Tip</div>
                <div className="mt-1 text-sm text-slate-300 font-semibold">
                  Always verify remote credentials before connecting.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-400 font-bold">
            © {new Date().getFullYear()} gsm.asia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}