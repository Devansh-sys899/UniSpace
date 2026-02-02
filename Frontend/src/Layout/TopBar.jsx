import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function TopBar({ search, setSearch }) {
    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-background px-6 py-6 flex items-center justify-between"
        >
            <div className="flex-1">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-foreground"
                >
                    UniSpace
                </motion.h1>
            </div>

            {/* Search Input */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 max-w-md mx-4"
            >
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-secondary-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    />
                </div>
            </motion.div>

            {/* User Avatar Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
                D
            </motion.button>
        </motion.header>
    );
}
