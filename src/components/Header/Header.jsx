import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className='flex justify-between items-center py-3'>
                    <div className="logo">
                        <Link to ="/"><h1 className='text-3xl font-bold'><span>Your</span> <span className='text-animation'>JOBs</span></h1></Link>
                    </div>
                    <ul className='flex justify-center items-center gap-7'>
                        <li className='font-semibold'><ActiveLink to={"/"}>Home</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Statistics"}>Statistics</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Applied"}>Applied Jobs</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={"/Blog"}>Blog</ActiveLink></li>
                    </ul>
                    <button className='btn-primary'>Start Applying</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;