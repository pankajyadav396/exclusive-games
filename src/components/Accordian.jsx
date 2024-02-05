import React from 'react'
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";

function OpenSign({ id, open }) {
    return (
        <div className="relative ">
            <svg xmlns="http://www.w3.oyg/1700/svg" width="21" height="2" viewBox="0 0 21 2" fill="white" className={`${id === open ? "" : "rotate-90"} h-5 w-5   transition-transform`}>
                <path d="M1.69629 1H19.6963" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="absolute rotate-0 top-[9px]" xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2" fill="white" >
                <path d="M1.69629 1H19.6963" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
}

const Accordian = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className='relative z-1 max-sm:mt-[-60px]'>
                <div className='w-[240px] z-[-1] h-[240px] rounded-[100%] opacity-[50%] left-[-142px] bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] absolute top-0 filtur-blur'></div>
                <div className='max-w-[970px] mx-auto px-3'>
                    <div className='py-[150px]'>
                        <h2 className='text-[27px] sm:text-[48px] font-[Anton] leading-[120%] font-normal text-center pb-[60px] text-white'>Preguntas más frecuentes</h2>
                        <Accordion className=" border-[#80898D] border mb-4 sm:mb-8 rounded-[10px]" open={open === 1} icon={<OpenSign id={1} open={open} />}                >
                            <AccordionHeader onClick={() => handleOpen(1)} className="font-[Anton] py-4 px-5 sm:text-[16px] text-[14px] md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent" >¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] font-medium px-5 pb-4 leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                        <Accordion className=" border-[#80898D] border mb-4 sm:mb-8 rounded-[10px]  overflow-hidden" open={open === 2} icon={<OpenSign id={2} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(2)} className="font-[Anton] py-4 px-5 sm:text-[16px] text-[14px] md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent"> ¿Cómo garantizan la seguridad de las operaciones en sus juegos?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] font-medium leading-[160%] px-5 pb-4 text-[#CCD0D1] max-w-[880px] pt-2">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                        <Accordion className=" border-[#80898D] border mb-4 sm:mb-8 rounded-[10px]" open={open === 3} icon={<OpenSign id={3} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="font-[Anton] py-4 px-5 sm:text-[16px] text-[14px] md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent" > ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pt-2 pb-4 ">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                        <Accordion className=" border-[#80898D] border mb-4 sm:mb-8 rounded-[10px]" open={open === 4} icon={<OpenSign id={4} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(4)} className="font-[Anton] sm:text-[16px] text-[14px] py-4 px-5 md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent">¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pt-2 pb-4 ">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                        <Accordion className=" border-[#80898D] border mb-4 sm:mb-8 rounded-[10px] " open={open === 5} icon={<OpenSign id={5} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(5)} className="font-[Anton]  py-4 px-5 sm:text-[16px] text-[14px] md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent">¿Qué métodos de pago aceptan?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] px-5 font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-4 ">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                        <Accordion className=" border-[#80898D] border rounded-[10px]" open={open === 6} icon={<OpenSign id={6} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(6)} className="font-[Anton] sm:text-[16px] text-[14px] py-4 px-5 md:text-[20px] text-start font-normal text-white leading-[130%] border-transparent">¿Puedo probar sus juegos antes de comprometerme?</AccordionHeader>
                            <AccordionBody className="font-[Inter] text-base text-[13px] md:text-[16px] px-5 font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-4">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian