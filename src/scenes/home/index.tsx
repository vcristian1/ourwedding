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
     className="gap-16 bg-cover gs8:bg-mainmobiles8 gs8:pt-[250px] xs:pt-[420px] md:bg-mainmacbookpro xs:bg-mainmobile xr:pt-[400px] ip14:pt-[425px] ip12:pt-[400px] pix7:pt-[400px] sm:bg-mainipad sm:pt-[525px] ipa:bg-mainipadair ipa:pt-[500px] ipp:bg-mainipadpro ipp:pt-[575px] sp7:bg-mainsp7 sp7:pt-[600px] spduo:bg-mainspduo spduo:pt-[280px] gfold:bg-maingalaxyfold gfold:pt-[150px] lg:bg-main lg:pt-[600px] del:bg-maindell del:pt-[700px] xlg:bg-mainhp xlg:pt-[800px] py-10 md:h-full mbpro:bg-mainmacbookpro mbpro:pt-[600px] overflow-x-hidden"
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
            <div className="text-center z-10 gs8:basis-4/5 xs:mt-10 xr:mt-18 md:mb-[200px] xs:basis-4/5 mt-40 sm:mb-[205px] md:basis-3/5 gfold:basis-4/5 lg:mt-[-250px] ip12:mb-[200px] xr:mb-[200px] ip14:mb-[200px] ipp:mb-[475px] pix7:mb-[245px] ipa:mb-[380px] gs8:mb-[130px] sp7:mb-[465px] spduo:mb-[170px] gfold:mb-[75px] del:mb-[200px] lg:mb-[25px]">
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
                        <p className="gfold:text-[18px] gs8:text-1xl xs:text-1xl xr:text-2xl ip12:text-1xl ipa:text-2xl sm:text-3xl ipp:text-4xl ip14:text-2xl sp7:text-[38px] lg:text-2xl mb-2">Get ready for a Wedding!</p>
                        <p className="gfold:text-[22px] gs8:text-2xl xs:text-3xl xr:text-3xl ip12:text-3xl ipa:text-5xl sm:text-4xl ipp:text-5xl ip14:text-4xl sp7:text-[42px] lg:text-6xl">Jacqueline & Cristian</p>
                        <p className="gfold:text-[18px] gs8:text-1xl xs:text-1xl xr:text-2xl ip12:text-1xl ipa:text-2xl sm:text-3xl ipp:text-4xl ip14:text-2xl sp7:text-[38px] lg:text-2xl mt-2">September 29th 2024</p>
                    </div>
                </motion.div>

                {/* Action Buttons Here */}
                <motion.div 
                 className="mt-8 flex gap-8 gfold:basis-4/5 justify-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <ActionButton 
                     setSelectedPage={setSelectedPage}
                    > View Registry
                    </ActionButton>

                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Home