import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AttractScreen = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full relative z-20 p-8 text-center" onClick={onStart}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-8"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-2xl">
                    FESTUNG<br />KNIEPASS
                </h1>
                <div className="h-2 w-32 bg-amber-500 mx-auto mt-6 rounded-full" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light tracking-wide mb-16"
            >
                Erlebe 400 Jahre Geschichte.
                <br />
                Vom 30-jährigen Krieg bis heute.
            </motion.p>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20"
            >
                <button className="flex flex-col items-center text-amber-400/80 hover:text-amber-300 transition-colors">
                    <span className="uppercase tracking-[0.3em] text-sm mb-2">Berühren zum Starten</span>
                    <ChevronRight className="w-12 h-12 rotate-90" />
                </button>
            </motion.div>
        </div>
    );
};

export default AttractScreen;
