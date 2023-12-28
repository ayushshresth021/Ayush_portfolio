import React from 'react'
import {motion} from 'framer-motion';
import {styles} from "../styles";
import { ComputersCanvas } from './canvas';
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { spartan } from '../assets';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#00377e]'></div>       {/* round circle*/}
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>       {/* straight line */}
          
        </div>
        <div>
          <h2 className={`${styles.heroHeadText}`}> Hi, I'm Ayush Shresth</h2>
          <p className={styles.heroSubText} > Bachelors in Software Engineering</p>    
          <p className={styles.heroSubText} style={{ color: '#fca311' }}> San Jose State University, California
          <img src={spartan} alt="Image description" style={{ display: 'inline-block', height:'70px', width:'90px'}}/>
          </p>  
          <p className={styles.sectionSubText} >
          </p> 
          <a 
            className=" w-[120px] h-[55px] z-10 flex absolute rounded-full bg-[#00377e] items-center p-6"
            href='https://drive.google.com/file/d/1EcQDox89wBApNB7Xs7SywVOBzBTgX0Md/view?usp=sharing'
            target="_blank" rel="noreferrer"
            >
            Resume
          </a>
        </div >
        
      </div>
      <ComputersCanvas/>
     
      
      

      {/** scroll button */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-[#ced4da] flex justify-center items-start p-2 rounded-full">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#ced4da] mb-1"
            />
          </div>
          
        </a>    
      </div>
    
    </section>
    
  )
}

export default SectionWrapper(Hero, "")