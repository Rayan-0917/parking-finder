import React from 'react'

const LocationCard = ({location}) => {
  return (
    <div className='group bg-white dark:bg-slate-900 rounded-3xl overflow-hiddenborder border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer mt-5'>
        <div className='relative h-48 overflow-hidden'>
            <img src={location.image} alt={location.name} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'/>
            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                <div>
                    <span className='px-2 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase rounded mb-2 inline-block'>{location.type}</span>
                    <h3 className='text-white font-bold text-xl'>{location.name}</h3>
                </div>
                <div className='flex items-center gap-1 bg-white/20 backdrop:blur-md px-2 py-1 rounded text-white text-xs'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationCard
