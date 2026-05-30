"use client"
import { motion } from "framer-motion"

export default function ActivityCard() {
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
      className="col-span-1 md:col-span-2 bg-zinc-900 rounded-3xl p-6 h-60"
    >

      <h2 className="text-2xl font-bold mb-6">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">

        <div className="h-10 bg-green-500 rounded"></div>
        <div className="h-16 bg-green-500 rounded"></div>
        <div className="h-8 bg-zinc-700 rounded"></div>
        <div className="h-20 bg-green-500 rounded"></div>
        <div className="h-12 bg-zinc-700 rounded"></div>
        <div className="h-14 bg-green-500 rounded"></div>
        <div className="h-6 bg-zinc-700 rounded"></div>

      </div>

    </motion.div>

  )
}