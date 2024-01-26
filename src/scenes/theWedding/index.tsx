import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import wedding from "../../assets/wedding.svg"
import wedding1 from "../../assets/wedding1.svg"
import wedding2 from "../../assets/wedding2.svg"
import wedding3 from "../../assets/wedding3.svg"
import wedding4 from "../../assets/wedding4.svg"
import wedding5 from "../../assets/wedding5.svg"
import wedding6 from "../../assets/wedding6.svg"
import wedding7 from "../../assets/wedding7.svg"
import wedding8 from "../../assets/wedding8.svg"
import wedding9 from "../../assets/wedding9.svg"
import wedding10 from "../../assets/wedding10.svg"
import wedding11 from "../../assets/wedding11.svg"
import wedding12 from "../../assets/wedding12.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const TheWedding = ({ setSelectedPage }: Props) => {
  //Once added to the images, needs to have classes for each device so the overlay is web responsive
  const overlayStyles = `mt-4 p-5 absolute z-36 flex h-[200px] w-[200px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`

  return (

  <section id="thewedding" className="w-full bg-[#C89F79] gfold:py-20 gs8:py-20 xs:py-20 ipa:py-22 md:py-32 overflow-x-hidden">
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.TheWedding)}
    >
      <div
       className="mx-auto w-5/6"
      >
        <div 
          className="md:flex md:gap-20"
        >
          <div 
            className="gfold:text-center  lg:w-5/6 lg:mx-[5px] mbpro:mx-[-10px] mbpro:text-left"
          >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity:0, x:-50},
            visible: { opacity: 1, x: 0},
            }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl ipp:text-5xl sp7:text-[40px] font-bold xlg:text-5xl">The Wedding</p>
              <p className="py-5 md:text-2xl sm:text-[20px] ipp:text-[22px] sp7:text-[24px]">
                Monday, November 4th 2024
              </p>
              <p className="md:text-2xl sm:text-[20px] ipp:text-[22px] sp7:text-[24px]">
                Tulum, Mexico
              </p>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity:0, x:-50},
            visible: { opacity: 1, x: 0},
            }}
            >
              <p className="mt-5 py-5 underline md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Ceremony</p>
              <p className="sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[20px] mbpro:text-[18px]">Dreams Tulum Resort & Spa @ 4 PM</p>
              <p className="py-5 underline sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Reception</p>
              <p className="sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[22px] mbpro:text-[18px]">TBD</p>
              <p className="py-5 underline sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Attire</p>
              <p className="sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[22px] mbpro:text-[18px]">Formal Black Tie</p>
              <p className="gfold:mt-16 sm:text-[20px] md:text-[18px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[22px] mbpro:text-[18px]">*Please Note: Ceremony will take place outdoors, and the Reception will be indoors.</p>
            </motion.div>
          </div>
          <div 
            className="xs:columns-1 sm:columns-2 md:columns-3 mbpro:columns-3 xlg:columns-4"
          >
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding} alt="" className=""/>
              <p>Oceanfront Pool</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding1} alt="" className=""/>
              <p>Oceanfront Pool</p>
            </motion.div>            
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding2} alt="" className=""/>
              <p>Main Pool</p>
            </motion.div> 
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding3} alt="" className=""/>
              <p>Main Walkway Gardens</p>
            </motion.div> 
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding4} alt="" className=""/>
              <p>Deluxe Garden Room</p>
            </motion.div>             
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding5} alt="" className=""/>
              <p>Deluxe Oceanview</p>
            </motion.div>             
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding6} alt="" className=""/>
              <p>Barefoot Grille Sitting</p>
            </motion.div>             
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding7} alt="" className=""/>
              <p>Holistic Treatment Cabin</p>
            </motion.div>             
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding8} alt="" className=""/>
              <p>Beach Wedding</p>
            </motion.div> 
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding9} alt="" className=""/>
              <p>Seaside Grill Restaurant</p>
            </motion.div> 
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding10} alt="" className=""/>
              <p>Rendzevous Lobby Bar</p>
            </motion.div> 
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
              }}
            >
              <img src={wedding11} alt="" className=""/>
              <p>World Cafe Restaurant</p>
            </motion.div> 
          </div>
        </div>
      </div>
    </motion.div>
  </section>  
)
}

export default TheWedding