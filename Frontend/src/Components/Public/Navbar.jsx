import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="max-w-100 px-12 py-4 border-b-2 bg-surface_light flex items-center justify-between">
            <h1 className="text-surface_dark text-2xl font-bold">UniSpace</h1>
            <div className='flex gap-8'>
                <a href="#" className="text-gray-700 font-medium">Solutions</a>
                <a href="#" className="text-gray-700 font-medium">Resources</a>
                <a href="#" className="text-gray-700 font-medium">Enterprise</a>
            </div>
            <Link to='/sign-in'>
                <button className="bg-primary text-white font-medium px-4 py-2 rounded-md">Get Started</button>
            </Link>
        </div>
    )
}

export default Navbar;