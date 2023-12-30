import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from '../../shared/types';
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
     id="home"
     className="gap-16 gs8:bg-mainmobiles8 gs8:pt-[370px] xs:pt-[420px] xs:bg-mainmobile xr:pt-[400px] ip14:pt-[425px] ip12:pt-[400px] sm:bg-mainipad sm:pt-[725px] ipa:bg-mainipadair ipa:pt-[875px] ipp:bg-mainipadpro ipp:pt-[1050px] sp7:bg-mainsp7 sp7:pt-[1075px] spduo:bg-mainspduo spduo:pt-[445px] gfold:bg-maingalaxyfold gfold:pt-[255px] lg:bg-main lg:pt-[600px] del:bg-maindell xlg:bg-mainhp xlg:pt-[800px] py-10 md:h-full overflow-x-hidden"
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
            <div className="z-10 gs8:basis-4/5 xs:mt-10 xr:mt-18 xs:basis-4/5 mt-40 md:basis-3/5 gfold:basis-4/5 lg:mt-[-250px] ip12:mb-[200px] xr:mb-[200px] ip14:mb-[200px]">
                {/* Headings Here */}
                <motion.div 
                 className="md:-mt-20 text-white "
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                >
                    <div>
                        <p className="gfold:text-[18px] gs8:text-1xl xs:text-1xl xr:text-2xl ip12:text-1xl sm:text-3xl ipp:text-4xl sp7:text-[38px] lg:text-2xl mb-2">Get ready for a Wedding!</p>
                        <p className="gfold:text-[22px] gs8:text-2xl xs:text-2xl xr:text-3xl ip12:text-2xl sm:text-4xl ipp:text-5xl sp7:text-[42px] lg:text-6xl">Cristian & Jacqueline</p>
                        <p className="gfold:text-[18px] gs8:text-1xl xs:text-1xl xr:text-2xl ip12:text-1xl sm:text-3xl ipp:text-4xl sp7:text-[38px] lg:text-2xl mt-2">November 4th 2024</p>
                    </div>
                </motion.div>

                {/* Action Buttons Here */}
                <motion.div 
                 className="mt-8 flex items-center gap-8 md:justify-start gfold:basis-4/5"
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
                        <a rel="noreferrer" target="_blank" className='rounded-md bg-[#C89F79] gfold:text-[12px] gfold:px-[4px] gfold:py-1.5 gs8:px-3 gs8:py-1.5 xs:px-4 xs:py-1.5 xr:px-4 xr:py-2.5 px-10 py-2 ip12:px-4 ip12:py-2 sm:px-10 sm:py-3.5 hover:bg-[#77BFA3] sm:text-[18px] ipp:text-[20px] sp7:text-[22px] hover:text-white transition duration-500 lg:text-[17px]' href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing">View Rates</a>
                    </button>
                    <ActionButton 
                     setSelectedPage={setSelectedPage}
                    > How to Book
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