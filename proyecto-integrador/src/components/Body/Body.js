import React from 'react';
import './Body.css'
import Tarjetas from './Tarjetas/Tarjetas'


const Body =()=> {
      return (
    <React.Fragment>
        <main >
          <button type="button">Cargar más tarjetas</button>
          <section className="card-container">
            <article className='flexbox'>
              <section className="navigation">
                <div>
                  <i className="fas fa-chevron-left" />
                  <i className="fas fa-chevron-right" />
                </div>
                <i className="far fa-window-close" />
              </section>
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