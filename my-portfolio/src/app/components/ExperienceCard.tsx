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
        src='/amazon.png'
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>Bank of America</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='/ts-logo.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/ts-logo.png'
          />  
          <img
            className='w-10 h-10 rounded-full'
            src='/ts-logo.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/ts-logo.png'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Starting work... - Ended..</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary PointsSummary Points Summary PointsSummary Points</li>
          <li>Summary PointsSummary Points Summary PointsSummary Points</li>
          <li>Summary PointsSummary Points Summary PointsSummary Points</li>
          <li>Summary PointsSummary Points Summary PointsSummary Points</li>
          <li>Summary PointsSummary Points Summary PointsSummary Points</li>
        </ul>
      </div>
    </article>
  )
}