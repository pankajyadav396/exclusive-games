import React from 'react'
import PokerImg from '../assets/images/poker.webp'
import Aviator from '../assets/images/aviater.webp'
import { Linkbtn } from './Svgs'
import ellipse2 from '../assets/images/jackpotbottomlight.webp'
import ellipse1 from '../assets/images/jackpottoplight.webp'
import ellipse3 from '../assets/images/pokercenterlight.webp'

const Poker = () => {
    return (
        <>
            <div className='relative'>
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-80%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-1] animate-pulse absolute bottom-[0%] left-[-10%] max-md:hidden'></img>
                <div className='container pt-[74px] pb-[100px] relative'>
                    <img src={ellipse3} alt='image' className='z-[-1] max-sm:hidden animate-pulse absolute bottom-[36%] top-45% left-[33%] right-[60%]'></img>
                    <div className='row'>
                        <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center lg:pl-3 px-3 lg:pr-8'>
                            <img src={PokerImg} alt="poker" className='max-w-[538px] w-full' />
                            <h2 className='pt-[60px] font-[Anton] font-normal text-[48px] text-[#FFFFFF]'>Nuestra Visión</h2>
                            <p className='pt-4 max-lg:text-center text-[#CCD0D2] font-[Inter] font-medium text-[16px] max-w-[444px]'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <div className='pt-6' >
                                <p className='cursor-pointer inline-block'><Linkbtn /></p>
                            </div>
                        </div>
                        <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col-reverse max-lg:items-center lg:pr-3 px-3 lg:pl-8'>
                            <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                                <h2 className='font-[Anton] font-normal text-[48px] text-[#FFFFFF]'>Nuestra Misión</h2>
                                <p className='max-lg:text-center pt-4 text-[#CCD0D2] font-[Inter] font-medium text-[16px] max-w-[444px]'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                <div className='pt-6' >
                                    <p className='cursor-pointer inline-block'><Linkbtn /></p>
                                </div>
                            </div>
                            <div>
                                <img className='pt-[60px] max-w-[538px] w-full' src={Aviator} alt="aviator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poker