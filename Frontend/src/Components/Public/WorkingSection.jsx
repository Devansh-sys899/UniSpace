import React from 'react';

const WorkingSection = () => {
    return (
        <div className="bg-surface_light w-full py-20 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl text-surface_dark font-semibold">How It works</h1>
                <p className="text-xl text-gray-500 font-normal">Get started in minutes with our streamlined booking process.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-8 px-20">
                <div className="flex flex-col items-start p-4">
                    <h1 className="text-[120px] font-sans font-bold text-gray-200">01</h1>
                    <h2 className="text-surface_dark relative -top-12 font-semibold text-[25px] mb-3">Discover</h2>
                    <p className="text-gray-500 text-lg relative -top-14 font-normal">Browse thousands of verified resources across our global network. Filter by location, type, availability, and price to find the perfect match.</p>

                </div>
                <div className="flex flex-col items-start p-4">
                    <h1 className="text-[120px] font-sans font-bold text-gray-200">02</h1>
                    <h2 className="text-surface_dark relative -top-12 font-semibold text-[25px] mb-3">Verify</h2>
                    <p className="text-gray-500 text-lg relative -top-14 font-normal">Review detailed specifications, certifications, and real user reviews. Schedule a virtual tour or connect directly with facility managers.</p>

                </div>
                <div className="flex flex-col items-start p-4 mt-2">
                    <h1 className="text-[120px] font-sans font-bold text-gray-200">03</h1>
                    <h2 className="text-surface_dark relative -top-12 font-semibold text-[25px] mb-3">Access</h2>
                    <p className="text-gray-500 text-lg relative -top-14 font-normal">Book instantly with secure payments. Receive digital access credentials and 24/7 support throughout your reservation.</p>
                </div>
            </div>
        </div>
    )
}

export default WorkingSection;