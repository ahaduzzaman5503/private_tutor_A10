import React from 'react';
import { Link } from 'react-router-dom';
import PrivateTutorlogo from "../assets/Private Tutor.png";

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-around">
                <div >
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={PrivateTutorlogo} alt="PrivateTutorlogo" className="rounded-xl h-14" /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-6 text-lg font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;