import { ClassType, SelectedPage } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";
import registryIcon from "../../assets/registry.svg"
import ActionButton from "@/shared/ActionButton";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="registry" className="w-full bg-white py-32">
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
        <div className="md:flex">
          <div>
            <p className="text-2xl md:text-4xl font-bold">Registry</p>
            <p className="py-5 md:text-[17px]">
            For those who wish to celebrate with a tangible token of love, we have curated a registry with items that reflect our shared journey and aspirations. From cozy home essentials to experiences that will enrich our lives, your thoughtful contributions will become cherished elements in our new chapter together.
            </p>
            <p className="py-5 md:text-[17px]">
            Your love and support mean the world to us, and we look forward to sharing the happiness of our wedding day with you. Thank you for being a part of our story.
            </p>
            <button className='rounded-md bg-[#C89F79] px-10 py-2 hover:bg-[#77BFA3] hover:text-white transition duration-500 lg:text-[17px]'>
              <a rel="noreferrer" target="_blank" href="https://www.amazon.com/wedding/share/JackieandCristian_2024">Amazon Registry</a>
            </button>
          </div>
          <img src={registryIcon} alt="" className="lg:w-[375px] lg:h-[375px]"/>
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