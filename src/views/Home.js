import React from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import MyInversion from './inversion';
import MyOptions from './opciones';

const Home = () =>{
    return(
        <Layout tittle='Home'>
            <div className='d-flex rox'>
                <MyInversion></MyInversion>
                <MyOptions></MyOptions>
            </div>
        </Layout>
    );
};

export default Home;