import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='flex items-center justify-between px-35 max-[1000px]:px-20 max-[500px]:px-5 h-22 bg-gradient-to-t from-black to-stone-400 text-white font-bold'>
            <div className='font-extrabold font-sans text-[45px] max-[500px]:text-[30px]'>
                <Link to="/" className="text-main">Portfolio</Link>
            </div>

            <div className='block max-[1200px]:hidden flex gap-30 text-2xl font-semibold max-[1300px]:gap-16'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/skill" >Skill</NavLink>
                <NavLink to="/project" >Project</NavLink>
                <NavLink to="/contect" >Contect</NavLink>

            </div>
            <button className='block min-[1200px]:hidden text-2xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>menu</button>


            {
                isMenuOpen && (
                    <div className='bg-white text-black shadow-2xl absolute top-22 left-0 grid gap-4 py-3 w-full z-20 text-center min-[1200px]:hidden' onClick={() => setIsMenuOpen(false)}>
                        <NavLink to="/" className={'hover:underline hover:text-blue-300'}>Home</NavLink>
                        <NavLink to="/about" className={'hover:underline hover:text-blue-300'}>About</NavLink>
                        <NavLink to="/skill" className={'hover:underline hover:text-blue-300'}>Skill</NavLink>
                        <NavLink to="/project" className={'hover:underline hover:text-blue-300'}>Project</NavLink>
                        <NavLink to="/contect" className={'hover:underline hover:text-blue-300'}>Contect</NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Header
