import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings
} from "lucide-react"

export default function Sidebar() {
  return (
    <nav className="w-full md:w-64 md:min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Student Dashboard
      </h1>


      <div className="space-y-4">

        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800">
          <LayoutDashboard size={20} />
          <p>Dashboard</p>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
          <BookOpen size={20} />
          <p>Courses</p>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
          <BarChart3 size={20} />
          <p>Analytics</p>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
          <Settings size={20} />
          <p>Settings</p>
        </div>

      </div>
    </nav>
  )
}