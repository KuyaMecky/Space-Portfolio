"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
  variants={slideInFromTop}
  className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
>
  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
  <h1 className="Welcome-text text-[13px]">
    Think better with Next.js 13
  </h1>
</motion.div>
<motion.div
  variants={slideInFromLeft(0.5)}
  className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
>
  Making apps with modern technologies
</motion.div>
<motion.div
  variants={slideInFromRight(0.5)}
  className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
>
  Never miss a task, deadline, or idea
</motion.div>

<motion.div
  variants={slideInFromLeft(0.5)}
  className="text-[22px] text-gray-300 mb-10 mt-[20px] text-center"
>
  Currently working as a Senior SEO and Fullstack Developer, I bring a unique blend of expertise in driving organic traffic and developing modern, scalable web applications. My passion lies in crafting high-performing solutions using technologies like Next.js, SEO best practices, and machine learning to elevate user experiences and business outcomes.
</motion.div>

{/* SEO + Full Stack Developer Section */}
<div className="w-full px-0 mt-0 flex flex-col items-center justify-center text-center z-[40] relative">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-[30px] sm:text-[40px] font-semibold text-gray-200"
  >
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      Senior SEO Strategist
    </span>{" "}
    & Full Stack Developer
  </motion.h2>
  
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="max-w-3xl mt-4 text-[16px] sm:text-[18px] text-gray-400"
  >
    With years of experience leading SEO teams and optimizing high-traffic websites, I blend performance marketing with cutting-edge full stack development — delivering scalable, secure, and SEO-optimized digital solutions.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm sm:text-base font-semibold shadow-lg"
  >
    JavaScript | React | Next.js | Node.js | MongoDB | SEO Auditing | Content Strategy | Technical SEO
  </motion.div>
</div>

    
    </div>
  )
}

export default SkillText