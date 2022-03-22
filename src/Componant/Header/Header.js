import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <nav className="header-menu">
                <img src={Logo} alt="" />
                <div>
                    <a href="/order"> Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                </div>

           </nav>
        </div>
    );
};

export default Header;