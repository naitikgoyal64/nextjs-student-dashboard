import Sidebar from "@/components/Sidebar"
import HeroCard from "@/components/HeroCard"
import CourseCard from "@/components/CourseCard"
import ActivityCard from "@/components/ActivityCard"
import { supabase } from "@/lib/supabase"

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>Failed to load courses</h1>
      </main>
    )
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-black text-white">

      <Sidebar />

      <section className="flex-1 p-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <HeroCard />
          {
            courses?.map((course, index) => (

              <CourseCard
                key={index}
                title={course.title}
                progress={course.progress}
              />

            ))
          }
          <ActivityCard />
        </div>

      </section>

    </main >
  )
}