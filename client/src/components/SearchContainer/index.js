import React from 'react';
import "./style.css";

function SearchContainer({ children }) {
    return (
        <div>
            <form className="col s8">
                {children}
            </form>
            
        </div>
    )
}

export default SearchContainer;