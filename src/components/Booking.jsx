import { CheckCircle, Clock, CreditCard, QrCode, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react'
import { format } from 'date-fns';

const Booking = ({ spot, onClose, onConfirm }) => {

    if (!spot) return null;

    const [step, setStep] = useState('details');
    const [bookingType, setBookingType] = useState('checkin');
    const [plateNumber, setPlateNumber] = useState('');
    const [arrivalTime, setArrivalTime] = useState(format(new Date(), 'HH:mm'));

    const handleBooking = () => {
        if (!plateNumber) return;
        setStep('confirming');

        setTimeout(() => {
            setStep('success');
            onConfirm({
                plateNumber,
                type: bookingType,
                arrivalTime: bookingType === 'reserve' ? arrivalTime : null
            })
        }, 1500);
    }

    return (
        <AnimatePresence>
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm'
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className='relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/20'
                >
                    <button className='absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors' onClick={onClose}>
                        <X className='w-5 h-5' />
                    </button>

                    {step === 'details' && (
                        <div className='p-8'>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold'>
                                    {spot.label}
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold'>Booking Details</h3>
                                    <p className='text-slate-500 text-sm'>Level B1 - North Wing</p>
                                </div>
                            </div>

                            <div className='flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6'>
                                <button onClick={() => setBookingType('checkin')} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${bookingType === 'checkin' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-500'}`}>
                                    I'm at the mall
                                </button>
                                <button onClick={() => setBookingType('reserve')} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${bookingType === 'reserve' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-500'}`}>
                                    Reserve Spot
                                </button>
                            </div>
                            <div className='space-y-6'>
                                <div>
                                    <label className='block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>
                                        Vehicle Number Plate
                                    </label>
                                    <input type="text" value={plateNumber} onChange={(e) => setPlateNumber(e.target.value.toUpperCase())} placeholder="E.G. KA 01 MH 1234" className='w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-all font-mono text-lg uppercase' />
                                </div>

                                {bookingType === 'reserve' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                    >
                                        <label className='block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>
                                            Arrival Time
                                        </label>
                                        <input type="text" onChange={(e) => setArrivalTime(e.target.value)} className='w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200dark:border-slate-700 focus:border-blue-500 outline-none transition-all font-mono text-lg uppercase' />
                                        <p className='text-[10px] text-amber-500 mt-2 font-bold uppercase tracking-tighter'>
                                            * 15-minute grace period applies to all reservations.
                                        </p>
                                    </motion.div>
                                )}

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700'>
                                        <div className='flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1'>
                                            <Clock className='w-3 h-3' /> Hourly Rate
                                        </div>
                                        <div className='text-xl font-bold'>₹{spot.pricePerHour}</div>
                                    </div>
                                    <div className='p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700'>
                                        <div className='flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1'>
                                            <CreditCard className='w-3 h-3' /> Bay Type
                                        </div>
                                        <div className='text-xl font-bold uppercase truncate'>{spot.type}</div>
                                    </div>
                                </div>

                                <button disabled={!plateNumber} onClick={handleBooking} className={`w-full p-4 rounded-xl font-bold text-lg transition-all shadow-lg ${plateNumber ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30' : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"}`}>Book Now</button>
                            </div>
                        </div>
                    )}

                    {step === 'confirming' && (
                        <div className="p-12 flex flex-col items-center justify-center text-center">
                            <div className="relative w-20 h-20 mb-6">
                                <div className="absolute inset-0 border-4 border-blue-200 rounded-full" />
                                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">
                                {bookingType === 'checkin' ? 'Processing Check-in' : 'Processing Payment'}
                            </h3>
                            <p className="text-slate-500">Connecting to secure terminal...</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className='p-8 text-center'>
                            <div className='w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-autp mb-6'>
                                <CheckCircle className='w-10 h-10' />
                            </div>
                            <h3 className='text-2xl font-bold mb-1'>
                                {bookingType === 'checkin' ? 'Checked In!' : 'Spot Reserved!'}
                            </h3>
                            <p className="text-slate-500 mb-8">
                                {bookingType === 'checkin' ? 'Your parking session has started.' : 'Show this QR at the entrance'}
                            </p>

                            {bookingType === 'reserve' ? (
                                <div className='bg-white rounded-3xl p-6 inline-block shadow-inner border-4 border-slate-100 mb-8'>
                                    <QrCode size={180} />
                                </div>
                            ) : (
                                <div className="mb-8 p-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-4xl border-2 border-dashed border-emerald-200 dark:border-emerald-500/20">
                                    <div className="text-5xl font-black text-emerald-600 mb-2">{spot.label}</div>
                                    <div className="text-sm font-bold text-emerald-600/60 uppercase tracking-widest">Locked In</div>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Booking
