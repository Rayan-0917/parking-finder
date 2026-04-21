import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NearbyLocations from './components/NearbyLocations'
import ParkingSelection from './components/ParkingSelection'
import { MOCK_LOCATIONS } from './constants'
import Booking from './components/Booking'

const App = () => {
  const [locations, setLocations]=useState(MOCK_LOCATIONS);
  const [selectedLocation, setSelectedLocation]=useState(null); 
  const [selectedSpot, setSelectedSpot]=useState(null);
  const [activeBooking, setActiveBooking]=useState(null);

  const handleConfirmBooking=(bookingData)=>{
    const {plateNumber, type, arrivalTime}=bookingData
    
    const newBooking={...bookingData, spot: selectedSpot, location: selectedLocation, startTime: new Date().toISOString(), id: `BK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`}

    setActiveBooking(newBooking);

    const updatedLocations=locations.map(loc=>{
      if(loc.id===selectedLocation.id){
        return {
          ...loc,
          availableSpots: availableSpots-1,
          spots: loc.spots.map(s=>
            s.id===selectedSpot.id ? {
              ...s,
              status: type === 'checkin' ? 'occupied' : 'reserved',
              occupiedBy: {
                plateNumber, startTime: newBooking.startTime, arrivalTime: arrivalTime || null
              }
            }
            : s
          )
        }
      }
      return loc;
    })
    setLocations(updatedLocations);
  }

  const handleLeaveParking=()=>{
    if(!activeBooking) return;

    const start=new Date(activeBooking.startTime);
    const end=new Date();
    const durationHours=Math.max(1, Math.ceil((end-start)/(1000*60*60)));
    const totalCost=durationHours * activeBooking.spot.pricePerHour;

    alert(`Parking Session Ended.\nDuration: ${durationHours} hour(s)\nTotal Cost: ₹${totalCost}\n\nThank you for using ParkSmart!`);

    const updatedLocations=locations.map(loc=>{
      if(loc.id===activeBooking.location.id){
        return {
          ...loc,
          availableSpots: availableSpots+1,
          spots: loc.spots.map(s=>
            s.id===activeBooking.spot.id ? {...s, status: 'available', occupiedBy: null} : s
          )
        }
      }
      return loc;
    })
    setLocations(updatedLocations);

    if (selectedLocation && selectedLocation.id === activeBooking.location.id) {
      setSelectedLocation(updatedLocations.find(l => l.id === activeBooking.location.id));
    }

    setActiveBooking(null);
  }
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
          <ParkingSelection location={selectedLocation} onSelectLocation={setSelectedLocation} spots={selectedLocation.spots} onSpotSelect={setSelectedSpot} selectedSpot={selectedSpot} activeBooking={activeBooking} onLeaveParking={handleLeaveParking}/>
        )}
      </div>
      <Booking spot={selectedSpot} onClose={()=>setSelectedSpot(null)} onConfirm={handleConfirmBooking}/>
    </div>
  )
}

export default App
