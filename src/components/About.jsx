import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import {SectionWrapper} from '../hoc';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, title, icon}) => {
  return(
    <p> 
      <Tilt className="xs:w-[250px] w-[230px]"> 
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] "
        >
          <div
            options={{
              max:45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 
            min-h-[250px] flex justify-evenly items-center flex-col"
            >
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>    
      </Tilt>
    </p>
  )
}

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        A dedicated Software Engineering student with hands-on experience in web development, machine learning, and software projects. Skilled in data structures, algorithms, and leveraging diverse technologies to create efficient solutions. I am active in leadership roles, club participation, and community initiatives.
      </motion.p> 
      <div className='mt-20 flex flex-wrap gap-10 w-full h-full'>
        {services.map((service, index) => (<ServiceCard key={service.title} 
        index = {index} {...service} />))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")