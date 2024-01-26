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

const OurStory = ({ setSelectedPage }: Props) => {
    
  return (
    <section
     id='ourstory'
     className='mx-auto min-h-full w-5/6 py-20 del:mb-[-50px] del:mt-[50px] xlg:mb-[-220px] xlg:mt-[100px] overflow-x-hidden'
    >
        <motion.div 
         onViewportEnter={() => setSelectedPage(SelectedPage.OurStory)}
        >
            {/* HEADER HERE */}
            <motion.div
             className='w-full gfold:text-center mbpro:text-left'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
            >                    
                <p className='text-2xl md:text-4xl sm:text-4xl font-bold sm:text-center ipp:text-5xl sp7:text-[40px] md:text-left xlg:text-5xl'>Our Story</p>
                <div className='md:flex md:gap-6 mbpro:gap-6'>
                    <div className=''>
                        <p className="my-5 md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] xlg:text-[20px]">
                        The story unfolds with Cristian's shy glances at Jackie's family gatherings. Julius being her cousin and his best friend, unvoluntarily became the middle man between the two. It wasn't until courage led to a Snapchat exchange, and an invite to her 21st birthday. That day marked the start of their everlasting bond and deep connection.
                        </p>
                        <p className="my-5 md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] xlg:text-[20px]">From their first date at Red Robin in 2017, to their first cruise in 2021, they knew they wanted to continue experiencing life together. A year later on a cold February day, Cristian decided to pop the big question at Starved Rock State Park. 7 years together allowed them to build, grow, and enter the next step in their lives.</p>
                        <p className="my-5 md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] xlg:text-[20px]">"Your support over the years has truly been appreciated, and we thank you all for choosing to share this special day with us. See you in Mexico!" - Jacqueline & Cristian</p>
                    </div>
                    <div className='sm:mx-[80px] ipa:mx-[100px] ipp:mx-[175px] sp7:mx-[200px] lg:mx-[20px] mbpro:mx-[35px] md:mx-[25px]'>
                        <img src={Cruise} alt="" className='mbpro:h-[400px] mbpro:w-[2000px] md:w-[1500px] md:h-[300px] lg:w-[1200px] lg:h-[400px]'/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default OurStory