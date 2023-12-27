import React from 'react'
import { motion } from 'framer-motion';
import {  fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';



const Contact = () => {
  return (
  <>
    <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}> Get in touch</p>
        <h2 className={styles.sectionHeadText}> Contact</h2>
      </motion.div>
      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        >
        <ul className="mt-5  flex flex-col items-center space-y-4 font-bold text-2xl">
        <li>
          <a href="https://www.linkedin.com/in/ayush-shresth-86a4a9205" target="_blank" rel="noreferrer" className="block py-2 px-4 rounded-lg bg-[#00377e] text-white hover:bg-violet-400 transition-colors duration-300">
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:ayush.shresth17@gmail.com" className="block py-2 px-4 rounded-lg bg-[#00377e] text-white hover:bg-blue-400 transition-colors duration-300">
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="tel:+1-6692139948" className="block py-2 px-4 rounded-lg bg-[#00377e] text-white hover:bg-green-400 transition-colors duration-300">
            <span>Phone</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ayushshresth021" target="_blank" rel="noreferrer" className="block py-2 px-4 rounded-lg bg-[#00377e] text-white hover:bg-[#6c757d] transition-colors duration-300">
            <span>Github</span>
          </a>
        </li>
      </ul>

      </motion.div>

  </>      
  )
}

export default SectionWrapper(Contact, "contact")