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
        src='/ellucian.png'
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>Ellucian</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='/python.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/react.png'
          />  
          <img
            className='w-10 h-10 rounded-full'
            src='/node-js.png'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>May 2021 - Aug 2021</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Developed responsive front-end features for a student portal using Node.js and React.js,
          implementing comprehensive unit testing and modern development practices.</li>
          <li>Participated in cross-functional development sprints, contributing to code reviews and
          integrating feedback to improve portal functionality.</li>
          <li>Maintained code documentation and testing coverage while continuously expanding my
          skills through company learning resources.</li>
        </ul>
      </div>
    </article>
  )
}