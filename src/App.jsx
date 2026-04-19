import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NearbyLocations from './components/NearbyLocations'
import ParkingSelection from './components/ParkingSelection'

const App = () => {
  const [selectedLocation, setSelectedLocation]=useState(null); 
  const [selectedSpot, setSelectedSpot]=useState(null);
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30'>
      <Header/>
      <div className='pl-20 pr-20 pt-10'>
        {!selectedLocation ? (
          <>
            <Hero/>
            <NearbyLocations onSelectLocation={setSelectedLocation}/>
          </>
        ) : (
          <ParkingSelection location={selectedLocation} onSelectLocation={setSelectedLocation} spots={selectedLocation.spots} onSpotSelect={setSelectedSpot} selectedSpotId={selectedSpot?.id}/>
        )}
      </div>
    </div>
  )
}

export default App
