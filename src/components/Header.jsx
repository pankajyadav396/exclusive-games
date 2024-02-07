import React from 'react'
import Navbar from './Navbar'
import Common2 from './Common2'

const Header = () => {
    return (
        <div className='bg-[url(./assets/images/hero-bg-img.webp)] min-h-screen min-[1200px]:min-h-[810px] min-[1441px]:min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col'>
            <Navbar />
            <div className="grow max-w-[1164px] mx-auto px-3 flex items-center min-[1200px]:items-start">
                <div
                    className="max-w-[727px] w-full flex flex-col items-center min-[1200px]:mt-[140px]">
                    <h1 className="max-w-[505px] w-full font-anton font-normal text-[36px] md:text-[72px] md:leading-[86.4px] text-white mb-4 text-center">
                        Exclusive Games. Pasión por ganar
                    </h1>
                    <p className="font-inter font-medium text-base leading-[25.6px] opacity-80 text-white text-center mb-10">
                        En Exclusive Games somos un equipo apasionado de personas
                        dedicados al desarrollo de multiplataformas para juegos de azar. A
                        lo largo de nuestra vida consumimos todo tipo de juegos hasta que
                        un día decidimos crear los propios.
                    </p>
                    <Common2 text="Empezar" />
                </div>
            </div>
        </div>
    )
}

export default Header