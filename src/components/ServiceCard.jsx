import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({title,desc,icon}){
  return (
    <motion.div whileHover={{y:-6}} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card p-6 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#0f0f10] flex items-center justify-center border border-[#222] neon">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-sm text-grayText/80 mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
