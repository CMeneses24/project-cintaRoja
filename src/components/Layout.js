import Navbar_pers from './Navbar'
import React from 'react';
import MyFooter from './Footer';

const Layout = ({children}) =>{
    return (
        <div class="container-flex">
        <div class="row">
            <div className='col-flex'>
            <Navbar_pers/>
            </div>
            <div className="col">
            {children}
            </div>
        </div>
        
        <div class="row">
        <MyFooter/>
        </div>
        </div>
    );
};

export default Layout;