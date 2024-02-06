import Common from "./Common.jsx";
import map1 from '../assets/images/slotimg1.webp'
import map2 from '../assets/images/slotimg6.webp'
import map3 from '../assets/images/slotimg3.webp'
import map4 from '../assets/images/slotimg4.webp'
import map5 from '../assets/images/slotimg5.webp'
import map6 from '../assets/images/slotimg2.webp'
import Common2 from "./Common2.jsx";

const Slots = () => {
    const products = [
        { img: map1 },
        { img: map2 },
        { img: map3 },
        { img: map4 },
        { img: map5 },
        { img: map6 },
    ]
    return (
        <>
            <div className='bg-white'>
                <div className=' mx-auto container  max-w-[1140px] mt-[80px] sm:mt-[135px] px-3'>
                    <p className='text-[#00141B] text-[40px] sm:text-[48px] leading-[57.6px] mb-[16px] font-anton text-center font-[400]'>Slots</p>
                    <p className='text-[#00141B] text-center text-sm sm:text-[16px] leading-[25.6px] font-inter font-medium'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 xl:gap-[24px] mt-[60px] mb-[40px] ' >
                        {products.map((items, index) => (
                            <div key={index}>
                                <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer'>
                                    <img className="w-full" src={items.img} alt="" />
                                    <div className=' absolute bg-[#000000B8] w-full h-full scale-0 group-hover:scale-100 flex items-center justify-center left-0 bottom-0 group-hover:opacity-100 opacity-0 duration-300'>
                                        <Common text='Jugar' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="justify-center flex">
                        <div className="pb-5">
                            <Common2 text="Mostrar más" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slots