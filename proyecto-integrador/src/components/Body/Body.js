import React from './node_modules/react';
import './Body.css'
import Peliculas from '../Peliculas/Peliculas';


const Body =()=> {
      return (
    <React.Fragment>
        <main >
          <section className="topbar">
            <h2>Peliculas</h2>
            <button type="button">Cargar más tarjetas</button>
          </section>
          <section className="card-container">
            <article className='contenedor-tarjetas'>
             <Peliculas/>
            </article>
          </section>
        </main>
        </React.Fragment>
      );

}
export default Body;