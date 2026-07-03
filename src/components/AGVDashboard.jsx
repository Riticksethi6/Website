import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const STATIONS = {
  INBOUND:   { x: 8,  y: 15, label: 'Inbound',   color: '#3b82f6' },
  BUFFER:    { x: 32, y: 15, label: 'Buffer',     color: '#8b5cf6' },
  STORAGE_A: { x: 58, y: 15, label: 'Storage A',  color: '#10b981' },
  STORAGE_B: { x: 82, y: 15, label: 'Storage B',  color: '#10b981' },
  STAGING:   { x: 58, y: 75, label: 'Staging',    color: '#f59e0b' },
  OUTBOUND:  { x: 15, y: 75, label: 'Outbound',   color: '#ef4444' },
  CHARGING:  { x: 82, y: 75, label: 'Charging',   color: '#22c55e' },
}

const PATHS = [
  ['INBOUND', 'BUFFER', 'STORAGE_A', 'STORAGE_B'],
  ['STORAGE_A', 'STAGING', 'OUTBOUND', 'INBOUND'],
  ['STORAGE_B', 'STAGING', 'OUTBOUND'],
  ['INBOUND', 'BUFFER', 'STAGING', 'OUTBOUND'],
  ['STORAGE_A', 'CHARGING', 'INBOUND'],
]

const INITIAL_BOTS = [
  { id: 'AGV-01', status: 'Active',   task: 'Inbound → Storage A',  battery: 82,  pathIdx: 0, progress: 0.2, color: '#00d4ff' },
  { id: 'AGV-02', status: 'Active',   task: 'Storage B → Outbound', battery: 67,  pathIdx: 1, progress: 0.6, color: '#00d4ff' },
  { id: 'AGV-03', status: 'Active',   task: 'Buffer → Staging',     battery: 91,  pathIdx: 3, progress: 0.4, color: '#00d4ff' },
  { id: 'AGV-04', status: 'Charging', task: 'At Charging Station',  battery: 34,  pathIdx: 4, progress: 0.9, color: '#22c55e' },
  { id: 'AGV-05', status: 'Idle',     task: 'Awaiting mission',     battery: 100, pathIdx: 2, progress: 0.0, color: '#6b7280' },
]

function lerp(a, b, t) { return a + (b - a) * t }

function getBotPosition(pathIdx, progress) {
  const path = PATHS[pathIdx]
  if (!path || path.length < 2) return { x: 50, y: 50 }
  const segCount = path.length - 1
  const seg = Math.min(Math.floor(progress * segCount), segCount - 1)
  const segT = (progress * segCount) - seg
  const from = STATIONS[path[seg]]
  const to = STATIONS[path[seg + 1]]
  if (!from || !to) return { x: 50, y: 50 }
  return { x: lerp(from.x, to.x, segT), y: lerp(from.y, to.y, segT) }
}

function KpiCard({ label, value, unit, sub, color = '#00d4ff' }) {
  return (
    <div className="bg-[#0f1117] border border-[#00d4ff22] rounded-xl p-5 flex flex-col gap-1">
      <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
      <div className="text-3xl font-bold" style={{ color }}>
        {value}<span className="text-lg font-normal text-gray-400 ml-1">{unit}</span>
      </div>
      {sub && <div className="text-xs text-gray-500">{sub}</div>}
    </div>
  )
}

