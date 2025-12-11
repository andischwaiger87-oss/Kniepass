import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { historyData } from '../data/history';
import { ChevronRight } from 'lucide-react';

const TimelineItem = ({ item, index, onSelect }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-[85vw] md:w-[700px] h-full flex flex-col justify-center items-center p-4 md:p-8 snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div
                className="w-full h-[70vh] relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-700/50"
                onClick={() => onSelect(item)}
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className={`absolute inset - 0 bg - gradient - to - t ${item.color} mix - blend - multiply opacity - 90`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-start mb-auto">
                        <span className="text-7xl font-black text-white/20 drop-shadow-lg">
                            {item.year}
                        </span>
                        <div className="p-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
                            <item.icon className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-1 w-20 bg-amber-500 mb-6 rounded-full" />
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        <p className="text-xl text-amber-400 mb-4 font-medium tracking-wide">{item.subtitle}</p>

                        <p className="text-slate-200 text-lg leading-relaxed line-clamp-3 mb-6 max-w-lg">
                            {item.description}
                        </p>

                        <div className="flex items-center text-white group-hover:text-amber-400 transition-colors">
                            <span className="uppercase tracking-widest text-sm font-bold">Entdecken</span>
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = ({ onSelectEvent }) => {
    const scrollRef = useRef(null);

    return (
        <div className="w-full h-full overflow-x-auto flex items-center snap-x snap-mandatory px-[10vw] no-scrollbar" ref={scrollRef}>
            {historyData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} onSelect={onSelectEvent} />
            ))}
            {/* Padding at the end */}
            <div className="w-[10vw] flex-shrink-0" />
        </div>
    );
};

export default Timeline;
