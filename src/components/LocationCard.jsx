import { MapPin, Star, Navigation, ArrowRight } from 'lucide-react'
import React from 'react'

const LocationCard = ({ location, onClick }) => {
    return (
        <div onClick={()=>onClick(location)} className='group bg-white dark:bg-slate-900 rounded-3xl overflow-hiddenborder border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer mt-5'>
            <div className='relative h-48 overflow-hidden'>
                <img src={location.image} alt={location.name} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                    <div>
                        <span className='px-2 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase rounded mb-2 inline-block'>{location.type}</span>
                        <h3 className='text-white font-bold text-xl'>{location.name}</h3>
                    </div>
                    <div className='flex items-center gap-1 bg-white/20 backdrop:blur-md px-2 py-1 rounded text-white text-xs'>
                        <Star className='w-3 h-3 fill-yellow-400 stroke-yellow-400' />
                        <span>4.8</span>
                    </div>
                </div>
            </div>

            <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2 text-slate-500 text-sm'>
                        <MapPin className='w-4 h-4' />
                        <span>{location.distance} away</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Navigation className="w-4 h-4" />
                        <span>20 mins</span>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <div className='text-2xl font-black text-vlue-600'>
                            {location.availableSpots} <span className='text-xs font-normal text-slate-400 ml-1'>/ {location.totalSpots} free</span>
                        </div>
                    </div>
                    <button className='rounded-full p-2 gap-2 bg-slate-900  flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors cursor-pointer'>
                        <ArrowRight className='w-5 h-5'/>
                        <span className='font-bold'>Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LocationCard
