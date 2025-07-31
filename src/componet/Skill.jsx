import React from 'react'
import Header from './Header'

const Skill = () => {
  return (
    <div>
      <Header />

      <div className='bg-black h-full px-35' style={{ height: "calc(100vh - 88px)" }}>
        <div>
          <p className='text-white text-[70px] font-bold py-15'>Ski<span className='text-red-500'>ll</span></p>
        </div>
        <div className='flex flex-wrap gap-50 py-10'>
          <img src='https://sahilbhai.vercel.app/images/html.png' className='h-30 w-30  border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
          <img src="https://sahilbhai.vercel.app/images/css.png" className='h-30 w-30 border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
          <img src="https://sahilbhai.vercel.app/images/js.png" className='h-30 w-30 border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
          <img src="https://sahilbhai.vercel.app/images/react.png" className='h-30 w-30 border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
          <img src="https://sahilbhai.vercel.app/images/tailwind.png" className='h-30 w-30 border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
          <img src="https://sahilbhai.vercel.app/images/bootstrap.png" className='h-30 w-30 border-amber-50 box-content size-32 border-4 p-4 rounded-2xl shadow-xl shadow-yellow-500' />
        </div>
      </div>
    </div>
  )
}

export default Skill
