import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import faqs from "../../assets/faq.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const FAQ = ({ setSelectedPage }: Props) => {

  return (
    <section id="faqs" className='bg-[#C89F79] mx-auto w-full pt-24 pb-32 gsfold:py-20 overflow-x-hidden'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Faqs)}
         className='gfold:mx-[25px] gs8:mx-[30px] xs:mx-[30px] sm:mx-[65px] ipp:mx-[90px] sp7:mx-[80px] lg:mx-[120px]'
        >
            {/* HEADER HERE */}
            <motion.div
             className="w-full"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
             }}
            >   
            <div className='md:flex'>
                <div>
                    <p className='text-2xl md:text-4xl font-bold sm:text-3xl ipp:text-5xl sp7:text-[40px] lg:text-4xl xlg:text-5xl'>FAQS</p>
                    <p className="my-5 sm:text-[18px] sm:mt-6 sm:mb-6 md:text-[18px] ipp:text-[22px] sp7:text-[24px] spduo:mt-6 spduo:mb-6 gs8:mt-6 gfold:mt-6 gfold:mb-6 lg:text-[18px] xlg:text-[20px] mbpro:text-[18px]">
                    We're thrilled to share our special day with you and want to ensure you have all the information you need for a seamless and enjoyable celebration. Find answers to FAQs about our wedding details and more below. For booking-related queries, contact Donna Shapiro our group Travel Agent whose contact information can be found at the bottom of the website. 
                    </p>
                </div>
                <div>
                    <img src={faqs} alt="" className='gfold:hidden gs8:hidden xs:hidden lg:h-[100px] lg:w-[800px]'/>
                </div>
            </div>
                
            </motion.div>

            {/* FORM AND IMAGE HERE */}
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Where do I go to start booking"?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">All guests will need to call or email Donna Shapiro, our Travel Agent who is handling the booking process for our Wedding Group. Her contact information can be found at the bottom of the website, and you will only be able to book and complete the scheduled payments through her. Any questions specifically related to the booking or payment process should be forwarded to Donna accordingly.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Is there a payment schedule?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">Yes, there is a dedicated payment schedule and Donna Shapiro our travel agent will be able to provide our guests with the schedule accordingly. Additionally, all payment inquiries must be directed to Donna whose contact information is at the bottom of the page.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What is the cancellation policy?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">There is a cancellation policy, please reach out to Donna Shapiro our travel agent to confirm the policy details. Her contact information can be found at the bottom of the website.</p>
                    </div>
                    
                </div>
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What is the minimum number of nights I can stay?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">According to the <a href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing" rel="noreferrer" target="_blank" className=" underline hover:no-underline">rate sheet,</a> the minimum number of nights a guest can stay is 3. However, keep in mind guests arrive November 2nd and the wedding is Monday November 4th, so if you stood 3 nights you would be leaving the morning after the wedding which may not be ideal for some.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Is Dreams Tulum Resort and Spa an All-Inclusive?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">Dreams Tulum Resort & Spa is All-Inclusive which means your meals and drinks are included with your stay including alcohol. Feel free to bring some cash to give as tips to those who serve you throughout your stay.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Are kids free?
                        </h3>
                        <p className='sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]'>Kids under the age of 3 are free, however kids from the ages of 3-12 fall under the Child Rate which can be found on the <a href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing" rel="noreferrer" target="_blank" className=" underline hover:no-underline">Rates sheet</a></p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Are Guests responsible for booking their own flights?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">All guests are responsible for booking their own flights. For airport transfer arrangements, contact our travel agent Donna Shapiro to provide her with your flight information.</p>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default FAQ