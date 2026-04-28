import { useState } from 'react'
import {
  Factory, Layers, Printer, Package, MapPin,
  Clock, CheckCircle, GitMerge, Boxes, Wrench,
} from 'lucide-react'

const FACILITIES = [
  {
    id: 'unit1',
    tab: 'Main Automated Plant',
    badge: 'Unit 1 · High Volume',
    subtitle: 'Bulk Exterior Packaging',
    accentColor: '#0aa36b',   // brand green — primary facility
    specs: [
      { icon: Factory,     label: 'Facility Type',    value: 'Fully Automated Corrugation Line' },
      { icon: MapPin,      label: 'Location',         value: 'Bhiwandi, Maharashtra' },
      { icon: Layers,      label: 'Board Types',      value: '5-Ply · 7-Ply Corrugated' },
      { icon: Package,     label: 'Max Sheet Size',   value: '2,400 mm × 1,200 mm' },
      { icon: Boxes,       label: 'Min. Order',       value: '1,000 units (bulk only)' },
      { icon: Printer,     label: 'Print Capability', value: 'Mono (Std.) · Full Colour (Avail.)' },
      { icon: Factory,     label: 'Daily Capacity',   value: '50,000+ units / day' },
      { icon: CheckCircle, label: 'Certification',    value: 'ISO 9001:2015' },
    ],
    highlights: [
      'Automated die-cutting and precision scoring',
      'Inline flexographic printing — up to 4 colours',
      'High-speed gluing, stitching & strapping',
      'Full QC inspection before dispatch',
    ],
  },
  {
    id: 'unit2',
    tab: 'Precision Unit',
    badge: 'Unit 2 · Specialist',
    subtitle: 'Partitions & Segments',
    accentColor: '#2981cf',   // brand blue — precision specialty
    specs: [
      { icon: Wrench,      label: 'Facility Type',    value: 'Semi-Automated Precision Line' },
      { icon: MapPin,      label: 'Location',         value: '5–10 min from Main Plant' },
      { icon: Layers,      label: 'Specialization',   value: 'Inner Partitions · Separators · Segments' },
      { icon: Package,     label: 'Custom Sizing',    value: 'Fully configurable — any dimension' },
      { icon: Boxes,       label: 'Min. Order',       value: '500 sets (bulk only)' },
      { icon: GitMerge,    label: 'Integration',      value: 'Seamless with Unit 1 orders' },
      { icon: Clock,       label: 'Turnaround',       value: '24–48 hrs post-main confirmation' },
      { icon: CheckCircle, label: 'Best For',         value: 'Fragile goods · Glass · Electronics' },
    ],
    highlights: [
      'Custom-cut partition sets to any cell count',
      'Multi-cell separators engineered for fragile cargo',
      'Configured to nest inside Unit 1 outer boxes',
      'Single order covers both units — one call',
    ],
  },
]

function SpecRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <Icon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 min-w-0">
        <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-bold flex-shrink-0">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-900 sm:text-right">{value}</span>
      </div>
    </div>
  )
}

export default function FacilitiesMatrix() {
  const [activeId, setActiveId] = useState('unit1')
  const facility = FACILITIES.find(f => f.id === activeId)

  return (
    <section id="capabilities" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#0aa36b] font-bold mb-3">
            Manufacturing Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-[0.95]">
            Dual-Facility<br />
            <span className="text-[#2981cf]">Capabilities Matrix</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div
          className="flex border-2 border-gray-200 mb-10 w-full max-w-lg bg-white"
          style={{ boxShadow: `4px 4px 0 ${facility.accentColor}` }}
        >
          {FACILITIES.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              className={`flex-1 px-4 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-150 ${
                activeId === f.id ? 'text-white' : 'bg-white text-gray-400 hover:text-gray-900'
              }`}
              style={activeId === f.id ? { backgroundColor: f.accentColor } : {}}
            >
              {f.tab}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Spec table */}
          <div
            className="lg:col-span-3 bg-white border-2 border-gray-200"
            style={{ boxShadow: `4px 4px 0 ${facility.accentColor}` }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"
              style={{ backgroundColor: facility.accentColor }}
            >
              <div>
                <div className="text-white font-black text-base uppercase tracking-[0.12em]">
                  {facility.tab}
                </div>
                <div className="text-white/70 text-[10px] uppercase tracking-[0.22em] font-bold mt-0.5">
                  {facility.badge}
                </div>
              </div>
              <Factory size={26} className="text-white opacity-30" />
            </div>

            {/* Spec rows */}
            <div className="px-6 py-1">
              {facility.specs.map(spec => (
                <SpecRow key={spec.label} {...spec} />
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Focus card */}
            <div
              className="p-6 border-2"
              style={{
                backgroundColor: facility.accentColor,
                borderColor: facility.accentColor,
                boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
              }}
            >
              <div className="text-white/70 text-[10px] uppercase tracking-[0.25em] font-bold mb-1">
                Primary Focus
              </div>
              <div className="text-white font-black text-xl uppercase leading-tight mb-4">
                {facility.subtitle}
              </div>
              <ul className="space-y-2">
                {facility.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-white/80 text-sm">
                    <span className="text-white font-black mt-0.5 flex-shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tandem note */}
            <div
              className="border-2 border-gray-200 bg-white p-5"
              style={{ boxShadow: '4px 4px 0 #e5e7eb' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <GitMerge size={14} style={{ color: facility.accentColor }} />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-900">
                  Integrated Operation
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Both units operate in tandem.{' '}
                <strong className="text-gray-900">Unit 1</strong> handles the outer box;{' '}
                <strong className="text-gray-900">Unit 2</strong> supplies matching partitions.
                One call. Fully coordinated dispatch.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 text-white px-6 py-4 font-black uppercase tracking-[0.15em] text-xs transition-colors duration-150 border-2"
              style={{
                backgroundColor: '#0aa36b',
                borderColor: '#0aa36b',
                boxShadow: '4px 4px 0 #089960',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#089960'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#0aa36b'
              }}
            >
              Discuss Specs with Sales →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
