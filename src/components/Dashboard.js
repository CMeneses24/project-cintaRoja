import React from 'react';

const Db = () =>{
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
    <div class="lt-opciones ">
      <h3>Tus opciones de Inversion</h3>
      <div class="lt-opcion1 "><h3>Tus Opciones de Inversion</h3></div>
      <div class="lt-opcion2 ">eqrqerw</div>
      <div class="lt-opcion3 ">eqrqerw</div>
      <div class="lt-flechas">eqrqerw</div>
      <button type="submit" class="btn btn-primary btn-sm">Invertir</button>
      <div class="lt-flecha1">eqrqerw</div>
    </div>
  </div>
  <div class="lt-inversiones-pendndientes borde">
    <div class="lt-titulo"><h6>Historial Inversiones</h6></div>
    <div class="lt-invesion-1">Folio 001, Estatus de inversion: 15 dias para terminar</div>
    <div class="lt-inversion2">Folio 001, Estatus de inversion: 15 dias para terminar</div>
    <div class="lt-inversion3">Folio 001, Estatus de inversion: Terminada</div>
  </div>
  <div class="lt-fondos borde">
    <div class="lt-titfon"><h6> Fondo de Inversion</h6></div>
    <div class="lt-mensaje">Gracias a tus inversiones realizadas tienes: $5,000.00 mxn</div>
  </div>
</div>
    );
};

export default Db;