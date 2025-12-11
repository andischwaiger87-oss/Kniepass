import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children, className = '' }) => {
    return (
        <div className={`relative w-full h-screen overflow-hidden bg-slate-950 text-slate-100 select-none ${className}`}>
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none mix-blend-overlay" />

            {/* Main Content Area */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 w-full h-full flex flex-col"
            >
                {children}
            </motion.main>
        </div>
    );
};

export default Layout;
