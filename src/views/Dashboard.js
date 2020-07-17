import React,{useState,useEffect} from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import Db from './../components/Dashboard';

const MyDb = () =>{
    const[ fondo, getFondo] = useState(null);

    useEffect(() => {
        getFondo();
    },[]);

    const getFondos = () => {
        axios.get('https://bool-cef2d.firebaseio.com/app/-MCPB3H_97GoY-zMkSUh/Usuarios/-MCPBLnwU0qzGSyyD_nq/cesario/fondos.json')
        .then(({data,status})=>{
            if (status ===200){
                getFondos(data);
            }
        });
    };

    return(
        <Db></Db>  
    );
};

export default MyDb;