import { motion } from 'framer-motion';
import { Clock, Calendar, Zap } from 'lucide-react';

const stats = [
    {
        label: 'Active Booking',
        value: '1',
        icon: Clock,
        color: 'bg-blue-50 dark:bg-blue-950',
        iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
        label: 'Upcoming Booking',
        value: '2',
        icon: Calendar,
        color: 'bg-purple-50 dark:bg-purple-950',
        iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
        label: 'Total Hours Used',
        value: '24.5',
        icon: Zap,
        color: 'bg-amber-50 dark:bg-amber-950',
        iconColor: 'text-amber-600 dark:text-amber-400',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

export default function QuickStats() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </p>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="text-3xl font-bold text-foreground mt-2"
                                >
                                    {stat.value}
                                </motion.h3>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
