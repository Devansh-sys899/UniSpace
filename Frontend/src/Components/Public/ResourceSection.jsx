import React from 'react';
import techLab from '../../assets/tech-lab.jpg';
import microscope from '../../assets/microscope.jpg';
import workspace from '../../assets/workspace-img.jpg';

const ResourceSection = () => {
    return (
        <div className="bg-white mt-10 flex flex-col gap-10 items-start py-24 px-8">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl text-surface_dark font-semibold">Features Resources</h1>
                <p className="text-gray-600 font-normal text-xl">Explore premium facilities available for immediate booking.</p>
            </div>
            <div className="grid grid-cols-4 gap-8 w-full">
                <div className="bg-white flex flex-col justify-center pb-6 gap-1 rounded-xl border-2 border-border">
                    <img src={techLab} alt="Tech Lab" />
                    <h1 className="text-surface_dark font-[550] text-xl mt-6 ml-5">Tech Lab 4</h1>
                    <div className="flex items-center gap-2 ml-5 text-lg">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className="text-gray-500 text-base">San Francisco, CA</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-surface_dark font-[550] text-xl ml-6">120$/Hour</h1>
                        <a href="#" className="text-xs text-gray-500 mr-2 flex items-center">View Details <i className='bx bx-right-arrow-alt text-sm '></i></a>
                    </div>
                </div>
                <div className="bg-white flex flex-col justify-center pb-6 gap-1 rounded-xl border-2 border-border">
                    <img src={techLab} alt="Tech Lab" />
                    <h1 className="text-surface_dark font-[550] text-xl mt-6 ml-5">Tech Lab 4</h1>
                    <div className="flex items-center gap-2 ml-5 text-lg">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className="text-gray-500 text-base">San Francisco, CA</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-surface_dark font-[550] text-xl ml-6">120$/Hour</h1>
                        <a href="#" className="text-xs text-gray-500 mr-2 flex items-center">View Details <i className='bx bx-right-arrow-alt text-sm '></i></a>
                    </div>
                </div>
                <div className="bg-white flex flex-col justify-center pb-6 gap-1 rounded-xl border-2 border-border">
                    <img src={microscope} alt="Tech Lab" />
                    <h1 className="text-surface_dark font-[550] text-xl mt-6 ml-5">Microscopy Suite</h1>
                    <div className="flex items-center gap-2 ml-5 text-lg">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className="text-gray-500 text-base">Boston , MA</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-surface_dark font-[550] text-xl ml-6">250$/Hour</h1>
                        <a href="#" className="text-xs text-gray-500 mr-2 flex items-center">View Details <i className='bx bx-right-arrow-alt text-sm '></i></a>
                    </div>
                </div>
                <div className="bg-white flex flex-col justify-center pb-6 gap-1 rounded-xl border-2 border-border">
                    <img src={workspace} alt="Tech Lab" />
                    <h1 className="text-surface_dark font-[550] text-xl mt-6 ml-5">Prototype Workshop</h1>
                    <div className="flex items-center gap-2 ml-5 text-lg">
                        <i className='bx bx-location-plus text-gray-500'></i>
                        <p className="text-gray-500 text-base">Austin, TX</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-surface_dark font-[550] text-xl ml-6">85$/Hour</h1>
                        <a href="#" className="text-xs text-gray-500 mr-2 flex items-center">View Details <i className='bx bx-right-arrow-alt text-sm '></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceSection;