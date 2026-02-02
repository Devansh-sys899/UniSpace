import React from 'react';

const CompaniesSection = () => {
    return (
        <div className="bg-surface_light w-full border-y-2 overflow-hidden border-border py-10 flex flex-col gap-10">
            <h2 className='text-gray-500 text-center text-md'>Trusted by Industry Leader Worldwide</h2>
            <div className="mx-auto flex items-center justify-center gap-10">
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-2xl">AcmeCorp</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-xl">DataFlow</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-xl">InnovateCo</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-xl">Cloudbase</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-xl">NextGen</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <h1 className="text-gray-600 text-xl">Quantum</h1>
                </div>
            </div>
        </div>
    )
}

export default CompaniesSection;