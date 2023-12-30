import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import { useForm } from 'react-hook-form';
import faqs from "../../assets/faq.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return (
    <section id="faqs" className='bg-[#C89F79] mx-auto w-full pt-24 pb-32'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Faqs)}
         className='gs8:mx-[30px] xs:mx-[30px] sm:mx-[65px] lg:mx-[120px]'
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
                    <p className='text-2xl md:text-4xl font-bold sm:text-3xl'>FAQS</p>
                    <p className="sm:text-[18px]my-5 sm:text-[18px] sm:mt-6 sm:mb-6">
                    We're thrilled to share our special day with you and want to ensure you have all the information you need for a seamless and enjoyable celebration. Find answers to FAQs about our wedding details, RSVP, attire, and more below. For booking-related queries, contact Donna, our Travel Agent. Your presence is the greatest gift, and we look forward to celebrating this special day with you! 
                    </p>
                </div>
                <div>
                    <img src={faqs} alt="" className='gs8:hidden xs:hidden lg:h-[100px] lg:w-[800px]'/>
                </div>
            </div>
                
            </motion.div>

            {/* FORM AND IMAGE HERE */}
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Where do I go to start booking"?
                        </h3>
                        <p className="sm:text-[18px]">All guests will need to call or email Donna Shapiro, our Travel Agent who is handling the booking process for our Wedding Group. You will only be able to book and pay towards your balance through her. Any questions specifically related to the booking or payment process should be forwarded to her.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            As a Guest, am I allowed to bring a plus one?
                        </h3>
                        <p className="sm:text-[18px]">Yes, if you are planning on bringing anyone additional that was not on the invitation, please reach out to the Groom so we have an accurate guest count.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Are kids free?
                        </h3>
                        <p className=''>Kids under the age of 3 are free, however kids from the ages of 3-12 fall under the Child Rate which can be found on the <a href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing" rel="noreferrer" target="_blank" className="font-medium underline hover:no-underline">Rates sheet</a></p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Are Guests responsible for booking their own flights?
                        </h3>
                        <p className="sm:text-[18px]">All guests are responsible for booking their own flights.</p>
                    </div>
                </div>
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What is the minimum number of nights I can stay?
                        </h3>
                        <p className="sm:text-[18px]">According to the <a href="https://drive.google.com/file/d/1XIF_RyEM9fjJJ-9tjhrr_AJfxycsudNi/view?usp=sharing" rel="noreferrer" target="_blank" className="font-medium underline hover:no-underline">rate sheet,</a> the minimum number of nights a guest can stay is 3.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Is Dreams Tulum Resort and Spa an All-Inclusive?
                        </h3>
                        <p className="sm:text-[18px]">Dreams Tulum Resort & Spa is All-Inclusive which means your meals and drinks are included with your stay including alcohol. Feel free to bring some cash to give as tips to those who serve you throughout your stay.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Is there a final deadline to pay my balance?
                        </h3>
                        <p className="sm:text-[18px]">Yes there is! All guests can start booking their stay with Donna at anytime, including confirming payment, but 8/27/2024 is the last day to pay your balance.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium sm:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Can I periodically pay towards my balance?
                        </h3>
                        <p className="sm:text-[18px]">All guests are able to pay their balance at their own pace with Donna Shapiro. Feel free to call her each time you'd like to make a payment. Please do remember the deadline to pay your balance is 08/28/2024, which is three months prior to the Wedding.  </p>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default ContactUs