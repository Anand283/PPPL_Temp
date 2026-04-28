import { Phone, Mail, MapPin, Award } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Market Index', href: '#market' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Logistics',    href: '#logistics' },
  { label: 'Contact',      href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2981cf] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#0aa36b] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs tracking-wider">PP</span>
              </div>
              <div className="leading-none">
                <div className="text-white font-black tracking-[0.15em] text-sm uppercase">
                  PP Industries
                </div>
                <div className="text-white/60 text-[10px] tracking-[0.25em] uppercase font-semibold -mt-0.5">
                  Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs mb-4">
              Corrugated cardboard manufacturer serving India's industrial packaging needs.
              Bulk orders only. Two facilities. One point of contact.
            </p>
            <div className="flex items-center gap-2">
              <Award size={13} className="text-white/80" />
              <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest">
                2024 Best Company — Quality &amp; Service
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-bold mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 text-xs hover:text-white transition-colors duration-150 uppercase tracking-[0.15em] font-mono"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-bold mb-4">
              Contact
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/60 text-xs font-mono">
                <MapPin size={12} className="mt-0.5 flex-shrink-0 text-white/40" />
                Bhiwandi, Maharashtra, India
              </div>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 text-white/60 text-xs font-mono hover:text-white transition-colors duration-150"
              >
                <Phone size={12} className="flex-shrink-0 text-white/40" />
                +91 XX XXXX XXXX
              </a>
              <a
                href="mailto:sales@ppindustries.in"
                className="flex items-center gap-2 text-white/60 text-xs font-mono hover:text-white transition-colors duration-150"
              >
                <Mail size={12} className="flex-shrink-0 text-white/40" />
                sales@ppindustries.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-white/40 text-[10px] font-mono uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} PP Industries Pvt. Ltd. · All Rights Reserved
          </div>
          <div className="text-white/25 text-[10px] font-mono uppercase tracking-[0.18em]">
            B2B Only · Bulk Orders · No Retail
          </div>
        </div>
      </div>
    </footer>
  )
}
