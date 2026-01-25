import React from 'react';

const Footer = () => {
    return (
        <div className="bg-surface_light w-full py-8 flex flex-col px-12 justify-center">
            <div className="grid grid-cols-5 w-full">
                <div className="flex flex-col gap-2">
                    <h1 className="text-surface_dark font-semibold text-2xl">Unispace</h1>
                    <p className="text-base text-gray-500">Enterprise-grade resource <br /> booking for the modern organization.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-surface_dark font-semibold">Products</h2>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Features</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Pricing</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Integrations</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">API</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-surface_dark font-semibold">Company</h2>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">About</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Blog</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Careers</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Press</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-surface_dark font-semibold">Resources</h2>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Documentation</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Help Center</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Community</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Contact</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-surface_dark font-semibold">Legal</h2>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Privacy</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Term</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Security</a>
                </div>
            </div>
            <div className="w-screen flex items-center justify-between border-t-2 border-border mt-16 pt-4">
                <div className="flex items-center gap-2">
                    <i className="bx bx-copyright text-gray-500"></i>
                    <p className="text-gray-500 text-base">2026 Unispace. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-4 mr-24">
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Facebook</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-surface_dark">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;