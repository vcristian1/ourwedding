import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
     className='rounded-md bg-[#C89F79] gs8:px-3 gs8:py-1.5 xs:px-4 xs:py-1.5 xr:px-4 xr:py-2.5 px-10 py-2 hover:bg-[#77BFA3] hover:text-white transition duration-500 lg:text-[17px]'
     onClick={() => setSelectedPage(SelectedPage.Faqs)}
     href={`#${SelectedPage.Faqs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton