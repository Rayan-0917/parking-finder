import React, { useEffect, useState } from 'react'
import { ChevronRight, ChevronLeft, Shield, Zap, QrCode, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    id: 1,
    title: "Find Your Perfect Spot",
    description: "Browse real-time availability across malls, airports, and city centers with our interactive live grid.",
    image: "https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    badge: "Live Availability"
  },
  {
    id: 2,
    title: "Reservation Made Simple",
    description: "Pre-book your spot before you even leave home. Guaranteed space waiting for your arrival.",
    image: "https://images.unsplash.com/photo-1625959518941-99decaa7d878?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGdvb2dsZSUyMG1hcHxlbnwwfHwwfHx8MA%3D%3D",
    icon: <QrCode className="w-6 h-6 text-emerald-400" />,
    badge: "Easy Booking"
  },
  {
    id: 3,
    title: "Premium Valet Service",
    description: "Hand over the keys to our professional drivers. Safe, insured, and ready when you are.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBTIN5OHL-eVQegq43fEg8b7_9V901uOMQw&s",
    icon: <Shield className="w-6 h-6 text-amber-400" />,
    badge: "Valet Service"
  },
  {
    id: 4,
    title: "Touchless Entry/Exit",
    description: "Use your personal QR code for a seamless, ticketless experience. No more lost paper slips.",
    image: "https://images.unsplash.com/photo-1648823161626-0e839927401b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <MapPin className="w-6 h-6 text-indigo-400" />,
    badge: "Smart Access"
  }
];

const Hero = () => {
    const [current, setCurrent]=useState(0);

    useEffect(()=>{
        const timer=setInterval(() => {
           setCurrent((prev)=>(prev+1)%SLIDES.length); 
        }, 5000);
        return ()=>clearInterval(timer);
    }, []);


    const nextSlide=()=>setCurrent((prev)=>(prev+1)%SLIDES.length);
    const prevSlide=()=>setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className='relative w-full h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden group'>
      <AnimatePresence mode='wait'>
        <motion.div key={current} initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0">
            <img src={SLIDES[current].image} alt={SLIDES[current].title} className='w-full h-full object-cover transition-transform duration-10000 hover:scale-110' />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className='absolute inset-0 p-8 md:p-16 flex flex-col justify-end'>
        <div className='max-w-3xl'>
            <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6"
            >
                {SLIDES[current].icon}
                {SLIDES[current].badge}
            </motion.div>
            <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
                {SLIDES[current].title}
            </motion.h1>
            <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
            >
                {SLIDES[current].description}
            </motion.p>
            <motion.div
            key={`actions-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4">
                <button className='px-8 py-4 bg-blue-600 rounded-xl flex items-center justify-center font-bold hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95'>
                    Book Now
                </button>
            </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default Hero
