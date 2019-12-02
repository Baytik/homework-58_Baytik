import React from 'react';

const Header = props => {
    return (
        <header className="header">
            <nav className="main-nav">
                <ul>
                    <li><a href="s">Home</a></li>
                    <li><a href="s">About us</a></li>
                    <li><a href="s">Services</a></li>
                    <li><a href="s">Messages</a></li>
                    <li><a href="s">Faq</a></li>
                </ul>
            </nav>
            <button className="modal" onClick={props.purchaseHandler}>Our contact</button>
        </header>
    );
};

export default Header;