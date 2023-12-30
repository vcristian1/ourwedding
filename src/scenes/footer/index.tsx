import Logo from "../../assets/Logo.svg";
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-slate-100 py-5 border-t-[1.5px] border-black">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" className="ipp:h-24 ipp:w-24"/>
                <p className="mt-4 text-sm ipp:text-[20px]">© Designed and Developed by Cristian C. Vargas</p>
            </div>
            <ul className="mt-16 basis-1/4 md:mt-4">
                <h4 className="font-bold ipp:text-[20px]">External Links</h4>
                <li>
                    <a rel="noreferrer" target="_blank" href="https://www.amazon.com/wedding/share/JackieandCristian_2024" className="md:text-[15px] ipp:text-[20px] font-bold text-black hover:text-[#77BFA3] underline transition duration-500">Registry</a>
                </li>
                <li>
                    <a className="md:text-[15px] ipp:text-[20px] font-bold text-black hover:text-[#77BFA3] underline transition duration-500" href="https://drive.google.com/file/d/1ru9RZUQwi2daCGhGJimOCFbNScOizwum/view?usp=sharing" rel="noreferrer" target="_blank">Travel Checklist</a>
                </li>
                {/* <li>
                <a className="md:text-[15px] font-bold text-black hover:text-[#77BFA3] underline transition duration-500" href="" rel="noreferrer" target="_blank">Dreams Tulum Website</a>
                </li> */}
            </ul>
            <div className="mt-16 basis-1/4 md:mt-4 ipp:text-[20px]">
                <h4 className="font-bold">Travel Agent Contact</h4>
                <p className="">Donna Shapiro</p>
                <p>dshapiro@dreamvacations.com</p>
                <p>+1 240-409-0330</p>
                <p>+1 866-418-8163</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;