import React from 'react'
import Common2 from './Common2'
import Casinoimg from "../assets/images/casino.webp"

const Casino = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/whitelayer.webp)] bg-no-repeat bg-100 py-[243px] max-lg:py-[100px] max-lg:bg-white relative z-20'>
                <div className='max-w-[1140px] mx-auto px-3 py-[30px]'>
                    <div className=' flex flex-wrap flex-row'>
                        <div className=' w-full md:w-1/2 my-auto'>
                            <h2 className='font-["anton"] font-normal sm:text-[30px] text-[40px] md:text-[48px]  leading-10  text-[#00141B] '>Por qué elegirnos</h2>
                            <p className='font-["inter"] font-medium text-[16px]  leading-6  text-[#334349] max-w-[526px] pt-[16px] pb-[24px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                            <span className='mt-3'><Common2 className="text-[#000]" text="Leer más" /></span>
                        </div>
                        <div className=' w-full md:w-1/2 sm:pt-6 pt-4 md:pt-0'>
                            <img src={Casinoimg} alt="Casino" />
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Casino