import React from 'react'
import map7 from '../assets/images/ellos1.webp'
import map8 from '../assets/images/ellos2.webp'
import map9 from '../assets/images/ellos3.webp'
import Common from "./Common.jsx";
const Ellos = () => {
    const products = [
        { imge: map7 },
        { imge: map8 },
        { imge: map9 },
    ]
    return (
        <>
            <div className=' mx-auto container max-w-[1140px] mt-[80px] sm:mt-[150px] px-3'>
                <p className='text-white sm:text-[48px] text-[30px] leading-[57.6px] font-anton text-center font-[400]'>Ellos eligieron apostar con nosotros</p>
                <div className='grid grid-cols-1 mt-[60px] mb-[40px] sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-5 xl:gap-[24px]' >
                    {products.map((item, index) => (
                        <div key={index}>
                            <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer'>
                                <img className="w-full" src={item.imge} alt="imgellos" />
                                <div className=' absolute bg-[#000000B8] w-full h-full scale-0 group-hover:scale-100 flex items-center justify-center left-0 bottom-0 group-hover:opacity-100 opacity-0 duration-300'>
                                    <Common text='Rcasinovip' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='font-semibold font-inter text-[16px] text-center max-w-[830px] mx-auto leading-[25.6px] text-white'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                    Ahora, la próxima apuesta está en tus manos.<br />
                    Elige ganar. Elige exclusive game.
                </p>
            </div>
        </>
    )
}

export default Ellos