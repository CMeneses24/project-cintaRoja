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
        <div class="col-xl col-md mb-4 mt-3">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class=" text-l font-weight-bold text-primary text-uppercase mb-1">Información del Inversor</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Tu Saldo :  {ces?ces.fondos:"no disp"}</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
       
        );
};

export default MyEdi;