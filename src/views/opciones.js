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
        <div class="lt-opciones ">
        <h3>Tus opciones de Inversion</h3>
        <div class="lt-opcion1 ">
            {fondo?fondo.i1.tasa:"no disp"}
        </div>
        <div class="lt-opcion2 ">eqrqerw</div>
        <div class="lt-opcion3 ">eqrqerw</div>
        <div class="lt-flechas">eqrqerw</div>
        <button type="submit" class="btn btn-primary btn-sm">Invertir</button>
        <div class="lt-flecha1">eqrqerw</div>
        </div>
        );
};

export default MyOptions;