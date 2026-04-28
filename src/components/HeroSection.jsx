import { ArrowRight, Award, Zap, Clock, TrendingUp, Building2 } from 'lucide-react'

const STATS = [
  { value: '50K+', label: 'Units / Day', icon: Zap },
  { value: '30+', label: 'Years Operating', icon: Clock },
  { value: '₹35Cr+', label: 'Annual Turnover', icon: TrendingUp },
  { value: '2', label: 'Mfg. Plants', icon: Building2 },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#111111] flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute -right-20 top-0 bottom-0 w-96 opacity-5 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #FFD700 25%, transparent 25%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Award pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#111111] px-3 py-1.5 mb-8">
              <Award size={13} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                2024 Best Company — Product Quality &amp; Service
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight uppercase mb-6">
              Industrial<br />
              <span className="text-[#FFD700]">Corrugated</span><br />
              Packaging.
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-5 max-w-lg">
              India's trusted B2B corrugated manufacturer. 5-ply &amp; 7-ply boxes at any
              volume — built for supply chains that can't afford delays.
            </p>

            {/* Bulk-only badge */}
            <div className="inline-flex items-center gap-2 border border-[#2a2a2a] bg-[#1a1a1a] px-3 py-1.5 mb-10">
              <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-mono">
                Bulk Orders Only · No Retail · Min. 1,000 Units
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#111111] px-8 py-4 font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-colors duration-150"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2a2a2a] text-gray-400 px-8 py-4 font-black uppercase tracking-[0.15em] text-sm hover:border-[#FFD700] hover:text-[#FFD700] transition-colors duration-150"
              >
                View Capabilities
              </a>
            </div>
          </div>

          {/* Right column — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="border border-[#222222] bg-[#181818] p-6 relative overflow-hidden group hover:border-[#FFD700] transition-colors duration-200"
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-0.5 h-full bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <Icon size={18} className="text-[#FFD700] mb-4 opacity-50" />
                <div className="text-4xl font-black text-white font-mono mb-1 tabular-nums">
                  {value}
                </div>
                <div className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-semibold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-700 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
      </div>
    </section>
  )
}
