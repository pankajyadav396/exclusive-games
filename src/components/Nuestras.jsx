import React from 'react'
import ghar from '../assets/images/gharjuaaimg.webp'
import ghar1 from '../assets/images/gharjualight.webp'
import Common from "./Common.jsx";
import Tiksvg from './Svgs.jsx'
const Nuestras = () => {
    return (
        <>
            <p className='text-white text-xl sm:text-[48px] leading-[57.6px] font-anton mb-3 text-center font-[400] mt-[150px]' id='testimonial'>Nuestras ofertas</p>
            <p className='text-white max-sm:text-[13px] sm:text-[16px] sm max-sm:text-[13px]:sm:text-[16px] leading-[25.6px] font-inter text-center font-[500]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>

            <div className=' px-3 mx-auto max-w-[1140px] max-w-lg-mx-3 border-[#828F93] mt-[60px] border-[1px] rounded-[16px] bg-[#062027] p-[50px_40px_32px_0]'>
                <div className='flex flex-row flex-wrap -mx-3 max-lg:justify-center max-lg:items-center'>
                    <div className='lg:w-[60%] px-3 relative z-1'>
                        <img src={ghar} alt="img" className='w-full relative z-[1]' />
                        <img src={ghar1} alt="ghar" className='absolute z-[0] top-[-10%] left-[0%] animate-pulse' />

                    </div>
                    <div className='lg:w-[40%] px-3'>
                        <p className='text-white text-[24px] sm:text-[32px] leading-[57.6px] mb-[16px] font-normal text-nowrap max-xl:text-[38px] font-anton'>Silver</p>
                        <p className='text-white max-sm:text-[13px] sm:text-[16px] max-w-[401px] leading-[25.6px] mb-[24px] font-medium font-inter'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                        <p className='text-white max-sm:[text-32px] sm:text-[48px] leading-[57.6px] mb-[24px] font-normal text-nowrap max-xl:text-[38px] font-anton'>$5000</p>

                        <div className='flex gap-2 mb-[20px]'>
                            <Tiksvg />
                            <p className='text-white max-w-387 max-w-[239px] max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className='flex gap-2 mb-[20px]'>
                            <Tiksvg />
                            <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='flex gap-2 mb-[20px]'>
                            <Tiksvg />
                            <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='flex gap-2 mb-[20px]'>
                            <Tiksvg />
                            <p className='text-white max-w-387 max-w-[239px] max-sm:text-[13px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className='flex gap-2 mb-[25px]'>
                            <Tiksvg />
                            <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Aplicación para Android y Windows de regalo.</p>
                        </div>
                        <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mb-[40px] font-medium font-inter'>Tiempo de creación 2 a 3 semanas </p>
                        <Common text='Comprar ahora' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nuestras