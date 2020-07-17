import React from 'react';
import Layout from './../components/Layout';
import MyInversion from './inversion';
import MyOptions from './opciones';
import MyEdi from './edi';

const Home = () =>{
    return(
        <Layout tittle='Home'>
            <div className="d-flex">
                <MyInversion></MyInversion>
                <MyOptions></MyOptions>
            </div>
            <div>
                <MyEdi></MyEdi>
            </div>
        </Layout>
    );
};

export default Home;