import React from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import MyInversion from './inversion';
import MyOptions from './opciones';
import MyEdi from './edi';

const Home = () =>{
    return(
        <Layout title='Home'>
            <div className='container-flex'>
            <div className='row'>
            <div className='col'>
            <MyInversion></MyInversion>
            <MyEdi></MyEdi>
            </div>
            <div className='col'>
                <MyOptions></MyOptions>
                
            </div> 
            </div> 
            </div> 
        </Layout>
    );
};

export default Home;