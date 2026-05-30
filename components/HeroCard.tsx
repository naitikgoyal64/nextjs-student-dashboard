"use client"
import { motion } from "framer-motion"

export default function HeroCard() {
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

      transition={{
        duration: 0.6
      }}

      className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-3xl p-6 min-h-60"
    >

      <p className="text-zinc-300 pt-4 text-sm md:text-base">
        Welcome Back 👋
      </p>

      <h1 className="text-3xl md:text-5xl font-bold mb-4 break-words">
        Naitik
      </h1>

      <div className="flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <p className="text-zinc-300 text-sm md:text-base">
          7 Day Learning Streak
        </p>
        


      </div>
        <p className="text-zinc-300 pt-4 text-sm md:text-base">
          Keep learning and stay consistent 🚀
        </p>
    </motion.div>
  )
}