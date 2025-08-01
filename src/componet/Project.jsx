import React from 'react'
import Header from './Header'

const Project = () => {
  return (
    <div>
      <div className='h-full bg-black px-35 gap-60 text-white' style={{ height: "calc(100vh - 88px)" }}>
        <div>
          <p className='text-[70px] font-bold py-15'>Proj<span>ect</span></p>
        </div>
        <div>
          <a href="https://to-do-list-beta-three-71.vercel.app/" target='_blank'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88GdFo6AHfDsLsQf8iBajmecM6EsHTkdIjw&s' className=' w-120 rounded-3xl hover:rounded-[70px]' />
          </a>
        </div>
        <div className='bg-gray-700 h-35 w-120 rounded-4xl mt-8'>
          <p className='p-5 text-[30px] font-bold'>Todo App</p>

          <p className='px-5 text-[15px] font-bold'>Create a Todo App using React and CSS with<br>
          </br> enhanced functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default Project
