import Navbar from '@/components/navbar'
import React from 'react'
import Sidebar from '@/components/sidebar'


const Figma = () => {
  return (
    <div className='flex'>
      <div className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
 <Sidebar/>
      </div>
        <Navbar />
    </div>
  )
}

export default Figma

        

