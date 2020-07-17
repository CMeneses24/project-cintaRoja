import React,{useState,useEffect} from 'react';
import Layout from './../components/Layout';
import axios from 'axios';

const MyOptions = ({op}) =>{
    const[ fondo, setFondo] = useState(null);
    
    useEffect(() => {
        getFondos();
    },[]);

    const getFondos = () => {
        axios.get('https://bool-cef2d.firebaseio.com/app/-MCPAYN6ovNq_nYKqlrF/opciones%20de%20inversion.json')
        .then(({data,status})=>{
            if (status ===200){
                setFondo(data);
            }
        });
    };

    return(
        <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h3 class="m-0 font-weight-bold text-primary">Tus opciones de Inversion</h3>
        </div>
        <div class="card-body shadow row justify-content-center mb-1">
        <div class=" card-body shadow col-3 shadow rounded border cardss">
            <p class=  "text-l font-weight-bold text-primary text-uppercase mb-1" >Empresa:{fondo?fondo.i1.empresa:"no disp"} </p>
            <p>Monto Solicitado MXN:{fondo?fondo.i1.monto:"no disp"} </p>
            <p>Días a Financiar:{fondo?fondo.i1.dias:"no disp"} </p>
            <p>Tasa Anual:{fondo?fondo.i1.tasa:"no disp"} </p></div>
        <div class=" card-body ml-1 mr-1 col-3 shadow rounded border cardss">
            <p class=  "text-l font-weight-bold text-primary text-uppercase mb-1" >Empresa:{fondo?fondo.i2.empresa:"no disp"} </p>
            <p>Monto Solicitado MXN:{fondo?fondo.i2.monto:"no disp"} </p>
            <p>Días a Financiar:{fondo?fondo.i2.dias:"no disp"} </p>
            <p>Tasa Anual:{fondo?fondo.i2.tasa:"no disp"} </p>
        </div>
        <div class=" card-body col-3 shadow rounded border cardss ">
             <p class=  "text-l font-weight-bold text-primary text-uppercase mb-1" >Empresa:{fondo?fondo.i3.empresa:"no disp"} </p>
            <p>Monto Solicitado MXN:{fondo?fondo.i3.monto:"no disp"} </p>
            <p>Días a Financiar:{fondo?fondo.i3.dias:"no disp"} </p>
            <p>Tasa Anual:{fondo?fondo.i3.tasa:"no disp"} </p>
        </div>
        </div>
        <button type="button" class="btn btn-success">Invertir</button>
        </div>
        );
};

export default MyOptions;