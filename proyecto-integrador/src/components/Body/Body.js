import React from 'react';
import './Body.css'
import Peliculas from '../Peliculas/Peliculas';


const Body =()=> {
      return (
    <React.Fragment>
        <main >
          <section className="topbar">
            <h2>Peliculas</h2>
          </section>
          <section className="card-container">
          <Peliculas/>
          </section>
        </main>
        </React.Fragment>
      );

}
export default Body;