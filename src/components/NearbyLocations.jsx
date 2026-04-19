import { Filter, History } from 'lucide-react'
import React from 'react'
import { MOCK_LOCATIONS } from '../constants'
import LocationCard from './LocationCard'

const NearbyLocations = () => {
  return (
    <>
        <div className='flex items-center justify-between '>
            <h1 className='text-4xl font-bold tracking-tight'>Nearby Locations</h1>
            <div className='flex items-center gap-3 '>
                <button className='flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 p-3 gap-2'>
                    <Filter/>
                    <span className='text-sm font-bold text-slate-700 dark:text-slate-200 hidden sm:block'>Filter</span>
                </button>
                <button className='flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 p-3 gap-2 '>
                    <History />
                    <span className='text-sm font-bold text-slate-700 dark:text-slate-200 hidden sm:block'>Recent</span>
                </button>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {MOCK_LOCATIONS.map((location)=>(
                <LocationCard key={location.id} location={location}/>
            ))}
        </div>
    </>  
  )
}

export default NearbyLocations
