import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="bg-black text-white relative">
            {/* Banner Header */}
            <nav className="flex items-center justify-between p-4">
                <button onClick={toggleDrawer} className="text-white hover:text-gray-300">
                    ☰ Menu
                </button>
                
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="px-2 py-1 text-black rounded"
                    />
                    <button className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200">
                        Search
                    </button>
                </div>
                
                <Link to="/login" className="hover:text-gray-300">Login/Signup</Link>
            </nav>

            {/* Drawer */}
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-75 transition-transform transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-64 bg-gray-900 h-full p-4 space-y-4">
                    <button onClick={toggleDrawer} className="text-white mb-4">Close</button>
                    
                    <Link to="/" onClick={toggleDrawer} className="hover:text-gray-300 block">Home</Link>
                    <Link to="/about" onClick={toggleDrawer} className="hover:text-gray-300 block">About</Link>
                    <Link to="/contact" onClick={toggleDrawer} className="hover:text-gray-300 block">Contact Us</Link>
                    <Link to="/seller" onClick={toggleDrawer} className="hover:text-gray-300 block">Become a Seller</Link>
                </div>
            </div>

            {/* Banner Image */}
            <div className="bannerimage mt-4">
                <img src="banner.jpg" alt="banner" className="w-full h-[80vh] object-cover" />
            </div>
        </div>
    );
}

export default Banner;
