import React from 'react'
import img777 from '../assets/images/777bar-juaa-img.webp'
import img1 from '../assets/images/img-bulb.webp'
import img2 from '../assets/images/3peopleheadstar.webp'
import img3 from '../assets/images/eurodollarpound.webp'
import img4 from '../assets/images/Ellipse-jua-right.webp'
import ellipse1 from '../assets/images/barjuatop.webp'
import ellipse2 from '../assets/images/barjuatop.webp'

const Barjuaa = () => {
    return (
        <>
            <div className='relative z-1'>
                <img src={ellipse1} alt='image' className='z-[-1] animate-pulse absolute top-[-147%] '></img>
                <img src={img4} alt="img" className='z-[-1] right-0 absolute top-0 animate-pulse' />
                <div className='container mt-[100px]'>
                    <div className='row items-center justify-center'>
                        <div className='md:w-1/2 px-3 max-md:mb-6'>
                            <img src={img777} alt="img" className='w-full max-w-[558px]' />
                        </div>
                        <div className='md:w-1/2 px-3 h-full'>
                            <p className='text-white max-sm:[text-26px] leading-[57.6px] lg:mb-[58px] mb-7 font-normal max-xl:text-[38px] mt-[-10px] xl:text-[48px] font-anton'>Más razones para elegirnos</p>
                            <div className='max-w-[374px]'>
                                <div className='flex border-[#ffffffb4] border-[1px] items-center justify-center py-[24px] gap-[37px] mb-[22px] max-w-[374px] rounded-[16px]'>
                                    <img src={img1} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-anton'>Silver</p>
                                        <p className=' font-inter font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Páginas creadas</p>
                                    </div>
                                </div>
                                <div className='flex border-[#ffffffb4] border-[1px] items-center justify-center py-[24px] gap-[37px] mb-[22px] max-w-[374px] rounded-[16px]'>
                                    <img src={img2} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px]  font-normal text-nowrap font-anton'>Silver</p>
                                        <p className=' font-inter font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Clientes Satisfechas</p>
                                    </div>
                                </div>
                                <div className='flex border-[#ffffffb4] border-[1px] items-center justify-center py-[24px] gap-[37px]  max-w-[374px] rounded-[16px]'>
                                    <img src={img3} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-anton'>Silver</p>
                                        <p className=' font-inter font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Divisas Disponibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Barjuaa