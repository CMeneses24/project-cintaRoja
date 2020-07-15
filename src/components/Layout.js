import Navbar_pers from './Navbar'
import React from 'react';
import MyFooter from './Footer';

const Layout = ({children}) =>{
    return (
        <div className="container">
        <Navbar_pers/>
        <div className="container">{children}</div>
        <MyFooter/>
        </div>
    );
};

export default Layout;