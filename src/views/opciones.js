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
        <div class="border border-dark col-9 mr-1 rounded text-center">
        <h3 class="mb-2 ">Tus opciones de Inversion</h3>
        <div class="row justify-content-center mb-1">
        <div class=" card col-3  border-dark rounded border cardss">
            <p>Empresa:{fondo?fondo.i1.empresa:"no disp"} </p>
            <p>Monto Solicitado MXN:{fondo?fondo.i1.monto:"no disp"} </p>
            <p>Días a Financiar:{fondo?fondo.i1.dias:"no disp"} </p>
            <p>Tasa Anual:{fondo?fondo.i1.tasa:"no disp"} </p></div>
        <div class=" card ml-1 mr-1 col-3 border-dark rounded border cardss">
            <p>Empresa:{fondo?fondo.i2.empresa:"no disp"} </p>
            <p>Monto Solicitado MXN:{fondo?fondo.i2.monto:"no disp"} </p>
            <p>Días a Financiar:{fondo?fondo.i2.dias:"no disp"} </p>
            <p>Tasa Anual:{fondo?fondo.i2.tasa:"no disp"} </p>
        </div>
        <div class=" card col-3 border-dark rounded border cardss ">
             <p>Empresa:{fondo?fondo.i3.empresa:"no disp"} </p>
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