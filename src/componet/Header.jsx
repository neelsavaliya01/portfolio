import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-35 h-22 bg-linear-to-t from-black to-stone-400 text-white text-bold'>
            <div className='font-extrabold font-sans text-[45px]'>
                <Link to="/"><span className='text-red-500'>P</span>ortfolio</Link>
            </div>
            <div className='flex gap-30 text-2xl font-semibold'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skill">Skill</Link>
                <Link to="/project">Project</Link>
                <Link to="/contect">Contect</Link>
            </div>
        </div>
    )
}

export default Header
