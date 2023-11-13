import React from 'react'
import Image from "next/image"
import {
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaDiscord

} from 'react-icons/fa'
import footerLogo from '../assets/chadslogo.png'

const Footer = () => {

  return (
    
    <footer className='bg-gray-200'>
        <div className="max-w-[1940px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-8 text-gray-700">
            <div className="lg:col-span-2">
                {/* <p className="text-xl font-semibold">Image goes here</p> */}
                <Image src={footerLogo} alt="footer logo" width={150} height={10}></Image>
                <p className="pt-[-10px] font-bold group">Policy ID: <span className="lg:text-sm group-hover:text-[#801d71] font-semibold">835f0cbec835f0cb95b15348509872322a888a9fac4f64dfef0ec</span></p>
            </div>

            <div id="footer_menu">
                <ul className="flex flex-col space-y-3">
                    <div className='group lg:py-5'>
                        <li className="font-semibold text-xl pb-2">Quick Links</li>
                        <li className='group-hover:border-b-[6px] group-hover:border-[#801d71] group-hover:text-2xl w-1/6'></li>
                    </div>
                    
                    <li className='hover:text-[#801d71]'>Home</li>
                    <li className='hover:text-[#801d71]'>About</li>
                    <li className='hover:text-[#801d71]'>Weekly xyz</li>
                </ul>
            </div>
            
            <div className="flex flex-col space-y-4">
                <div className='lg:py-5'>
                    <h2 className="text-xl font-semibold pb-2 hover:border-b-[6px] hover:border-[#801d71] w-[35px]">Socials</h2>
                </div>
                <div className="flex lg:justify-between text-2xl">
                    <FaTwitter className="sm:mr-3 lg:mr-0"/>
                    <FaInstagram  className="sm:mx-3 lg:mx-0"/>
                    <FaFacebook className="sm:mx-3 lg:mx-0"/>
                    <FaDiscord />
                </div>
            </div>
        </div>

        <div className="border-t w-[90%] mx-auto border-gray-300">
            <p className="py-14 flex justify-center text-center hover:text-[#801d71]">2023 TheChads | All rights reserved.</p>
        </div>
        
    </footer>
  )
}

export default Footer