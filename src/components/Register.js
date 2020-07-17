import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [ user, setUser ] = useState({
        nombre:'',
        contraseña:'',
        fondos: 0,
        mail: '',
    });
    const history = useHistory();

    const registerUser = () => {
     
	}; 
    const goLogin = () => {
        history.push("/Login");
    }
    const handleChange = (event) => {
            switch(event.target.id) {
                case 'nombre':
                    setUser({
                        ...user,
                        nombre: event.target.value,
                    });
                break;
                case 'mail':
                    setUser({
                        ...user,
                        mail: event.target.value,
                    });
                break;
                case 'fondos':
                    setUser({
                        ...user,
                        fondos: parseInt(event.target.value),
                    });
                break;
                case 'contraseña':
                    setUser({
                        ...user,
                        contraseña: event.target.value,
                    });
                break;
            }
        };
    
        const createUser = () => {
            if(true
            ) {
                axios.post('https://bool-cef2d.firebaseio.com/app/-MCPB3H_97GoY-zMkSUh/Usuarios.json', user)
                .then(({data})=>{
                    if(data != null){
                        history.push(`/Login`);
                    } else {
                        alert('Algo salio mal');
                    }
                })
                .catch(()=>{
                    alert('Hay algo mal fuera de tus manos.');
                });
            } else {
                alert('No has llenado todos los campos o has llenado de forma incorrecta un campo.');
            }
        
        }
    return(
    <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" id="nombre" 
                    value={user.nombre} onChange={handleChange}
                    placeholder="Username"/>
                  </div>
                  <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" id="fondos" placeholder="Fondos"
                    value={user.fondos} onChange={handleChange}/>
                  </div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-user" id="mail" placeholder="Email Address"
                value={user.mail} onChange={handleChange}
                    />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" id="contraseña" placeholder="Password"
                     value={user.contraseña} onChange={handleChange}/>
                  </div>
                  <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"/>
                  </div>
                </div>
                <span onClick={createUser} class="btn btn-primary btn-user btn-block">
                  Register Account
                </span>
                <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
              </form>
              <div class="text-center">
                <a class="small" href="forgot-password.html">Forgot Password?</a>
              </div>
              <div class="text-center">
                <a class="small" href="" >Already have an account? Login!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    );
};

export default Register;