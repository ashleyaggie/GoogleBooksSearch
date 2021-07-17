import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="row">
                    <a href="/" className="col s7 brand-logo">Google Books</a>
                    <ul id="nav-mobile" className="col s5 hide-on-med-and-down navbar">
                        <li><a href="/search">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;