import React from 'react'

const Common = (props) => {
    return (
        <>
            <button className="py-[13px] px-[46px] relative flex items-center justify-center hover:bg-[#ffffffaf] hover:border-transparent hover:text-black duration-300 hover:shadow-[0px_0px_19px_10px_#000000f1] bg-transparent  rounded-[41px] border-[1px] font-inter text-[16px] text-white"> <span className='absolute -bottom-2 -left-2'><svg className=" absolue" width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg></span>{props.text}</button>
        </>
    )
}

export default Common