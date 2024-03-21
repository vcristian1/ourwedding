import Logo from "../../assets/Logo.svg";


const Footer = ({ }) => {
  return (
    <footer className="bg-slate-100 py-5 shadow-xl overflow-x-hidden">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" className="sm:h-20 sm:w-20 ipp:h-24 ipp:w-24 sp7:h-28 sp7:w-28 lg:w-16 lg:h-16 mbpro:h-14 mbpro:w-14 md:h-16 md:w-16"/>
                <p className="mt-4 text-sm sm:text-[16px] ipp:text-[20px] sp7:text-[22px] lg:text-[14px] del:text-[16px] mbpro:text-[16px] md:text-[14px]"><a href="https://www.cristianvargas.com" rel="noreferrer" target="_blank">© Designed and Developed by Cristian C. Vargas</a></p>
            </div>
            <ul className="mt-16 basis-1/4 md:mt-4">
                <h4 className="font-bold ipp:text-[20px] sp7:text-[22px] lg:text-[16px] del:text-[16px] mbpro:text-[18px] gfold:text-[14px] md:text-[16px]">External Links</h4>
                <li>
                    <a rel="noreferrer" target="_blank" href="https://www.amazon.com/wedding/share/JackieandCristian_2024" className=" del:text-[16px] lg:text-[14px] sp7:text-[22px] md:text-[16px] ipp:text-[20px] text-black hover:text-[#77BFA3] underline transition duration-500 gfold:text-[14px]">Registry</a>
                </li>
            </ul>
            <div className="gfold:text-[14px] mt-16 basis-1/4 md:mt-4 ipp:text-[20px] sp7:text-[22px] lg:text-[14px] del:text-[16px] mbpro:text-[16px] md:text-[14px]">
                <h4 className="lg:text-[16px] font-bold mbpro:text-[18px] md:text-[16px]">Groom Contact</h4>
                <p className="">Cristian C. Vargas</p>
                <p>cristian.v0223@gmail.com</p>
                <p>+1 773-706-5634</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;