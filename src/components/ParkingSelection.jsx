import { ChevronLeft } from 'lucide-react'
import React from 'react'
import Spot from './Spot'

const ParkingSelection = ({ location, onSelectLocation, spots, onSpotSelect, selectedSpotId}) => {
    return (
        <div>
            <div>
                <button onClick={() => onSelectLocation(null)} className='flex items-center gap-2 text-slate-500 hover:text-slate-900dark:hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest cursor-pointer'>
                    <ChevronLeft className='w-5 h-5' /> Go Back
                </button>
            </div>
            <div className='flex items-center mt-5'>
                <h1 className='text-6xl font-bold'>{location.name}</h1>
            </div>

            <div className='bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mt-10'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-bold font-sans tracking-tight'>Level B1 - North Wing</h2>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded bg-emerald-500'/>
                        <span className='font-semibold'>Available</span>
                        <div className='w-3 h-3 rounded bg-slate-800'/>
                        <span className='font-semibold'>Occupied</span>
                        <div className='w-3 h-3 rounded bg-amber-500'/>
                        <span className='font-semibold'>Reserved</span>
                    </div>
                </div>

                <div className='grid grid-cols-5 sm:grid-cols-10 gap-4 mt-5'>
                    {spots.map((spot)=>(
                        <Spot key={spot.id} spot={spot} onClick={onSpotSelect} isSelected={selectedSpotId===spot.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ParkingSelection
