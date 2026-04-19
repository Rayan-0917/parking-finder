import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NearbyLocations from './components/NearbyLocations'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30'>
      <Header/>
      <div className='pl-20 pr-20 pt-10'>
        <Hero/>
        <NearbyLocations/>
      </div>
    </div>
  )
}

export default App
