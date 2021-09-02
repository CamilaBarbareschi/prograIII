import React from 'react';
import './Body.css'
import Tarjetas from './Tarjetas/Tarjetas'


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
             <Tarjetas />
             <Tarjetas />
             <Tarjetas />
            </article>
          </section>
        </main>
        </React.Fragment>
      );

}
export default Body;