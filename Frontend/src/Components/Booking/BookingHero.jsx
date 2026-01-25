import { motion } from 'framer-motion';
import { MapPin, Clock, AlertCircle, Eye, X } from 'lucide-react';

export default function BookingHero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ boxShadow: '0 20px 40px rgba(66, 85, 255, 0.1)' }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 shadow-md transition-shadow duration-300"
        >
            <div className="max-w-3xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="inline-flex items-center gap-2 mb-3"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                                Live
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.45, duration: 0.3 }}
                            className="text-3xl font-bold text-foreground"
                        >
                            Bio Tech Lab 4
                        </motion.h2>
                    </div>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="text-right"
                    >
                        <p className="text-sm text-muted-foreground mb-1">Status</p>
                        <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                            In Progress
                        </div>
                    </motion.div>
                </div>

                {/* Details Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                >
                    {/* Time Slot */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-foreground/5 border border-border/50"
                    >
                        <Clock className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <p className="text-sm text-muted-foreground font-medium">Time Slot</p>
                            <p className="text-lg font-semibold text-foreground">
                                2:00 PM – 4:00 PM
                            </p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-foreground/5 border border-border/50"
                    >
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <p className="text-sm text-muted-foreground font-medium">Location</p>
                            <p className="text-lg font-semibold text-foreground">
                                Building A, Floor 3
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Alert */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.3 }}
                    className="flex gap-3 mb-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg"
                >
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                        Your session ends at 4:00 PM. Please save your work before then.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="flex gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
                    >
                        <Eye className="w-4 h-4" />
                        View Details
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 bg-destructive/10 text-destructive px-6 py-3 rounded-lg font-semibold hover:bg-destructive/20 transition-colors duration-200 border border-destructive/20"
                    >
                        <X className="w-4 h-4" />
                        Cancel Booking
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}
