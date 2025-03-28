"use client";

import "tailwindcss";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Skill from './Skill';
import Python from "./Python";
import Firebase from "./Firebase";
import Git from "./Git";
import Java from "./Java";
import MongoDB from "./MongoDB";
import Node from "./Node";
import ReactJS from "./React";
import ReactNative from "./React-Native";
import SQL from "./SQL";
import Tailwind from "./Tailwind";
import TypeScript from "./TypeScript";
import HTML from "./HTML";
import CSS from "./CSS";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
        Hover over a skill for currency proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5 mt-10 pt-24'>
        <Python />
        <Firebase />
        <Git />
        <Java />
        <MongoDB />
        <Node />
        <ReactJS />
        <ReactNative />
        <SQL />
        <Tailwind />
        <TypeScript />
        <HTML />
        <CSS />
      </div>
    </motion.div>
  )
}

export default Skills