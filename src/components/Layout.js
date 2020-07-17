import Navbar_pers from './Navbar'
import React from 'react';
import MyFooter from './Footer';

const Layout = ({children}) =>{
    return (
        <div className="container-flex bg-primary">
        <Navbar_pers/>
        <div className="container cont">{children}</div>
        <MyFooter/>
        </div>
    );
};

export default Layout;