function StatusBadge({ status }) {
  const colors = {
    Active:   'bg-[#00d4ff22] text-[#00d4ff] border-[#00d4ff44]',
    Charging: 'bg-[#22c55e22] text-[#22c55e] border-[#22c55e44]',
    Idle:     'bg-[#6b728022] text-[#9ca3af] border-[#6b728044]',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${colors[status] || colors.Idle}`}>
      {status}
    </span>
  )
}

function BatteryBar({ pct }) {
  const color = pct > 60 ? '#22c55e' : pct > 30 ? '#f59e0b' : '#ef4444'
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 bg-[#ffffff15] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-xs text-gray-400">{pct}%</span>
    </div>
  )
}

export default function AGVDashboard() {
  const [bots, setBots] = useState(INITIAL_BOTS)
  const [missions, setMissions] = useState(247)
  const [utilization, setUtilization] = useState(81)
  const [avgMission, setAvgMission] = useState(43)
  const [throughput, setThroughput] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({ t: `${-9 + i}m`, v: Math.floor(Math.random() * 20 + 30) }))
  )
  const tickRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      tickRef.current += 1
      const t = tickRef.current

      setBots(prev => prev.map(bot => {
        if (bot.status === 'Charging') {
          const newBat = Math.min(100, bot.battery + 1)
          const done = newBat >= 95
          return { ...bot, battery: newBat, status: done ? 'Idle' : 'Charging', task: done ? 'Awaiting mission' : bot.task }
        }
        if (bot.status === 'Idle') {
          if (t % 8 === 0) {
            return { ...bot, status: 'Active', task: 'Storage → Outbound', progress: 0, pathIdx: Math.floor(Math.random() * 4) }
          }
          return bot
        }
        // Active
        const newProgress = bot.progress + 0.008
        const newBattery = Math.max(0, bot.battery - 0.05)
        if (newProgress >= 1) {
          if (newBattery < 25) {
            return { ...bot, progress: 0, status: 'Charging', task: 'At Charging Station', pathIdx: 4, battery: newBattery }
          }
          return { ...bot, progress: 0, pathIdx: (bot.pathIdx + 1) % PATHS.length, battery: newBattery }
        }
        return { ...bot, progress: newProgress, battery: Math.round(newBattery * 10) / 10 }
      }))

      setMissions(m => m + (Math.random() < 0.15 ? 1 : 0))
      setUtilization(Math.floor(72 + Math.random() * 19))
      setAvgMission(Math.floor(38 + Math.random() * 14))

      if (t % 5 === 0) {
        setThroughput(prev => {
          const next = [...prev.slice(1), { t: 'now', v: Math.floor(Math.random() * 20 + 30) }]
          return next.map((d, i) => ({ ...d, t: i === next.length - 1 ? 'now' : `${-(next.length - 1 - i)}m` }))
        })
      }
    }, 400)
    return () => clearInterval(interval)
  }, [])

  const activeBots = bots.filter(b => b.status === 'Active').length

  return (
    <section id="dashboard" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">What I Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Live AGV Operations Dashboard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A real-time simulation of the warehouse AGV monitoring systems I design and deploy.{' '}
            <span className="text-gray-500 text-sm">Simulated data — representative of real systems deployed at customer sites.</span>
          </p>
        </motion.div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Missions Completed" value={missions} unit="" sub="This session" color="#00d4ff" />
          <KpiCard label="Fleet Utilization" value={utilization} unit="%" sub="Live" color="#7c3aed" />
          <KpiCard label="Avg Mission Time" value={avgMission} unit="s" sub="Rolling avg" color="#10b981" />
          <KpiCard label="Active Bots" value={`${activeBots}`} unit={`/ ${bots.length}`} sub="Total fleet" color="#f59e0b" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Warehouse grid - 2/3 width */}
          <div className="md:col-span-2 bg-[#1a1f2e] border border-[#00d4ff22] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Warehouse Floor — Live View</h3>
              <span className="flex items-center gap-2 text-xs text-[#22c55e]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-dot" />
                Live
              </span>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '52%' }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Floor grid */}
                {[...Array(11)].map((_, i) => (
                  <line key={`gv${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#ffffff08" strokeWidth="0.3" />
                ))}
                {[...Array(11)].map((_, i) => (
                  <line key={`gh${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#ffffff08" strokeWidth="0.3" />
                ))}
                {/* Path lines */}
                {PATHS.map((path, pi) => path.slice(0, -1).map((from, si) => {
                  const f = STATIONS[from]
                  const t = STATIONS[path[si + 1]]
                  if (!f || !t) return null
                  return <line key={`path${pi}-${si}`} x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="#00d4ff18" strokeWidth="0.8" strokeDasharray="2,3" />
                }))}
                {/* Stations */}
                {Object.entries(STATIONS).map(([key, s]) => (
                  <g key={key}>
                    <rect x={s.x - 5} y={s.y - 4} width="10" height="8" rx="1" fill={s.color + '33'} stroke={s.color} strokeWidth="0.8" />
                    <text x={s.x} y={s.y + 7} textAnchor="middle" fontSize="2.5" fill={s.color} opacity="0.9">{s.label}</text>
                  </g>
                ))}
                {/* AGV bots */}
                {bots.map(bot => {
                  const pos = getBotPosition(bot.pathIdx, bot.progress)
                  const col = bot.status === 'Charging' ? '#22c55e' : bot.status === 'Idle' ? '#6b7280' : '#00d4ff'
                  return (
                    <g key={bot.id}>
                      <circle cx={pos.x} cy={pos.y} r="3.5" fill={col + '33'} stroke={col} strokeWidth="1" />
                      <circle cx={pos.x} cy={pos.y} r="1.5" fill={col} />
                      <text x={pos.x} y={pos.y - 5} textAnchor="middle" fontSize="2" fill={col} opacity="0.8">{bot.id}</text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Throughput chart - 1/3 width */}
          <div className="bg-[#1a1f2e] border border-[#00d4ff22] rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Throughput (pallets/hr)</h3>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={throughput}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} domain={[20, 60]} />
                <Tooltip contentStyle={{ background: '#0f1117', border: '1px solid #00d4ff33', borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="v" stroke="#00d4ff" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-[#0f1117] rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Current throughput</div>
              <div className="text-xl font-bold text-[#00d4ff]">
                {throughput[throughput.length - 1]?.v}{' '}
                <span className="text-sm font-normal text-gray-400">pallets/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bot status table */}
        <div className="bg-[#1a1f2e] border border-[#00d4ff22] rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Fleet Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-xs uppercase border-b border-[#ffffff0a]">
                  <th className="text-left py-2 pr-4">Bot ID</th>
                  <th className="text-left py-2 pr-4">Status</th>
                  <th className="text-left py-2 pr-4 hidden sm:table-cell">Current Task</th>
                  <th className="text-left py-2">Battery</th>
                </tr>
              </thead>
              <tbody>
                {bots.map(bot => (
                  <tr key={bot.id} className="border-b border-[#ffffff05] hover:bg-[#ffffff04]">
                    <td className="py-3 pr-4 font-mono text-[#00d4ff] font-medium">{bot.id}</td>
                    <td className="py-3 pr-4"><StatusBadge status={bot.status} /></td>
                    <td className="py-3 pr-4 text-gray-400 hidden sm:table-cell">{bot.task}</td>
                    <td className="py-3"><BatteryBar pct={Math.round(bot.battery)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
