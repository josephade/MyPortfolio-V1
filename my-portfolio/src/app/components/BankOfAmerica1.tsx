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
        src='/boa.png'
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>Bank Of America</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='/python.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='/mysql.png'
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
        <p className='uppercase py-5 text-gray-300'>March 2023 - Sep 2023</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Developed and maintained software solutions in Python and JavaScript, implementing
          automated testing frameworks that achieved 80% code coverage.</li>
          <li>Led an intern project team as a Developer Lead, delivering solutions and presenting
          outcomes to senior management.</li>
          <li>Coded automation scripts to improve routine tasks, reducing manual processes and
          improving operational efficiency</li>
          <li>Created code samples for client messaging bot integration, making technology adoption
          smoother and more accessible.</li>
        </ul>
      </div>
    </article>
  )
}