import { useState, useEffect, useRef } from 'react'
import { TrendingUp, TrendingDown, Minus, Phone, AlertTriangle } from 'lucide-react'

const BASE_INSTRUMENTS = [
  { id: 'KP-A',  name: 'Kraft Paper Grade A (BIS 1396)',          unit: 'MT',   base: 58500, volatility: 0.014 },
  { id: 'KP-B',  name: 'Kraft Paper Grade B',                     unit: 'MT',   base: 51200, volatility: 0.013 },
  { id: 'OCC',   name: 'OCC — Old Corrugated Containers',         unit: 'MT',   base: 15800, volatility: 0.018 },
  { id: 'RSC-5', name: '5-Ply RSC Box — Standard (1,000+ units)', unit: 'unit', base: 148,   volatility: 0.007 },
  { id: 'RSC-7', name: '7-Ply RSC Box — Heavy Duty (500+ units)', unit: 'unit', base: 218,   volatility: 0.007 },
]

function fmt(price, id) {
  if (id === 'RSC-5' || id === 'RSC-7') return '₹ ' + price.toFixed(2)
  return '₹ ' + Math.round(price).toLocaleString('en-IN')
}

export default function MarketWall() {
  const [rows, setRows] = useState(() =>
    BASE_INSTRUMENTS.map(inst => ({ ...inst, price: inst.base, change: 0, dir: 'flat' }))
  )
  const [flashMap, setFlashMap]     = useState({})
  const [displayTime, setDisplayTime] = useState('')
  const tickRef = useRef(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const update = () =>
      setDisplayTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        })
      )
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      tickRef.current += 1
      setTick(tickRef.current)
      const nextFlash = {}
      setRows(prev =>
        prev.map(row => {
          const delta    = (Math.random() - 0.48) * 2 * row.volatility
          const newPrice = Math.max(row.base * 0.85, row.price * (1 + delta))
          const change   = ((newPrice - row.base) / row.base) * 100
          const dir      = Math.abs(delta) < 0.001 ? 'flat' : delta > 0 ? 'up' : 'down'
          nextFlash[row.id] = dir
          return { ...row, price: newPrice, change, dir }
        })
      )
      setFlashMap(nextFlash)
      setTimeout(() => setFlashMap({}), 550)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="market" className="bg-[#0a0a0a] py-20 border-t-4 border-[#2981cf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Terminal chrome */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
          <div className="flex items-start gap-4">
            <div className="flex gap-1.5 pt-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#0aa36b] font-black text-xl md:text-2xl tracking-[0.18em] uppercase font-mono">
                  LIVE MARKET INDEX
                </span>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0aa36b] opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0aa36b]" />
                </span>
              </div>
              <div className="text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase">
                Raw Material &amp; Product Index · Indicative · {displayTime} IST
              </div>
            </div>
          </div>
          <div className="font-mono text-[10px] text-gray-700 uppercase tracking-widest border border-[#1e1e1e] px-3 py-2 self-start">
            TICK #{String(tick).padStart(4, '0')} · SIMULATED DATA
          </div>
        </div>

        {/* Price table */}
        <div className="border border-[#1e1e1e] overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-12 bg-[#111111] border-b border-[#1e1e1e] px-4 py-3 font-mono text-[10px] text-gray-600 uppercase tracking-[0.18em] min-w-[620px]">
            <div className="col-span-1">ID</div>
            <div className="col-span-5">Instrument</div>
            <div className="col-span-3 text-right">Current Price</div>
            <div className="col-span-2 text-right">Chg. vs Base</div>
            <div className="col-span-1 text-right">Sig.</div>
          </div>

          {rows.map(row => {
            const isUp    = row.change >= 0
            const isFlat  = Math.abs(row.change) < 0.05
            const fd      = flashMap[row.id]
            const rowBg   = fd === 'up' ? 'bg-green-950/30' : fd === 'down' ? 'bg-red-950/30' : ''
            const numColor = fd === 'up' ? 'text-[#0aa36b]' : fd === 'down' ? 'text-[#ff5555]' : 'text-white'
            const chgColor = isUp ? 'text-[#0aa36b]' : 'text-[#ff5555]'
            const Icon     = isFlat ? Minus : isUp ? TrendingUp : TrendingDown

            return (
              <div
                key={row.id}
                className={`grid grid-cols-12 px-4 py-4 border-b border-[#141414] font-mono items-center transition-colors duration-300 hover:bg-[#111111] min-w-[620px] ${rowBg}`}
              >
                <div className="col-span-1 text-gray-700 text-[10px]">{row.id}</div>
                <div className="col-span-5 text-gray-300 text-sm leading-tight">{row.name}</div>
                <div className={`col-span-3 text-right text-sm font-black tabular-nums transition-colors duration-300 ${numColor}`}>
                  {fmt(row.price, row.id)}
                  <span className="text-gray-700 text-[10px] font-normal ml-1">/ {row.unit}</span>
                </div>
                <div className={`col-span-2 text-right text-xs font-semibold tabular-nums ${chgColor}`}>
                  {isUp ? '+' : ''}{row.change.toFixed(2)}%
                </div>
                <div className="col-span-1 flex justify-end">
                  <Icon size={14} className={chgColor} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer bar */}
        <div className="mt-5 border border-[#0aa36b]/25 bg-[#0aa36b]/[0.05] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="text-[#0aa36b] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[#0aa36b] font-black text-xs uppercase tracking-[0.18em] mb-1">
                Prices Are Market-Linked &amp; Indicative Only
              </div>
              <div className="text-gray-500 text-xs font-mono leading-relaxed max-w-2xl">
                All figures are simulated indices tied to real Kraft paper &amp; OCC market movements.
                Actual contract pricing depends on volume, spec, and lead time.
                Prices are locked only upon confirmed written order.
              </div>
            </div>
          </div>
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex-shrink-0 flex items-center gap-2 bg-[#0aa36b] text-white px-5 py-3 font-black uppercase tracking-[0.15em] text-xs hover:bg-[#089960] transition-colors duration-150 whitespace-nowrap"
          >
            <Phone size={13} />
            Call to Lock Price
          </a>
        </div>
      </div>
    </section>
  )
}
