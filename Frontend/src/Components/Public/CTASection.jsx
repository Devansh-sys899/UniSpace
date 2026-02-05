import React from 'react';
import { useNavigate } from 'react-router-dom'

const CTASection = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-surface_dark w-full py-20 flex flex-col gap-6 items-center justify-center">
            <h1 className="text-white text-5xl font-semibold text-center">Ready to transform how you access <br /> resources?</h1>
            <p className="text-gray-400 text-xl font-normal text-center">Join thousands of organizations already using Unispace to optimize their <br /> resource management and unlock new opportunities.</p>
            <div className="flex items-center gap-6">
                <button onClick={() => navigate('/sign-in')} className="bg-primary text-white font-[500] px-4 py-2 rounded-xl flex items-center">Get started free <i className='bx bx-right-arrow-alt'></i></button>
                <button className="px-4 py-2 text-gray-200 rounded-xl bg-surface_dark border-2 border-gray-500">Contact Sales</button>
            </div>
            <p className="text-gray-400 text-sm font-normal">No Credit Card required. Start your 14 day free trial today.</p>
        </div>
    )
}

export default CTASection;