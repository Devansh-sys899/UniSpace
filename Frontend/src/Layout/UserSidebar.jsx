import { motion } from "framer-motion";
import { useState } from "react";

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    return (
        <motion.aside
            initial={{ x: -80 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-24 bg-surface_dark border-r border-sidebar-border flex flex-col items-center py-8 gap-8"
        >
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-red-300 text-primary-foreground flex items-center justify-center font-bold text-lg"
            >
                U
            </motion.div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-4 flex-1">
                <a onClick={ () => setActive('Dashboard')} href="/user-dashboard/" className="flex flex-col items-center justify-center gap-2 p-4 "><i className={`bx bx-compass text-white text-3xl ${active === 'Dashboard' ? 'bg-primary text-white font-semibold rounded-md p-3' : ''}`}></i></a>        
                <a onClick={ () => setActive('Resources')} href="/user-dashboard/resources/" className="flex items-center justify-center gap-2 p-4 "><i className={`bx bx-grid-alt text-3xl text-white ${active === 'Resources' ? 'bg-primary text-white rounded-md p-2' : ''}`}></i></a>                
            </nav>

            {/* User Avatar */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm cursor-pointer"
            >
                JD
            </motion.div>
        </motion.aside>
    );
}
