import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const StoryModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-slate-900 border border-slate-700/50 w-full max-w-4xl max-h-full rounded-3xl overflow-hidden shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Image / Gradient Area */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} mix-blend-multiply z-10`} />
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-50 backdrop-blur-sm"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="absolute bottom-6 left-6 md:left-12 z-30">
                            <span className="text-8xl font-black text-white/10 absolute -top-16 -left-4 select-none pointer-events-none">{item.year}</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white relative leading-none shadow-black drop-shadow-lg">{item.title}</h2>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 overflow-y-auto max-h-[60vh]">
                        <h3 className="text-2xl text-amber-500 mb-6">{item.subtitle}</h3>
                        <p className="text-xl text-slate-200 leading-relaxed whitespace-pre-line">
                            {item.details}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default StoryModal;
