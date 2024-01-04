import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import wedding from "../../assets/wedding.svg"
import wedding1 from "../../assets/wedding1.svg"
import wedding2 from "../../assets/wedding2.svg"
import wedding3 from "../../assets/wedding3.svg"
import wedding4 from "../../assets/wedding4.svg"
import wedding5 from "../../assets/wedding5.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="thewedding" className="w-full bg-[#C89F79] gfold:py-20 gs8:py-20 xs:py-20 ipa:py-22 md:py-32 overflow-x-hidden">
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.TheWedding)}
    >
      <motion.div
       className="mx-auto w-5/6"
       initial="visible"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
       hidden: { opacity:0, x:-50},
       visible: { opacity: 1, x: 0},
       }}
      >
        <div className="md:flex">
          <div className="w-5/6 sm:text-center sm:mx-[55px] ipa:mx-[55px] ipp:mx-[65px] lg:text-left lg:w-5/6 lg:mx-[5px] mbpro:mx-[-10px] mbpro:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl ipp:text-5xl sp7:text-[40px] font-bold xlg:text-5xl">The Wedding</p>
            <p className="py-5 md:text-2xl sm:text-[20px] ipp:text-[22px] sp7:text-[24px]">
              Monday, November 4th 2024
            </p>
            <p className="md:text-2xl sm:text-[20px] ipp:text-[22px] sp7:text-[24px]">
              Tulum, Mexico
            </p>
            <p className="mt-5 py-5 underline md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Ceremony</p>
            <p className="sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[20px] mbpro:text-[18px]">Dreams Tulum Resort & Spa @ 4 PM</p>
            <p className="py-5 underline md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Reception</p>
            <p className="sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[22px] mbpro:text-[18px]">TBD</p>
            <p className="py-5 underline md:text-[17px] sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[20px] xlg:text-[22px] mbpro:text-[20px]">Attire</p>
            <p className="sm:text-[20px] ipp:text-[22px] sp7:text-[24px] lg:text-[18px] xlg:text-[22px] mbpro:text-[18px]">Formal Black Tie</p>

          </div>
          <div className="xs:columns-1 sm:columns-2 md:columns-3">
            <img src={wedding} alt="" />
            <img src={wedding1} alt="" />
            <img src={wedding2} alt="" />
            <img src={wedding3} alt="" />
            <img src={wedding4} alt="" />
            <img src={wedding5} alt="" />
          </div>
        </div>
      </motion.div>

      {/* Side Scroll Here
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class 
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.image}
            />
          ))}
        </ul>
      </div> */}
    </motion.div>
  </section>  
)
}

export default OurClasses