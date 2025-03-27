"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[500px] 
    xl:h-[500px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }} 
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true}} 
        className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px]
        object-cover object-center'
        src='/jp.png'
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>JP Morgan</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='/python.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/Javascript.png'
          />  
          <img
            className='w-10 h-10 rounded-full'
            src='/ts-logo.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/mysql.png'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Jan 2022 - Aug 2022</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Engineered a machine learning-based natural language processing system that was
          deployed bank-wide, streamlining asset valuation processes for clients.</li>
          <li>Collaborated with US teams to optimize the codebase architecture, implementing robust
          solutions using JavaScript, Python, and SQL.</li>
          <li>Refined existing software systems through code reviews and enhancements, ensuring
          optimal performance and a seamless user experience.</li>
        </ul>
      </div>
    </article>
  )
}