import React,{useState,useEffect} from 'react';
import Layout from './../components/Layout';
import axios from 'axios';

const MyInversion = () =>{
    return(
        <div class="lt-grid-container dashb text-center">
        <div class="lt-invertir ">
          <div class="lt-simulador borde">
            <h6>Inversion Rapida</h6>
            <div class="lt-cardsim">
              <div>
                <form>
        <div class="form-group">
          <label for="Input"><h6>Ingresa la cantidad a invertir</h6></label>
          <input type="Input" class="form-control sm" id="Input" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2"><h6>Ingresa los a invertir</h6></label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>30</option>
            <option>60</option>
            <option>30</option>
            <option>120</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Invertir</button>
      </form></div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MyInversion;