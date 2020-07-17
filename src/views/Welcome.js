import axios from 'axios';
import React from 'react';
import Layout from '../components/Layout';

const MyWelcome = () =>{
    return(
        <Layout tittle='Home'>
        <div className="text-white text-center">
        <h2>Bien venido a bool, empieza a invertir para generar rendiemientos con tu dinero de manera fácil y sencilla</h2>
        <h2>¿Qué quieres hacer?</h2>
        <button type="button" class="btn btn-primary btn-lg">Iniciar Sesión</button>
        <button type="button" class="btn btn-secondary btn-lg">Registrarse</button>
        </div>
    </Layout>
    )
};

export default MyWelcome;