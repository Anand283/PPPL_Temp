import { Truck, Leaf, Award, ShieldCheck } from 'lucide-react'

const TRUST_CARDS = [
  {
    icon: Truck,
    title: 'Dedicated Transport Fleet',
    items: [
      'In-house delivery vehicles for bulk dispatch',
      'Available at a nominal logistics surcharge',
      'Covering Bhiwandi & surrounding Maharashtra',
      'Palletised and strapped loads as standard',
    ],
    footnote: 'Fleet availability subject to order size and lead time. Confirm at booking.',
  },
  {
    icon: Leaf,
    title: 'Environmental Compliance',
    items: [
      'Adheres to MoEFCC manufacturing regulations',
      '60–80% recycled fibre usage in standard board mix',
      'Active OCC (Old Corrugated Containers) sourcing programme',
      'Waste-stream minimisation across all production lines',
    ],
    footnote: 'Compliance documentation available on request for ESG-driven procurement.',
  },
]

const BADGES = [
  'ISO 9001:2015',
  'MoEFCC Compliant',
  'BIS Kraft Grade A',
  'GST Registered',
  '30+ Yrs in Operation',
]

export default function LogisticsTrust() {
  return (
    <section id="logistics" className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#2981cf] font-bold mb-3">
            Infrastructure &amp; Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-[0.95]">
            Built for<br />
            <span className="text-[#0aa36b]">Scale &amp; Trust</span>
          </h2>
        </div>

        {/* Award hero block */}
        <div
          className="mb-10 border-2 border-[#2981cf] bg-white p-8 md:p-10 relative overflow-hidden"
          style={{ boxShadow: '4px 4px 0 #2981cf' }}
        >
          {/* Dot texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(#2981cf 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Badge graphic */}
            <div className="flex-shrink-0 relative">
              <div className="w-28 h-28 border-4 border-[#2981cf] flex items-center justify-center">
                <Award size={50} className="text-[#2981cf]" />
              </div>
              <div
                className="absolute -top-3 -right-3 text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-[0.12em]"
                style={{ backgroundColor: '#2981cf' }}
              >
                2024
              </div>
            </div>
            <div>
              <div className="text-[#2981cf] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                Industry Recognition
              </div>
              <h3 className="text-gray-900 font-black text-2xl md:text-3xl uppercase leading-tight mb-3">
                Best Company for Product<br className="hidden sm:block" />
                Quality and Service — 2024
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                Awarded by the regional corrugated packaging industry body. A recognition of
                consistent on-time delivery rates, print accuracy, and post-sales responsiveness
                maintained across 30+ years of B2B operation.
              </p>
              <div className="flex items-center gap-2 mt-5">
                <ShieldCheck size={14} className="text-[#0aa36b]" />
                <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">
                  Award certificate available on request
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {TRUST_CARDS.map(({ icon: Icon, title, items, footnote }) => (
            <div
              key={title}
              className="border border-gray-200 bg-white p-6 hover:border-[#0aa36b] transition-colors duration-200"
              style={{ boxShadow: '0 1px 4px rgba(41,129,207,0.06)' }}
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-[#0aa36b] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-gray-900 font-black uppercase tracking-[0.12em] text-sm">
                  {title}
                </h3>
              </div>
              <ul className="space-y-2.5 mb-4">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <span className="text-[#0aa36b] font-black flex-shrink-0 mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-gray-400 text-xs italic border-t border-gray-100 pt-3 font-mono">
                {footnote}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap gap-2.5">
          {BADGES.map(badge => (
            <div
              key={badge}
              className="border border-gray-200 px-4 py-2 text-gray-400 text-[10px] font-mono uppercase tracking-[0.18em] hover:border-[#2981cf] hover:text-[#2981cf] transition-colors duration-150 cursor-default bg-white"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
