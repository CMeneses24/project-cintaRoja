import React,{useState,useEffect} from 'react';
import Layout from './../components/Layout';
import axios from 'axios';

const MyInversion = () =>{
    return(
        <div class="border border-dark rounded col-3 mr-1 text-center">
            <div className="container">
            <h6 className="mt-1">Inversion Rápida</h6>
            <div class="input-group input-group-sm mt-1">
             <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Monto MXN</span>
             </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <select class="custom-select custom-select-sm mt-1">
            <option selected>Selecciona días</option>
            <option value="1">30</option>
            <option value="2">60</option>
            <option value="3">90</option>
            <option value="4">120</option>
            </select>
            <select class="custom-select custom-select-sm mt-1">
            <option selected>Tasa Interes</option>
            <option value="1">17%</option>
            <option value="2">18%</option>
            <option value="3">19%</option>
            <option value="4">20%</option>
            </select>
            <button type="button" class=" btn btn-success mt-1 mb-1">Invertir</button>
            </div>
            </div>
    );
};

export default MyInversion;