import { Bell, CarFront, Search, UserCircle } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className='sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-bottom border-slate-200 dark:border-slate-800 px-6 py-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20'>
                        <CarFront className='h-6 w-6' />
                    </div>
                    <span className='text-2xl font-black font-sans tracking-tight text-slate-900 dark:text-white'>
                        PARK<span className='text-blue-600'>SMART</span>
                    </span>
                </div>
                <div className='hidden md:flex items-center flex-1 max-w-md mx-12'>
                    <div className='relative w-full'>
                        <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
                        <input type="text" placeholder='Search malls, airports or cities...' className='w-full pl-12 pr-4 py-2.5 bg-slate-100 dark:bg-slate-900 rounded-full border border-transparent focus:border-blue-500 outline-none transition-all text-sm' />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <button className='rounded-full w-10 h-10 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 relative flex items-center justify-center'>
                        <Bell className='w-6 h-6' />
                        <span className='absolute right-2 top-2 w-2 h-2 rounded-full bg-red-500' />
                    </button>
                    <button className="flex items-center gap-2 p-1.5 pr-4 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <UserCircle className="w-8 h-8 text-slate-400" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200 hidden sm:block">My Account</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
