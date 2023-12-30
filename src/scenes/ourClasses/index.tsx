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

  <section id="thewedding" className="w-full bg-[#C89F79] gs8:py-20 xs:py-20 md:py-32">
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
          <div className="w-5/6">
            <p className="text-2xl md:text-4xl font-bold">The Wedding</p>
            <p className="py-5 md:text-2xl">
              Monday, November 4th 2024
            </p>
            <p className="md:text-2xl">
              Tulum, Mexico
            </p>
            <p className="mt-5 py-5 underline md:text-[17px]">Ceremony</p>
            <p className="">Dreams Tulum Resort & Spa @ 4 PM</p>
            <p className="py-5 underline md:text-[17px]">Reception</p>
            <p className="">TBD</p>
            <p className="py-5 underline md:text-[17px]">Attire</p>
            <p className="">Formal Black Tie</p>

          </div>
          <div className="xs:columns-1 md:columns-3">
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