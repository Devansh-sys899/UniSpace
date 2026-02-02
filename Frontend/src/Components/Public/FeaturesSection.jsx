import React from 'react';

const FeaturesSection = () => {
    return (
        <div className="max-w-full bg-surface_light flex flex-col gap-10 p-10">
            <div className="mx-auto flex flex-col gap-2">
                <h1 className='text-4xl font-semibold text-surface_dark text-center'>Built for every stage of growth</h1>
                <p className='text-gray-500 font-normal text-xl text-center'>Whether you're monetizing assets or seeking access, Unispace adapts to <br /> your needs.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className='bg-white rounded-xl py-10 flex flex-col items-start pl-8 gap-2'>
                    <div className="p-2 py-1 bg-blue-100 rounded-3xl">
                        <p className="text-base text-primary">For Enterprise</p>
                    </div>
                    <h1 className="text-2xl text-surface_dark font-semibold">Monetize your infrastructure</h1>
                    <p className="text-lg text-gray-500 font-normal">Turn your idle resources into revenue streams while maintaining <br /> full control.</p>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bxs-up-arrow w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Revenue Optimization</h2>
                            <p className="text-gray-500">Maximize utilization and monetize idle resources with dynamic pricing.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-shield w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Enterprise Security</h2>
                            <p className="text-gray-500">SOC 2 compliant with advanced access controls and audit trails.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-data w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Advanced Analytics</h2>
                            <p className="text-gray-500">Real-time insights into resource performance and utilization patterns.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-buildings w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Multi-site Management</h2>
                            <p className="text-gray-500">Centralized control across all your locations and facilities.</p>
                        </div>  
                    </div>
                </div>
                <div className='bg-white rounded-xl pl-8 py-10 flex flex-col items-start gap-2'>
                    <div className="mt-2 px-2 py-1 bg-gray-100 rounded-3xl">
                        <p className="text-base text-gray-800">For Scale-ups</p>
                    </div>
                    <h1 className="text-2xl text-surface_dark font-semibold">Access resources</h1>
                    <p className="text-lg text-gray-500 font-normal">Get the infrastructure you need without the overhead of ownership.</p>
                    <div className="flex items-center mt-8 gap-6">
                        <i class='bx bxs-zap w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Instant Access</h2>
                            <p className="text-gray-500">Book premium resources on-demand without long-term commitments.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-globe w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Global Network</h2>
                            <p className="text-gray-500">Access thousands of verified spaces across 50+ countries.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-group w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Team Collaboration</h2>
                            <p className="text-gray-500">Real-time insights into resource performance and utilization patterns.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 gap-6">
                        <i class='bx bx-rocket w-10 h-10 text-2xl flex items-center justify-center rounded-lg text-primary bg-blue-100'></i>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-surface_dark font-[450]">Scale Flexibly</h2>
                            <p className="text-gray-500">Grow your resource access as your team and needs expand.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection;