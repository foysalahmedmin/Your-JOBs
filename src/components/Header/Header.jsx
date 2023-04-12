import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <header className='w-full fixed top-0 bg-white shadow z-50'>
            <div className="container">
                <nav className='flex justify-between items-center py-3 relative'>
                    <div className="logo">
                        <Link to="/"><h1 className='text-3xl font-bold'><span>Your</span> <span className='text-animation'>JOBs</span></h1></Link>
                    </div>
                    <ul className= {`absolute right-0 top-[4.79rem] p-3 min-h-[calc(100vh-9rem)] md:min-h-[auto] leading-10 md:leading-3 rounded-md bg-white md:static md:flex justify-center items-center gap-7 transition-[right] ${menuActive? 'right-0':'right-[-100%]'}`}>
                        <li className='font-semibold'><ActiveLink to={"/"}>Home</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Statistics"}>Statistics</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Applied"}>Applied Jobs</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Blog"}>Blog</ActiveLink></li>
                        <li><button className='btn-primary md:hidden text-base py-1 px-2'>Start Applying</button></li>
                    </ul>
                    <button className='btn-primary hidden md:block'>Start Applying</button>
                    {
                        menuActive? <button onClick={()=> setMenuActive(false)} className='text-2xl md:hidden'><HiX /></button> : <button onClick={()=> setMenuActive(true)} className='text-2xl md:hidden'><HiMenuAlt3 /></button>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;