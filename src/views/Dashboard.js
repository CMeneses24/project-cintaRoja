import React from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import Db from './../components/Dashboard';

const MyDb = () =>{
    return(
        <Layout >
            <Db></Db>
        </Layout>  
    );
};

export default MyDb;