import { ClipboardList, BarChart2, Phone, Mail, AlertTriangle } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Define Your Specs',
    description:
      'Board type (5-ply or 7-ply), outer dimensions, print requirements, and whether you need inner partitions.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'State Your Volume',
    description:
      'Minimum 1,000 units per order. Share your monthly or annual run rate for the most competitive rate card.',
  },
  {
    number: '03',
    icon: Phone,
    title: 'Call or Email to Confirm',
    description:
      'One call locks your price and timeline. A dedicated account manager is assigned to every bulk account.',
  },
]

export default function ContactGateway() {
  return (
    <section id="contact" className="bg-[#F9F9F9] py-20 border-t-4 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header + badge row */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">
              Order Gateway
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase leading-[0.95]">
              Ready to<br />
              <span className="text-[#FFD700]" style={{ WebkitTextStroke: '2px #111111' }}>
                Order?
              </span>
            </h2>
          </div>

          {/* Bulk orders badge */}
          <div
            className="inline-flex items-center gap-3 bg-[#111111] text-[#FFD700] px-6 py-4 self-start md:self-end"
            style={{ boxShadow: '4px 4px 0 #888' }}
          >
            <AlertTriangle size={20} className="flex-shrink-0" />
            <div>
              <div className="font-black text-base uppercase tracking-[0.15em]">
                Bulk Orders Only
              </div>
              <div className="text-gray-500 text-[10px] uppercase tracking-[0.18em] mt-0.5">
                Min. 1,000 Units · No Retail Sales
              </div>
            </div>
          </div>
        </div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {STEPS.map(step => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="border-2 border-[#111111] bg-white p-6 transition-all duration-150"
                style={{ boxShadow: '4px 4px 0 #111111' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-6xl font-black text-[#111111] opacity-[0.07] font-mono leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 bg-[#FFD700] border-2 border-[#111111] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#111111]" />
                  </div>
                </div>
                <h3 className="font-black text-[#111111] uppercase tracking-[0.12em] text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mb-10">

          {/* Phone */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-4 border-2 border-[#111111] bg-[#111111] text-white p-6 group transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px]"
            style={{ boxShadow: '4px 4px 0 #555' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #555')}
          >
            <div className="w-12 h-12 bg-[#FFD700] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-150">
              <Phone size={22} className="text-[#111111]" />
            </div>
            <div>
              <div className="text-[#FFD700] text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">
                Call Sales Directly
              </div>
              <div className="text-white font-black text-lg tracking-wide font-mono">
                +91 XX XXXX XXXX
              </div>
              <div className="text-gray-600 text-[10px] mt-0.5 font-mono">
                Mon–Sat · 9 AM – 6 PM IST
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:sales@ppindustries.in"
            className="flex items-center gap-4 border-2 border-[#111111] bg-white text-[#111111] p-6 group transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px]"
            style={{ boxShadow: '4px 4px 0 #111111' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #111111')}
          >
            <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-150">
              <Mail size={22} className="text-white group-hover:text-[#111111] transition-colors duration-150" />
            </div>
            <div>
              <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">
                Email RFQ
              </div>
              <div className="text-[#111111] font-black text-base tracking-wide font-mono">
                sales@ppindustries.in
              </div>
              <div className="text-gray-400 text-[10px] mt-0.5 font-mono">
                Response within 24 business hours
              </div>
            </div>
          </a>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 text-gray-400 text-sm border-t border-gray-200 pt-8 max-w-2xl">
          <AlertTriangle size={15} className="flex-shrink-0 mt-0.5 text-gray-400" />
          <span>
            We do{' '}
            <strong className="text-[#111111]">not</strong> sell individual boxes or retail
            quantities. All enquiries must be for bulk, recurring, or contractual orders.
            Minimum 1,000 units per SKU.
          </span>
        </div>
      </div>
    </section>
  )
}
