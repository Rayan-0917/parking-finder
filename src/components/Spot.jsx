import { Accessibility, Car, Zap } from 'lucide-react';
import { motion, scale } from 'motion/react';
import React from 'react'

const Spot = ({spot, onClick, isSelected}) => {

    const getStatusColour=(status)=>{
        switch(status){
            case 'available': return 'bg-emerald-500/10 border-emerald-500 hover:bg-emerald-500/20';
            case 'occupied': return 'bg-slate-800 border-slate-700 cursor-not-allowed';
            case 'reserved': return 'bg-amber-500/10 border-amber-500 hover:bg-amber-500/20';
            case 'valet': return 'bg-indigo-500/10 border-indigo-500 hover:bg-indigo-500/20';
            default: return 'bg-slate-100 border-slate-300'
        }
    }

    const getIcon=()=>{
        if(spot.type==='handicap') return <Accessibility className='w-4 h-4'/>
        if(spot.type==='ev') return <Zap className='w-4 h-4'/>
        return null;
    }

  return (
    <motion.button
        whileHover={spot.status === 'available' ? {scale: 1.05} : {}}
        whileTap={spot.status === 'available' ? {scale: 0.95} : {}}
        onClick={()=>spot.status!== 'occupied' && onClick(spot)}
        className={`relative flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all duration-200 aspect-square w-full ${getStatusColour(spot.status)} ${isSelected && "ring-2 ring-blue-500 border-blue-500 shadow-lg shadow-blue-500/20 z-10"} ${spot.status === 'occupied' ? "text-slate-500" : "text-slate-800 dark:text-slate-200"}`}
        disabled={spot.status === 'occupied'}
    >
        <div className='absolute top-1 right-1 opacity-40'>
            {getIcon()}    
        </div>   
        {spot.status==='occupied' ? (
            <Car className='w-5 h-5'/>
        ) : (
            <span className='font-mono text-xs font-bold'>{spot.label}</span>
        )}
    </motion.button>
  )
}

export default Spot
