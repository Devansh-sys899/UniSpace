import { motion } from 'framer-motion';
import {
    LayoutGrid,
    Compass,
    BookOpen,
    Heart,
    Bell,
    Settings,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
    { icon: LayoutGrid, label: 'Dashboard', id: 'dashboard' },
    { icon: Compass, label: 'Browse Resources', id: 'browse' },
    { icon: BookOpen, label: 'My Bookings', id: 'bookings' },
    { icon: Heart, label: 'Favorites', id: 'favorites' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Settings, label: 'Settings', id: 'settings' },
];

export default function Sidebar() {
    const [active, setActive] = useState('dashboard');

    return (
        <motion.aside
            initial={{ x: -80 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-8 gap-8"
        >
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg"
            >
                U
            </motion.div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-6 flex-1">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title={item.label}
                            className={cn(
                                'w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 group relative',
                                isActive
                                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                            )}
                        >
                            <Icon className="w-6 h-6" />
                            {/* Tooltip */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-16 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100"
                            >
                                {item.label}
                            </motion.div>
                        </motion.button>
                    );
                })}
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
