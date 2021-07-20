import React from 'react';
import "./style.css";

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="row">
                    <a href="/" className="brand-logo col">Google Books</a>
                    <ul id="nav-mobile" className="col">
                        <li><a href="/search">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;