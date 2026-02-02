import React from 'react'
import HeroCard from './HeroCard'

const Hero = () => {
    return (
        <div className="max-w-screen h-[110vh] overflow-hidden py-10 px-8 grid grid-cols-2 md:grid-rows-2 justify-center gap-10 bg-surface_light">
            <div className=' flex flex-col mt-20 gap-4'>
                <h1 className='text-surface_dark text-6xl font-bold leading-[1]'>Enterprise-grade <br /> infrastructure. <br /> <span className='text-primary'>Scalable access.</span></h1>
                <p className='text-gray-600 text-xl font-medium'>The unified platform for discovering, booking, and managing premium resources. From specialized labs to collaborative workspaces — access what you need, when you need it</p>
                <div className='flex gap-6'>
                    <button className='bg-primary text-white font-semibold px-4 py-2 rounded-lg'>Start Free trial</button>
                    <button className='bg-surface_light border border-border text-black font-semibold px-4 py-2 rounded-lg'>Schedule Demo</button>
                </div>
            </div>
            <HeroCard />
        </div>
    )
}

export default Hero;