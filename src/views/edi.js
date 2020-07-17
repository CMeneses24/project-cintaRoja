import React,{useState,useEffect} from 'react';
import axios from 'axios';

const MyEdi = ({cs}) =>{
    const[ ces, setces] = useState(null);
    
    useEffect(() => {
        getces();
    },[]);

    const getces= () => {
        axios.get('https://bool-cef2d.firebaseio.com/app/-MCPB3H_97GoY-zMkSUh/Usuarios/-MCQkkzChFz5gICrM8kl/cesar.json')
        .then(({data,status})=>{
            if (status ===200){
                setces(data);
            }
        });
    };

    return(
        <div class="border border-dark  mt-1 mr-1 rounded text-center">
        <h3 class="mb-2 text-center">Información del Inversor</h3>
        
        <div class="row justify-content-center mb-1">
        <div class="col-5  border-dark border-right">
            <p>Días a Financiar:{ces?ces.fondos:"no disp"} </p>
            <p>monto:{ces?ces.monto:"no disp"} </p></div>

        <div class=" ml-1 mr-1 col-5 border-dark  border-right">
            <h1>Tienes un saldo por:{ces?ces.fondos:"no disp"} </h1>
        </div>
        </div>
        
        </div>
        );
};

export default MyEdi;