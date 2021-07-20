import React from 'react';

const jumbotronStyle = {
    paddingBottom: '50px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

function Header() {
    return (
        <div className="card-panel grey lighten-2" style={jumbotronStyle}>
            <div className="container center">
                <h1>(React) Google Books Search</h1>
                <h4>Search for and Save Books of Interest</h4>
            </div>
        </div>
    )
}

export default Header;