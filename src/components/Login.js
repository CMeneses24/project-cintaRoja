import React, {useState, useEffect, setError} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const history = useHistory();
	const [username , setUsername] = useState('');
	const [password , setPassword] = useState('');
	
	const verifyPassword = () => {
        axios.get('https://bool-cef2d.firebaseio.com/app/-MCPB3H_97GoY-zMkSUh/Usuarios.json')
        .then(({data, status}) => {
            if (data !== null){
				for (var d in data){
						if(data[d]['nombre'] == username && data[d]['contraseña'] == password){
						console.log('yeii');
						loggedIn();
						}else{
							loggedInFailed();
						}
				}
            } else {
				loggedInFailed();
                setError('Usuario Incorrecto');
            }
        })
        .catch(({response}) => {
            setError(response);
        });
	}; 
	
	const loggedInFailed = () => {
		history.push("/Fail");
	}; 
	
	const loggedIn = () => {
		history.push("/Home");
	}; 

    return(
	<div class="bg-gradient-primary container">
    
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input type="username" class="form-control form-control-user" onChange={(event) => {
            setUsername(event.target.value);
        }} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username..."/>
                    </div>
                    <div class="form-group">
                      <input type="password" onChange={(event) => {
            setPassword(event.target.value);
        }}  class="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
					<div>
        		</div>
                    <span onClick={verifyPassword} class="btn btn-primary btn-user btn-block">
                      Login
                    </span>
                    <a href="index.html" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a>
                  </form>
                  <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
    );
};

export default Login;