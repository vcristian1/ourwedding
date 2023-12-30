import React from 'react'
import { BenefitType, SelectedPage } from '../../shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';
import Cruise from '../../assets/cruise.png'

// Telling typescript that this is an array with a BenefitType of Object. Always make sure your objects are type'd
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    
  return (
    <section
     id='ourstory'
     className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div 
         onViewportEnter={() => setSelectedPage(SelectedPage.OurStory)}
        >
            {/* HEADER HERE */}
            <motion.div
             className='w-full'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
            >                    
                <p className='text-2xl md:text-4xl font-bold'>Our Story</p>
                <div className='md:flex md:gap-6'>
                    <div className=''>
                        <p className="my-5 md:text-[17px]">
                        Embark on a journey that began with shy glances at family gatherings, orchestrated by fate through my friend Julius, who's also her cousin. At 18, courage led to a Snapchat exchange, opening the door to a turning point: an invitation to her birthday celebration, marking the start of our adult connection.
                        </p>
                        <p className="my-5 md:text-[17px]">Our story unfolds through shared experiences—the laughter of our first date at Red Robin, the scenic roads of Colorado on our inaugural road trip, and the warmth of my 21st birthday at Four Roses Pub with her family. Further chapters include our first vacation in Arizona with my family and a Thanksgiving cruise in 2021—a celebration of our commitment to explore the world together.</p>
                        <p className="my-5 md:text-[17px]">As we stand on the verge of matrimony, these moments, woven into the fabric of our love, resonate deeply. We invite you to join us on this special day, as we exchange vows and step into the next chapter of our journey. Let's revel in the joy of love and shared adventures!</p>
                    </div>
                    <div>
                        <img src={Cruise} alt="" className='lg:w-[1125px] lg:h-[325px]'/>
                    </div>
                </div>
                
            
            </motion.div>


            {/* BENEFITS HERE */}
            <motion.div 
             className='mt-5 items-center  justify-between gap-8 md:flex'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={container}             
            >
            
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Benefits