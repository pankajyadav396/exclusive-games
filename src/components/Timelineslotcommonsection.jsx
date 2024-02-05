import React from 'react'
import Timelinenus from './Timelinenus'
import Slots from './Slots'

const Timelineslotcommonsection = () => {
    return (
        <div>
            <div className='max-lg:bg-white bg-[url(./assets/images/whitelayer.webp)] lg:bg-no-repeat bg-100 py-[243px] max-lg:py-[100px] relative z-20'>
                <Timelinenus />
                <Slots />
            </div>
        </div>
    )
}

export default Timelineslotcommonsection