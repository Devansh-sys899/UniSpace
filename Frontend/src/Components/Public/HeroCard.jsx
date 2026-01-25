import React from 'react'

const HeroCard = () => {
    return (
        <div className="bg-white px-6 py-6 border border-border rounded-xl">
            <div className='w-100 flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h3 className='text-surface_dark font-[550]'>Resource Availability</h3>
                    <p className='text-gray-400 font-[550] text-sm'>Real Time monitoring</p>
                </div>
                <div className="px-4 py-1 bg-green-100 rounded-xl flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="text-accent text-sm font-medium">Live</div>
                </div>
            </div>
            <div className='w-100 border-b-2 border-separate pb-6 border-border flex flex-col items-center gap-4 justify-center pt-6'>
                <div className="bg-surface_light border border-border rounded-2xl flex flex-col flex-1 w-[100%] gap-1 px-6 py-4">
                    <div className="flex justify-betweeng items-center justify-between">
                        <h1 className="text-xl text-surface_dark font-medium">Bio tech Lab 4</h1>
                        <p className='text-sm text-accent'>Available</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className='text-sm text-gray-500'>BuildingA, floor 3</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-group text-gray-500'></i>
                        <p className='text-sm text-gray-500'>4/12</p>
                    <div className="w-full h-1.5 rounded-full bg-primary/20 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${(4 / 12) * 100}%` }} />
                    </div>
                    </div>
                </div>
                <div className="bg-surface_light border border-border rounded-2xl flex flex-col flex-1 w-[100%] gap-1 px-6 py-4">
                    <div className="flex justify-betweeng items-center justify-between">
                        <h1 className="text-xl text-surface_dark font-medium">Conference Room Alpha</h1>
                        <p className='text-sm text-yellow-500'>In use</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className='text-sm text-gray-500'>Building B,Floor 1</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-group text-gray-500'></i>
                        <p className='text-sm text-gray-500'>8/10</p>
                    <div className="w-full h-1.5 rounded-full bg-primary/20 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${(8 / 10) * 100}%` }} />
                    </div>
                    </div>
                </div>
                <div className="bg-surface_light border border-border rounded-2xl flex flex-col flex-1 w-[100%] gap-1 px-6 py-4">
                    <div className="flex justify-betweeng items-center justify-between">
                        <h1 className="text-xl text-surface_dark font-medium">Prototype Workshop</h1>
                        <p className='text-sm text-accent'>Available</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className='text-sm text-gray-500'>Building C,Ground</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className='bx bx-group text-gray-500'></i>
                        <p className='text-sm text-gray-500'>2/8</p>
                    <div className="w-full h-1.5 rounded-full bg-primary/20 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${(2 / 8) * 100}%` }} />
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex items-center justify-between p-6">
                <div className='flex flex-col items-center mx-4'>
                    <h1 className="text-4xl text-surface_dark font-[600]">24</h1>
                    <p className="text-sm text-gray-500">Species</p>
                </div>
                <div className='flex flex-col items-center mx-4'>
                    <h1 className="text-4xl text-primary font-[600]">89%</h1>
                    <p className="text-sm text-gray-500">Utilization</p>
                </div>
                <div className='flex flex-col items-center mx-4'>
                    <h1 className="text-4xl text-surface_dark font-[600]">156</h1>
                    <p className="text-sm text-gray-500">Bookings Today</p>
                </div>
            </div>
        </div>
    )
}

export default HeroCard;