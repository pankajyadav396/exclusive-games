import React from 'react'

const Common2 = (props) => {
    return (
        <>
            <button className="p-[13px_46px_13px_46px] relative flex items-center duration-300 justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] font-bold font-inter text-[16px] text-[#00141B] bg-[] group hover:bg-gradient-to-tl hover:from-[#7AF57A] hover:to-[#51C8EF] hover:text-white">
                <span className='absolute -bottom-2 -left-2 group-hover:bottom-0 group-hover:left-0 duration-300 group-hover:z-[-1]'>
                    <svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_1872_27)" strokeWidth="1.5" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1872_27" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#51C8EF" />
                                <stop offset="1" stopColor="#7AF57A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>{props.text}</button>
        </>
    )
}

export default Common2