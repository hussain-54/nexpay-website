import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Zap, Globe2, ShieldCheck, Clock, DollarSign, EyeOff, Users,
  Wallet, Coins, Network, CheckCircle2, Compass, Target, Trophy, Award,
  TrendingUp, Building2, Briefcase, Sparkles, Mail, Phone, Linkedin, Twitter,
  Menu, X, ArrowUpRight, BadgeCheck,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexPay — The Global Stablecoin Payment Network" },
      { name: "description", content: "Send money anywhere. Settle instantly. NexPay is a blockchain-native stablecoin payment network across 150+ countries." },
      { property: "og:title", content: "NexPay — Borderless. Instant. Transparent." },
      { property: "og:description", content: "Instant, fee-minimal, borderless value transfer for individuals, businesses, and institutions." },
    ],
  }),
  component: Landing,
});

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold text-lg tracking-tight">
      <span className="grid place-items-center h-8 w-8 rounded-lg bg-mint text-midnight-deep shadow-[0_0_24px_-4px_var(--mint)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V4l16 16V4" />
        </svg>
      </span>
      <span className={light ? "text-white" : "text-foreground"}>NexPay</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string][] = [
    ["Solution", "#solution"],
    ["How It Works", "#how"],
    ["Markets", "#markets"],
    ["Team", "#team"],
    ["Achievements", "#achievements"],
    ["Mission", "#mission"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-midnight-deep/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo light />
        <nav className="hidden lg:flex items-center gap-7 text-sm text-white/70">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-colors">
            View Whitepaper
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-semibold bg-mint text-midnight-deep hover:bg-mint-glow transition-colors inline-flex items-center gap-1.5">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-midnight-deep/95 backdrop-blur-xl border-t border-white/10">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white py-1.5">{label}</a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
              <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm text-center text-white border border-white/20">View Whitepaper</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm text-center font-semibold bg-mint text-midnight-deep">Request a Demo</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-mint/10 text-[color:var(--mint)] border border-[color-mix(in_oklab,var(--mint)_30%,transparent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-mint" /> {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-midnight-gradient text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container-x relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl reveal">
          <SectionEyebrow>Borderless · Instant · Transparent</SectionEyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
            The Global <span className="text-gradient-mint">Stablecoin</span> Payment Network
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Send money anywhere. Settle instantly. No banks. No borders. No delays.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3.5 rounded-xl font-semibold bg-mint text-midnight-deep hover:bg-mint-glow transition-colors inline-flex items-center gap-2 shadow-[0_10px_40px_-10px_var(--mint)]">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors">
              View Whitepaper
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal">
          {[
            { k: "150+", l: "Countries" },
            { k: "<1s", l: "Settlement" },
            { k: "0.1%", l: "Fee" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
              <div className="text-5xl md:text-6xl font-extrabold text-gradient-mint tracking-tight">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/60">{s.l}</div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-sm text-white/50 reveal">
          Founded by <span className="text-white/80 font-medium">Saith Asfand Yar</span> (CEO) &{" "}
          <span className="text-white/80 font-medium">Hussain Ahmad Durrani</span> (Head of Technology)
        </p>
      </div>
    </section>
  );
}

function Problem() {
  const stats = [
    { k: "$150T+", l: "Annual cross-border volume" },
    { k: "3–5 days", l: "Average settlement time" },
    { k: "6.3%", l: "Average remittance fee" },
    { k: "1.4B", l: "Unbanked adults globally" },
  ];
  const problems = [
    { icon: Clock, t: "Slow Settlement", d: "SWIFT and correspondent banking take 3–5 days for international transfers." },
    { icon: DollarSign, t: "Excessive Fees", d: "Banks and remittance providers charge 5–10% per transaction." },
    { icon: EyeOff, t: "Zero Transparency", d: "Senders and recipients have no real-time visibility into transfers." },
    { icon: Users, t: "Financial Exclusion", d: "1.4B adults remain unbanked, cut off from the global economy." },
  ];
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            Global payments are <span className="text-[color:var(--mint)]">broken.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            $150T+ moves across borders each year — yet the system remains slow, expensive, and opaque.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {stats.map((s) => (
            <div key={s.l} className="card-elevated p-6">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-snug">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div key={p.t} className="card-elevated card-elevated-hover p-6 reveal">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/5 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const features = [
    { icon: Zap, t: "Instant Settlement", d: "On-chain validation confirms every transaction in under one second." },
    { icon: Globe2, t: "Global Rail Network", d: "150+ countries connected through stablecoin corridors — retail, SME, and institutional." },
    { icon: ShieldCheck, t: "Immutable Ledger", d: "Every transaction recorded on-chain, fully auditable and tamper-proof." },
  ];
  return (
    <section id="solution" className="section-y bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>The Solution</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            Introducing <span className="text-gradient-mint">NexPay</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A blockchain-native stablecoin payment network enabling instant, fee-minimal, borderless value transfer for individuals, businesses, and financial institutions across 150+ countries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.t} className="card-elevated card-elevated-hover p-7 reveal">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-[color:var(--mint)] to-[color:var(--mint-glow)] text-midnight-deep">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{f.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: Wallet, t: "User Initiates", d: "User sends any currency via NexPay app, API, or partner wallet with KYC-lite onboarding." },
    { n: "02", icon: Coins, t: "Stablecoin Bridge", d: "Funds are instantly converted to a USD-pegged stablecoin on the settlement layer." },
    { n: "03", icon: Network, t: "On-Chain Settlement", d: "Transaction validated and settled on-chain in under 1 second, with zero intermediaries." },
    { n: "04", icon: CheckCircle2, t: "Recipient Receives", d: "Recipient gets local currency, stablecoin, or direct-to-wallet — their choice." },
  ];
  return (
    <section id="how" className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Product Architecture</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">How It Works</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A three-layer architecture powering seamless global value transfer.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="relative reveal">
                <div className="card-elevated card-elevated-hover p-6 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[color:var(--mint)]">STEP {s.n}</span>
                    <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary text-primary-foreground">
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground reveal">
          Powered by stablecoin infrastructure · Near-zero fees · Instant finality · No correspondent banks
        </p>
      </div>
    </section>
  );
}

function Markets() {
  const tam = [
    { k: "$150T", l: "TAM", d: "Total Cross-Border Payment Volume" },
    { k: "$25T", l: "SAM", d: "Addressable B2B & Remittance Market" },
    { k: "$2.5T", l: "SOM", d: "Stablecoin-Native Payment Segment" },
  ];
  const drivers = [
    "Stablecoin transaction volume grew 900% in the past 3 years",
    "$860B+ in global remittances sent annually",
    "4.3B smartphone users driving mobile payment adoption",
    "DeFi and on-chain settlement eliminating legacy banking delays",
  ];
  return (
    <section id="markets" className="section-y bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Market Opportunity</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            A Multi-Trillion Dollar Opportunity
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tam.map((t) => (
            <div key={t.l} className="card-elevated p-8 reveal">
              <div className="text-xs font-mono font-semibold text-[color:var(--mint)] uppercase tracking-widest">{t.l}</div>
              <div className="mt-3 text-6xl md:text-7xl font-extrabold tracking-tight text-primary">{t.k}</div>
              <div className="mt-3 text-sm text-muted-foreground">{t.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-elevated p-8 reveal">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-5 w-5 text-[color:var(--mint)]" />
            <h3 className="text-lg font-bold">Key Growth Drivers</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {drivers.map((d) => (
              <div key={d} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--mint)] shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNexPay() {
  const rows = [
    { name: "NexPay", settlement: "<1 second", fee: "0.1%", coverage: "Retail · B2B · Institutional", highlight: true },
    { name: "SWIFT / Banks", settlement: "3–5 days", fee: "5–10%", coverage: "Institutional only" },
    { name: "PayPal / Wise", settlement: "Minutes – hours", fee: "1–3%", coverage: "Retail / SME" },
    { name: "Ripple", settlement: "3–5 seconds", fee: "0.5%", coverage: "Institutional" },
    { name: "Tazapay", settlement: "Hours", fee: "1.5%", coverage: "B2B" },
    { name: "Plasma", settlement: "Seconds", fee: "0.3%", coverage: "Limited corridors" },
  ];
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Competitive Advantage</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">Why NexPay</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The universal stablecoin rail — faster, cheaper, and broader than every legacy or crypto alternative.
          </p>
        </div>

        <div className="mt-12 card-elevated overflow-hidden reveal">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[640px]">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 font-semibold text-foreground">Provider</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Settlement</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Fee</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className={`border-t border-border ${r.highlight ? "bg-[color-mix(in_oklab,var(--mint)_8%,transparent)]" : ""}`}>
                    <td className="px-6 py-4 font-semibold">
                      <span className={r.highlight ? "text-[color:var(--mint)] inline-flex items-center gap-2" : ""}>
                        {r.name}
                        {r.highlight && <BadgeCheck className="h-4 w-4" />}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{r.settlement}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.fee}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { icon: Trophy, title: "1st Place — Digital Payments Innovation Challenge", desc: "Recognised by central bank-backed regulators and payment infrastructure bodies — competed against 200+ global entries." },
    { icon: Award, title: "Top 30 Global Startup Ranking", desc: "Achieved Top 3 position in Pakistan and ranked among the Top 30 globally at DevPak Hackathon." },
  ];
  return (
    <section id="achievements" className="section-y bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Traction</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">Validation & Recognition</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Early proof validated through global competitions, international organisations, and ecosystem recognition.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.title} className="card-elevated card-elevated-hover p-8 reveal relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-mint/10 blur-3xl" />
              <div className="relative">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--mint)] to-[color:var(--mint-glow)] text-midnight-deep shadow-[0_10px_30px_-10px_var(--mint)]">
                  <i.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug">{i.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Mission & Vision</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">Building the rails for global value.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-elevated card-elevated-hover p-8 reveal">
            <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary text-primary-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              To make cross-border money movement instant, transparent, and accessible to everyone — eliminating the friction, fees, and delays of legacy financial systems.
            </p>
          </div>
          <div className="card-elevated card-elevated-hover p-8 reveal">
            <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-[color:var(--mint)] to-[color:var(--mint-glow)] text-midnight-deep">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Vision</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              A world where value moves as freely as information — where 1.4 billion unbanked adults gain access to the global economy through a single, universal stablecoin payment rail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { initials: "SAY", name: "Saith Asfand Yar", role: "Founder & CEO", bio: "International policy advocate, Their World (UK). FAO & WWF-recognised technology founder." },
    { initials: "SK", name: "Sarmad Khan", role: "CTO", bio: "Blockchain architecture & smart contracts. Designs the stablecoin settlement layer." },
    { initials: "AT", name: "Alisha Tahir", role: "CFO", bio: "Stablecoin reserve & treasury strategy. Financial modelling and investor relations." },
    { initials: "HAD", name: "Hussain Ahmad Durrani", role: "Co-Founder & Head of Technology", bio: "Founder & CEO of Mechaline (AI fleet intelligence). AI/ML engineer — YOLOv11, FastAPI, Python, Web3." },
  ];
  return (
    <section id="team" className="section-y bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>The Builders</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">Built by operators.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Global exposure, technical depth, and fintech execution experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m) => (
            <div key={m.name} className="card-elevated card-elevated-hover p-6 reveal">
              <div className="h-16 w-16 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--midnight)_60%,var(--mint))] text-white font-bold text-lg tracking-wider">
                {m.initials}
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug">{m.name}</h3>
              <p className="text-sm font-medium text-[color:var(--mint)] mt-1">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessModel() {
  const streams = [
    { icon: Sparkles, t: "Transaction Fees", d: "0.1% per transaction — up to 50× cheaper than SWIFT, 10× cheaper than Wise. $1M/mo at $1B volume." },
    { icon: Coins, t: "Reserve Yield", d: "Yield on stablecoin reserves — approximately $25M/yr on $500M float." },
    { icon: Briefcase, t: "API Licensing", d: "White-label infrastructure for fintechs, banks, and neobanks. $50K–$500K per partner." },
    { icon: Building2, t: "Premium Accounts", d: "Pro tiers with bulk transfers, dedicated corridors, recurring SaaS revenue." },
  ];
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <SectionEyebrow>Business Model</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">Four Diversified Revenue Streams</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {streams.map((s) => (
            <div key={s.t} className="card-elevated card-elevated-hover p-6 reveal">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/5 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative bg-midnight-gradient text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container-x relative py-24 md:py-32">
        <div className="max-w-3xl reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-mint/15 text-[color:var(--mint-glow)] border border-mint/30">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" /> Seeking $2M Seed Round
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Let's redefine how the world <span className="text-gradient-mint">moves money.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {[
            { icon: Mail, label: "Email", value: "asfandbr123@gmail.com", href: "mailto:asfandbr123@gmail.com" },
            { icon: Phone, label: "Phone", value: "(+92) 307 9966263", href: "tel:+923079966263" },
            { icon: Globe2, label: "Website", value: "nexpay.io (Coming Soon)", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm p-5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-mint/15 text-[color:var(--mint-glow)] shrink-0">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-white/50">{c.label}</div>
                  <div className="text-sm font-medium text-white truncate">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 reveal">
          <a href="mailto:asfandbr123@gmail.com" className="px-6 py-3.5 rounded-xl font-semibold bg-mint text-midnight-deep hover:bg-mint-glow transition-colors inline-flex items-center gap-2 shadow-[0_10px_40px_-10px_var(--mint)]">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="px-6 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors">
            View Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols: { h: string; l: [string, string][] }[] = [
    { h: "Product", l: [["Solution", "#solution"], ["How It Works", "#how"], ["Markets", "#markets"]] },
    { h: "Company", l: [["Team", "#team"], ["Mission", "#mission"], ["Achievements", "#achievements"]] },
    { h: "Resources", l: [["Whitepaper", "#contact"], ["Contact", "#contact"]] },
  ];
  return (
    <footer className="bg-midnight-deep text-white/70">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Logo light />
            <p className="mt-4 text-sm text-white/60 max-w-xs">Borderless. Instant. Transparent.</p>
            <div className="mt-6 flex gap-2">
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-mint/50 hover:text-[color:var(--mint)] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-mint/50 hover:text-[color:var(--mint)] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-sm font-semibold text-white mb-4">{c.h}</div>
              <ul className="space-y-2.5 text-sm">
                {c.l.map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} NexPay. All rights reserved.</div>
          <div>Built for a borderless world.</div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Markets />
        <WhyNexPay />
        <Achievements />
        <Mission />
        <Team />
        <BusinessModel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
