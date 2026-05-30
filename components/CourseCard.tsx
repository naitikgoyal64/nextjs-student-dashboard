"use client"
import { motion } from "framer-motion"


interface CourseCardProps {
  title: string
  progress: number
}

export default function CourseCard({
  title,
  progress
}: CourseCardProps) {

  return (


    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      whileHover={{
        scale: 1.03
      }}

      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}

      className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-3xl p-6 h-60"
    >

      <p className="text-zinc-400 mb-3">
        Course
      </p>

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

        <motion.div
          className="h-full bg-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        />

      </div>

      <p className="mt-4 text-zinc-400">
        {progress}% Complete
      </p>

    </motion.div>
  )
}