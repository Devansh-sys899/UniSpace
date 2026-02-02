import { motion } from "framer-motion";

const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

export default function QuickStats({ label, value, color, iconColor, icon }) {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="bg-background border border-border rounded-xl p-5 flex items-start justify-between"
        >
            {/* Text */}
            <div>
                <p className="text-sm text-muted-foreground font-medium">
                    {label}
                </p>
                <h3 className="text-3xl font-semibold text-foreground mt-2">
                    {value}
                </h3>
            </div>

            {/* Icon */}
            <div className={`p-3 rounded-lg ${color}`}>
            <i className={`bx bx-${icon} text-xl ${iconColor}`} />
        </div>
    </motion.div >
    );
}