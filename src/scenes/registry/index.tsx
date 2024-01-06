import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import registryIcon from "../../assets/registry.svg"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="registry" className="w-full bg-white gfold:py-20 gs8:py-20 py-32 overflow-x-hidden">
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.Registry)}
    >
      <motion.div
       className="mx-auto w-5/6"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
       hidden: { opacity:0, x:-50},
       visible: { opacity: 1, x: 0},
       }}
      >
        <div className="md:flex sm:text-center md:text-left lg:text-left">
          <div>
            <p className="text-2xl md:text-4xl sm:text-3xl ipp:text-5xl sp7:text-[40px] font-bold sm:text-center md:text-left lg:text-left xlg:text-5xl">Registry</p>
            <p className="py-5 sm:text-[20px] md:text-[17px] ipp:text-[22px] sp7:text-[24px] xlg:text-[20px]">
            For those who wish to celebrate with a tangible token of love, we have created a registry with items that reflect the love we have for the kitchen and traveling. From cozy home essentials, to experiences that will enrich our lives, your thoughtful contributions will become cherished elements in our new chapter together.
            </p>
            <p className="py-5 sm:text-[20px] md:text-[17px] ipp:text-[22px] sp7:text-[24px xlg:text-[20px]">
            We look forward to sharing the happiness of our wedding day with you. Thank you for being a part of our story.
            </p>
            <button className='rounded-md bg-[#C89F79] px-10 py-2 sm:px-10 sm:py-3 sm:text-[18px] ipp:text-[20px] sp7:text-[22px] hover:bg-[#77BFA3] hover:text-white transition duration-500 lg:text-[17px]'>
              <a rel="noreferrer" target="_blank" href="https://www.amazon.com/wedding/share/JackieandCristian_2024">Amazon Registry</a>
            </button>
          </div>
          <img src={registryIcon} alt="" className="sm:mx-[75px] lg:w-[375px] ipp:mx-[175px] sp7:mx-[130px] lg:h-[375px] lg:mx-[75px] mbpro:mx-[75px]"/>
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