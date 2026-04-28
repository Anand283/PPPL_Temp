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
    <section id="contact" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header + badge row */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#0aa36b] font-bold mb-3">
              Order Gateway
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-[0.95]">
              Ready to<br />
              <span className="text-[#2981cf]">Order?</span>
            </h2>
          </div>

          {/* Bulk Orders Only badge */}
          <div
            className="inline-flex items-center gap-3 bg-[#2981cf] text-white px-6 py-4 self-start md:self-end"
            style={{ boxShadow: '4px 4px 0 #1e6ab5' }}
          >
            <AlertTriangle size={20} className="flex-shrink-0" />
            <div>
              <div className="font-black text-base uppercase tracking-[0.15em]">
                Bulk Orders Only
              </div>
              <div className="text-white/70 text-[10px] uppercase tracking-[0.18em] mt-0.5">
                Min. 1,000 Units · No Retail Sales
              </div>
            </div>
          </div>
        </div>

        {/* 3-step cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="border-2 border-gray-200 bg-white p-6"
                style={{ boxShadow: '4px 4px 0 #2981cf' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-6xl font-black text-gray-900 opacity-[0.06] font-mono leading-none select-none">
                    {step.number}
                  </span>
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0 border-2"
                    style={{ backgroundColor: '#0aa36b', borderColor: '#0aa36b' }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="font-black text-gray-900 uppercase tracking-[0.12em] text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mb-10">

          {/* Phone — green */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-4 border-2 bg-[#0aa36b] text-white p-6 group transition-all duration-150"
            style={{ borderColor: '#0aa36b', boxShadow: '4px 4px 0 #089960' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#089960'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translate(4px,4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#0aa36b'
              e.currentTarget.style.boxShadow = '4px 4px 0 #089960'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-150">
              <Phone size={22} className="text-white" />
            </div>
            <div>
              <div className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">
                Call Sales Directly
              </div>
              <div className="text-white font-black text-lg tracking-wide font-mono">
                +91 XX XXXX XXXX
              </div>
              <div className="text-white/60 text-[10px] mt-0.5 font-mono">
                Mon–Sat · 9 AM – 6 PM IST
              </div>
            </div>
          </a>

          {/* Email — blue */}
          <a
            href="mailto:sales@ppindustries.in"
            className="flex items-center gap-4 border-2 border-[#2981cf] bg-white text-[#2981cf] p-6 group transition-all duration-150"
            style={{ boxShadow: '4px 4px 0 #2981cf' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f0f7ff'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translate(4px,4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.boxShadow = '4px 4px 0 #2981cf'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div className="w-12 h-12 bg-[#2981cf] flex items-center justify-center flex-shrink-0">
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">
                Email RFQ
              </div>
              <div className="text-[#2981cf] font-black text-base tracking-wide font-mono">
                sales@ppindustries.in
              </div>
              <div className="text-gray-400 text-[10px] mt-0.5 font-mono">
                Response within 24 business hours
              </div>
            </div>
          </a>
        </div>

        {/* Fine print */}
        <div className="flex items-start gap-3 text-gray-400 text-sm border-t border-gray-100 pt-8 max-w-2xl">
          <AlertTriangle size={15} className="flex-shrink-0 mt-0.5 text-gray-300" />
          <span>
            We do <strong className="text-gray-900">not</strong> sell individual boxes or retail
            quantities. All enquiries must be for bulk, recurring, or contractual orders.
            Minimum 1,000 units per SKU.
          </span>
        </div>
      </div>
    </section>
  )
}
