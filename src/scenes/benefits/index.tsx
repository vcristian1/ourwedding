import React from 'react'
import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import Cruise from '../../assets/cruise.png'

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