import React from 'react';
import GreyMatrixRoundedLogo from '../assets/brand/GreyMatrixRoundedLogo.png';
import NLogo from '../assets/brand/NLogo.png';
import insta from '../assets/social/insta.png';
import linkedin from '../assets/social/linkedin.png';
import whatsapp from '../assets/social/whatsapp.png';

const Footer = () => {
    return (
        <div className='max-w-screen-2xl bg-neutralBlack py-8 px-4 md:px-14 flex md:flex-row flex-col' id='faq'>
            {/* Company Details */}
            <div className='md:w-1/3 flex flex-col gap-10'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                    <img className='h-10 w-10 rounded-xl' src={NLogo} />
                    <span className='text-neutralWhite '>Nabu Technologies</span>
                </a>

                <div>
                    <p className='text-neutralSilver text-sm'>Copyright © 2024 Nabu Technologies.</p>
                    <p className='text-neutralSilver text-sm'>All rights reserved</p>
                </div>


                {/* Social Medias */}
                <div className='flex gap-4 mb-4'>
                    <a href="https://www.instagram.com/nabutech?igsh=MXViMTJoeGE1MWFpcA==" target="_blank" rel="noopener noreferrer">
                        <img className='h-7 w-7' src={insta} alt="Instagram" />
                    </a>
                    <a href="https://www.instagram.com/nabutech?igsh=MXViMTJoeGE1MWFpcA==" target="_blank" rel="noopener noreferrer">
                        <img className='h-7 w-7' src={linkedin} />
                    </a>
                    <a href="https://wa.me/916379054904?text=Hi,%20Nabu%20Technologies" target="_blank" rel="noopener noreferrer">
                        <img className='h-7 w-7' src={whatsapp} />
                    </a>
                </div>
            </div>

            {/* Sections */}
            <div className='md:w-2/3 flex gap-4 justify-between'>
                {/* Company */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Company</h4>

                    <p className='text-neutralSilver text-xs font-normal'>About us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Contact us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Pricing</p>
                    <p className='text-neutralSilver text-xs font-normal'>Portfolio</p>
                </div>

                {/* Company */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Support</h4>
                    <p className='text-neutralSilver text-xs font-normal'>Help center</p>
                    <p className='text-neutralSilver text-xs font-normal'>Terms of service</p>
                    <p className='text-neutralSilver text-xs font-normal'>Legal</p>
                    <p className='text-neutralSilver text-xs font-normal'>Privacy policy</p>
                </div>

                {/* Stay up to date */}
                <div className='flex flex-col'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Stay up to date</h4>
                    <p className='text-neutralSilver text-xs font-bold mt-4'>📍 Address</p>
                    <div>  
                    <p className='text-neutralSilver text-xs font-normal'>#38, Mullai Nagar,<br/> Airport, Tiruchirappalli, <br/>Tamil Nadu, India – 620007</p>
                    </div>
                    {/* Mail */}
                    <p className='text-neutralSilver text-xs font-bold mt-4'>📬 Mail</p>
                    <div>  
                    <p className='text-neutralSilver text-xs font-normal'>info@nabutechnologies.in</p>
                    </div>
                    {/* Call */}
                    <p className='text-neutralSilver text-xs font-bold mt-4'>📞 Call</p>
                    <div>  
                    <p className='text-neutralSilver text-xs font-normal'>+91-9361812260</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;