import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.svg";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: ( value: SelectedPage) => void;
    isTopOfPage: boolean
};

const Navbar = ({  isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-slate-100" : "bg-slate-100 dropshadow-xl"

  return (
    <nav>
        <div
         className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4 border-b-[1.5px] border-black shadow-xl`} 
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* Name and Menu Icon within this container */}
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                {/* Right Side */}

                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        {/* Inner Left Side (All Links) */}
                        <div className={`${flexBetween} gap-8 text-sm lg:text-[17px]`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Story" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="The Wedding" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Registry" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="FAQS" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

                        </div>

                        {/* Inner Right Side (Sign In and Become a Member buttons)*/}
                        <div className={`${flexBetween} gap-2 text-sm`}>
                            <img src={Logo} alt="logo" />   
                        </div>

                    </div>
                    ) : (
                        // If it is not aboveModeiumScreen then the below code will render for mobile screens
                        <div className={`${flexBetween} gs8:gap-52 xs:gap-52 ip14:gap-60`}>
                            <button className="rounded-full p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-black"/>
                            </button>
                            <img src={Logo} alt="logo" className=""/>   
                        </div>
                    )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Modal */}
        { !isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
                {/* Close Icon Here */}
                <div className="flex justify-end p-12">
                    <button
                     onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <XMarkIcon 
                         className="h-6 w-6 text-gray-400"
                        />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Our Story" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="The Wedding" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Registry" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="FAQS" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar;