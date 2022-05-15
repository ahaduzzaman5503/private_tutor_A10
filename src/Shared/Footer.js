import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className="footer p-10 bg-base-300 text-base-content rounded-xl">
                <div>
                    <span className="footer-title">Subjects</span> 
                    <Link to="/" className="link link-hover">General Math 10</Link> 
                    <Link to="/" className="link link-hover">General Math 9</Link> 
                    <Link to="/" className="link link-hover">General Math 8</Link> 
                    <Link to="/" className="link link-hover">General Math 7</Link>
                </div> 
                <div>
                    <span className="footer-title">Classes</span> 
                    <Link to="/" className="link link-hover">Class Ten</Link> 
                    <Link to="/" className="link link-hover">Class Nine</Link> 
                    <Link to="/" className="link link-hover">Class Eight</Link> 
                    <Link to="/" className="link link-hover">Class Seven</Link>
                </div> 
                <div>
                    <span className="footer-title">Pages</span> 
                    <Link to="/home" className="link link-hover">Home</Link> 
                    <Link to="/services" className="link link-hover">Services</Link> 
                    <Link to="/blog" className="link link-hover">Blog</Link> 
                    <Link to="/aboutus" className="link link-hover">About Us</Link>
                </div> 
                
                <div>
                    <span className="footer-title">Get Update News</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;