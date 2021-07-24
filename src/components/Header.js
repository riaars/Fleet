import React from 'react';
import './_Header.css'
import Logo from '../asset/logo.png'

const Header = () => {
    return (
        <section className="header">
           <div className="header-title"> Fleet Portal </div>
           <img src={Logo} alt="app-logo" className="logo"/>
        </section>
    );
};

export default Header;