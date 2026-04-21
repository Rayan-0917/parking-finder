import { ChevronLeft, QrCode } from 'lucide-react'
import React from 'react'
import Spot from './Spot'
import { format as formatDate } from 'date-fns';

const ParkingSelection = ({
    location,
    onSelectLocation,
    spots,
    onSpotSelect,
    selectedSpot,
    activeBooking, 
    onLeaveParking
}) => {

    return (
        <div className='max-w-7xl mx-auto'>

            <button
                onClick={() => onSelectLocation(null)}
                className='flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-widest'
            >
                <ChevronLeft className='w-5 h-5' /> Go Back
            </button>

            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold'>
                {location.name}
            </h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>


                <div className='lg:col-span-2 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800'>

                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                        <h2 className='text-lg sm:text-xl font-bold'>
                            Level B1 - North Wing
                        </h2>

                        <div className='flex flex-wrap items-center gap-3 text-sm'>
                            <Legend color="bg-emerald-500" label="Available" />
                            <Legend color="bg-slate-800" label="Occupied" />
                            <Legend color="bg-amber-500" label="Reserved" />
                        </div>
                    </div>

                    <div className='grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3 sm:gap-4 mt-6'>
                        {spots.map((spot) => (
                            <Spot
                                key={spot.id}
                                spot={spot}
                                onClick={onSpotSelect}
                                isSelected={selectedSpot?.id === spot.id}
                            />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <div className="px-6 sm:px-12 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-400 font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-dashed border-slate-300 dark:border-slate-700">
                            Main Entrance Gate
                        </div>
                    </div>
                </div>

                <div className='bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl'>

                    <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                        Your Booking
                    </h2>
                    
                    {activeBooking ? (
                        <div className='sapce-y-6'>
                            <div className='flex items-center gap-5 p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20'>
                                <div className='w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold'>
                                    {activeBooking.spot.label}
                                </div>
                                <div className='flex-1 overflow-hidden'>
                                    <p className='text-xs font-bold text-emerald-600 uppercase tracking-widest'>
                                        {activeBooking.type === 'checkin' ? 'Currently Parked' : 'Reserved'}
                                    </p>
                                    <p className="text-lg font-bold truncate">{activeBooking.location.name}</p>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <div className='flex items-center justify-between text-sm'>
                                    <span className='text-slate-500'>Number Plate</span>
                                    <span className='font-bold'>{activeBooking.plateNumber}</span>
                                </div>

                                {activeBooking.type === 'checkin' ? (
                                    <>
                                        <div className='flex items-center justify-between text-sm'>
                                            <span className='text-slate-500'>Check-in Time</span>
                                            <span className='font-bold'>{formatDate(new Date(activeBooking.startTime), 'HH:mm')}</span>
                                        </div>
                                        <div className='flex justify-between items-center text-sm'>
                                            <span className='text-slate-500'>Hourly Rate</span>
                                            <span className="font-bold">₹{activeBooking.spot.pricePerHour}</span>
                                        </div>
                                        <div className='pt-4 border-t border-slate-100 dark:border-slate-800'>
                                            <button onClick={onLeaveParking} className='w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black text-lg hover:bg-red-600 hover:text-white transition-all active:scale-95'>Leave Parking Now</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex justify-between items-center text-sm'>
                                            <span className='text-slate-500'>Reserved For</span>
                                            <span className="font-bold">₹{activeBooking.arrivalTime}</span>
                                        </div>
                                        <div className='flex justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-inner'>
                                            <QrCode size={120}/>
                                        </div>
                                        <p className="text-[10px] text-center text-amber-500 font-bold uppercase">
                                            Show at entrance within 15 mins
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : selectedSpot ? (
                        <div className='space-y-6'>
                            <div className='flex items-center justify-between gap-5 p-4 bg-blue-500/10 rounded-2xl border border-blue-100 dark:border-blue-500/20'>
                                <div className='w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold'>
                                    {selectedSpot.label}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Selected Spot</p>
                                    <p className="text-lg font-bold">Standard Bay</p>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <div className='flex justify-between items-center text-sm'>
                                    <span className='text-slate-500'>Hourly Rate</span>
                                    <span className="font-bold">₹{selectedSpot.pricePerHour}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500">Base Fare (1hr)</span>
                                    <span className="font-bold">₹{selectedSpot.pricePerHour}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500">Service Fee</span>
                                    <span className="font-bold">₹10</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center text-slate-400 py-10'>
                            Select a spot to continue
                        </div>
                    )
                        
                    }
                </div>
            </div>
        </div>
    )
}

const Legend = ({ color, label }) => (
    <div className='flex items-center gap-2'>
        <div className={`w-3 h-3 rounded ${color}`} />
        <span className='font-medium text-xs sm:text-sm'>{label}</span>
    </div>
)

export default ParkingSelection