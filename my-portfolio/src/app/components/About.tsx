"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }} 
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/profile.png"
        className='mb-20 md:mb-0 flex-shrike-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-9 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a {' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>
          {' '} background
        </h4>
        <p className='text-base'>
          I'm a software developer with four years of experience improving banking software systems and
          making code more efficient. I specialize in Python, React, and JavaScript, and I have a strong interest
          in machine learning. I love identifying problems and creating solutions through code. 
          My passion lies in full-stack development and artificial intelligence, where I can combine
          my analytical skills with a focus on creating better user experiences.
        </p>
      </div>
    </motion.div>
  )
}