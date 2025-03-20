"use client";

import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { 
    register, 
    handleSubmit, 
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:josephade1030@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };

  return (
    <div className='h-screen flex flex-col items-center justify-start pt-14 px-10'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mb-6'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 items-center'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk</span>
        </h4>

        <div className='space-y-8'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+353 123 4567</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 Developer Lane</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>developertest@gmail.com</p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text"/>
            <input {...register('email')} placeholder='Email' className='contactInput' type="email"/>
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button
            type='submit'
            className='bg-[#f7ab0a] text-black py-5 px-10 rounded-md font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;