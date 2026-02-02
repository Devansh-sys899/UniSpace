import { NavLink } from "react-router-dom";
import { useState  } from "react";
import { motion } from "framer-motion";

const navItems = [
    { name: "Dashboard", icon: "bx bx-grid-alt", path: "/manager-dashboard/" },
    { name: "Resources", icon: "bx bx-buildings", path: "/manager-dashboard/resources" },
    { name: "CreateResources", icon: "bx bx-box", path: "/manager-dashboard/create-resources" },
];

const ManagerSidebar = () => {
    const [active, setActive] = useState("Dashboard");

        return (
            <motion.aside
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="min-w-24 bg-surface_dark border-r border-sidebar-border flex flex-col items-center py-8 gap-8"
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-red-300 text-primary-foreground flex items-center justify-center font-bold text-lg"
                >
                    U
                </motion.div>
    
                {/* Navigation Items */}
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.path}
                            className={({ isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                            ${isActive ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
                        }>
                            <i className={`${item.icon} text-2xl`} />
                        </NavLink>
                    ))}
                </nav>
    
                {/* User Avatar */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 mt-56 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                    <i className="bx bx-user text-xl"></i>
                </motion.div>
            </motion.aside>
        );
}

export default ManagerSidebar;