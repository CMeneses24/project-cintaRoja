import Navbar_pers from './Navbar'
import React from 'react';
import MyFooter from './Footer';

const Layout = ({children}) =>{
    return (
        <div className="bg-primary ">
        <Navbar_pers/>
        <div className="">{children}</div>
        <MyFooter/>
        </div>
    );
};

export default Layout;