import Common from './Common'
import { Tiksvg } from './Svgs'
import Box3img from "../assets/images/box-3img.webp"
import { Box3elipse } from './Svgs'
import ellipse1 from '../assets/images/jackpottoplight.webp'
import ellipse2 from '../assets/images/jackpotbottomlight.webp'
const Platinum = () => {
    return (
        <>
            <div className='px-4 relative'>
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-130%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-1] animate-pulse absolute bottom-[0%] left-[-10%]  max-md:hidden'></img>
                <div className=' container bg-[#062023] mt-[64px] sm:py-[50px] py-[40px] md:py-[78px] px-[45px] rounded-[16px] border-[0.5px] border-[#828F91]'>
                    <div className="row flex-col-reverse md:flex-row">
                        <div className="  w-full md:w-1/2 my-auto px-3">
                            <h2 className=' font-anton font-normal text-[32px] leading-10 text-[#FFFFFF]'>Platinum</h2>
                            <p className=' font-inter font-medium text-[16px] leading-6 pt-[16px] text-[#CED4D4] max-w-[364px]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className=' font-anton font-normal md:text-[40px] sm:text-[35px] text-[30px] lg:text-[48px] text-[#FFFFFF] pt-[15px]'>Consultar precio</h2>
                            <div className=' flex  items-center pb-10 pt-[10px]'>
                                <span><Tiksvg /></span>
                                <p className=' font-inter font-normal text-[16px] text-[#CED4D4]'>Personalizable </p>
                            </div>
                            <Common text="Comprar ahora" />
                        </div>
                        <div className=" w-full md:w-1/2 relative z-[1] px-3">
                            <span className=' absolute z-[-1] sm:right-[-10%]  sm:top-[-25%]'><Box3elipse /></span>
                            <img src={Box3img} alt="Comprar ahora" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Platinum
