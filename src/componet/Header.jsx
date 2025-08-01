import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const activeClass =
        'underline text-blue-300';
    return (
        <div className='flex items-center justify-between px-35 h-22 bg-gradient-to-t from-black to-stone-400 text-white font-bold'>
            <div className='font-extrabold font-sans text-[45px]'>
                <NavLink to="/" className="text-red-500">Portfolio</NavLink>
            </div>

            <div className='flex gap-30 text-2xl font-semibold'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${isActive ? activeClass : ''} hover:underline hover:text-blue-300`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `${isActive ? activeClass : ''} hover:underline hover:text-blue-300`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/skill"
                    className={({ isActive }) =>
                        `${isActive ? activeClass : ''} hover:underline hover:text-blue-300`
                    }
                >
                    Skill
                </NavLink>
                <NavLink
                    to="/project"
                    className={({ isActive }) =>
                        `${isActive ? activeClass : ''} hover:underline hover:text-blue-300`
                    }
                >
                    Project
                </NavLink>
                <NavLink
                    to="/contect"
                    className={({ isActive }) =>
                        `${isActive ? activeClass : ''} hover:underline hover:text-blue-300`
                    }
                >
                    Contect
                </NavLink>
            </div>
        </div>
    )
}

export default Header
