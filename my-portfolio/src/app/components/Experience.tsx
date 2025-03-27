"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import EllucianCard from './EllucianCard'
import JPMorganCard from './JPMorganCard'
import BankOfAmerica1 from './BankOfAmerica1'
import BankOfAmerica2 from './BankOfAmerica2' 

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <EllucianCard />
        <JPMorganCard />
        <BankOfAmerica1 />
        <BankOfAmerica2 />
      </div>
     </motion.div>
  )
}

