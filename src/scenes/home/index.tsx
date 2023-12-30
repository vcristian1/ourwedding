import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import { SelectedPage } from '../../shared/types';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-simple';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {


  return (
    <section
     id="home"
     className="gap-16 bg:main lg:bg-main py-10 md:h-full"
    >
        {/* Image and Main Header Here */}
        <motion.div 
         className="flex mx-auto w-full items-center justify-center md:h-5/6"
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
         }}
        >
            {/* Main Header Here */}
            <div className="z-10 mt-40 md:basis-3/5">
                {/* Headings Here */}
                <motion.div 
                 className="md:-mt-20 text-white"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                >
                    <p className="text-2xl lg:text-2xl mb-2">Save the date for</p>
                    <p className="text-2xl lg:text-6xl">Cristian & Jacqueline</p>
                    <p className="text-2xl lg:text-2xl mt-2">November 4th 2024</p>
                </motion.div>

                {/* Action Buttons Here */}
                <motion.div 
                 className="mt-8 flex items-center gap-8 md:justify-start"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <button>
                        <a rel="noreferrer" target="_blank" className='rounded-md bg-[#C89F79] px-10 py-2 hover:bg-[#77BFA3] hover:text-white transition duration-500 lg:text-[17px]' href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing">View Rates</a>
                    </button>
                    <ActionButton 
                     setSelectedPage={setSelectedPage}
                    > Start Booking Now
                    </ActionButton>
                    {/* <AnchorLink
                     className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                     onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                     href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink> */}
                </motion.div>
            </div>
            {/* Image Here
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div> */}
        </motion.div>

    </section>
  )
}

export default Home