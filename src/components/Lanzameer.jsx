import React from 'react'
import Common2 from './Common2'
import img1 from "../assets/images/lanzaleft.webp"
import img2 from "../assets/images/lanzaright.webp"
const Lanzameer = () => {
    return (
        <>
            <div className='md:pb-[150px] sm:pb-[100px] pb-[70px] max-sm:mt-[-70px] sm:px-5 px-3'>
                <div className=' max-w-[1140px] relative overflow-hidden bg-cover bg-[#061e26] bg-center bg-no-repeat container mx-auto px-3 sm:py-[70px] py-[40px] md:py-[100px] border-[0.5px] rounded-[12px] border-[#829092]'>
                    <div className='relative z-[1]' >
                        <h2 className='font-["anton"] font-normal sm:text-[27px] text-[24px] md:text-[32px]  leading-10  text-[#FFFFFF] pt-[10px] text-center'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                        <div className=' flex justify-center mt-10'><Common2 text="Leer más" /></div>
                    </div>
                    <img src={img1} alt="image" className='absolute left-0 top-0 h-full' />
                    <img src={img2} alt="image" className='max-sm:hidden absolute right-0 top-0 h-full' />
                </div>
            </div>

        </>
    )
}

export default Lanzameer
