"use client";

import "tailwindcss";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px]
      text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory z-20 pt-16'> {/* Added pt-32 for padding-top */}
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col
          space-y-2 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2}}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src='/project.png'
              alt={`Project ${i+1}`}
              className='mt-8' // Added mt-16 for margin-top
            />

            <div className='space-y-3 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]/50'>
                  Case Study {i+1} of {projects.length}: 
                </span>{' '}
                KCD Website
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. 
                Blandit metus nascetur cubilia morbi convallis. 
                Erat lobortis a nunc ac mollis risus velit mi consequat. 
                Quam donec laoreet fringilla nullam accumsan primis magnis cursus. 
                Est ligula tempor elementum est mattis non torquent congue feugiat. 
                Magnis iaculis montes elementum nisi fames fusce in venenatis sagittis. 
                Ullamcorper nostra viverra eget sed, est iaculis. 
                Volutpat cras eros ante senectus nunc imperdiet tristique ligula.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0
      h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;