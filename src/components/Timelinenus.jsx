import React from 'react'
import img1 from '../assets/images/circle1.webp'
import img2 from '../assets/images/circle2.webp'
import img3 from '../assets/images/circle3.webp'
import { Arrow1, Arrow2 } from './Svgs'
const Timelinenus = () => {
    return (
        <div className='container'>
            <h2 className='font-[Anton] font-normal text-[48px] text-[#00141B] text-center'>Nuestros Atributos de Marca</h2>
            <div className='row pt-[60px]'>
                <div className='w-full md:w-1/2 lg:w-4/12 px-3 flex flex-col items-center relative'>
                    <div>
                        <img src={img1} alt="img-1" className='max-w-[100px]' />
                    </div>
                    <h3 className='font-[Anton] font-normal text-[20px] text-[#00141B] pt-[16px]'>Inteligencia</h3>
                    <p className='text-center font-[Inter] font-medium max-w-[263px] text-[16px] text-[#334349] pt-[10px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                    <div className='absolute left-[71%] top-[8%] max-[1085px]:left-[67%] max-lg:hidden'>
                        <Arrow1 />
                    </div>
                </div>

                <div className='w-full md:w-1/2 lg:w-4/12 px-3 flex flex-col items-center relative'>
                    <div>
                        <img src={img2} alt="img-2" className='max-w-[100px]' />
                    </div>
                    <h3 className='font-[Anton] font-normal text-[20px] text-[#00141B] pt-[16px]'>Proactividad</h3>
                    <p className='text-center font-[Inter] font-medium max-w-[235px] text-[16px] text-[#334349] pt-[10px]'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                    <div className='absolute left-[71%] top-[31%] max-lg:hidden'>
                        <Arrow2 />
                    </div>
                </div>
                <div className='w-full lg:w-4/12 px-3 flex flex-col items-center'>
                    <div>
                        <img src={img3} alt="img-3" className='max-w-[100px]' />
                    </div>
                    <h3 className='font-[Anton] font-normal text-[20px] text-[#00141B] pt-[16px]'>Innovación</h3>
                    <p className='text-center font-[Inter] font-medium max-w-[245px] text-[16px] text-[#334349] pt-[10px]'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                </div>
            </div>
        </div>
    )
}


export default Timelinenus