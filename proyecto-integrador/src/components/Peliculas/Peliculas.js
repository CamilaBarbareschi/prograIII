import React from 'react'
import Tarjetas from '../Tarjetas/Tarjetas';
import './Peliculas.css'


const Peliculas = (props) => {
    let {peliculas: peliculas, agregar: agregar, cargando: cargando, orientacion: orientacion, flechaUp: flechaUp, flechaDown: flechaDown} = props; 
    return(

        <React.Fragment>        
            <section className="topbar">
                <h2>Peliculas populares</h2>
            </section>
          
            <section className="card-container">
                { 
                    cargando === false ? (
                        <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    ):( 
                        props.resulBusqueda === false ? (
                            <p className="resulBusqueda"> No hemos encontrado resultados para su busqueda. Intente con otro nombre :)</p>
                        ):(
                        <article className={orientacion}> 
                
                        {peliculas.map((peliculas) => (<Tarjetas key={peliculas.id} id={peliculas.id} img={peliculas.poster_path} title={peliculas.title} descrip={peliculas.overview}  flechaUp={flechaUp} flechaDown={flechaDown} estreno={peliculas.release_date} popularidad={peliculas.popularity} idioma={peliculas.original_language} borrar={()=> props.borrar(peliculas.id)}  /> ))}
                        
                        </article>
                        )
                    )    
                }  
                
                <button className="cargarMas" type="button" onClick={()=> agregar()}>Cargar más tarjetas</button> 
            </section>

        </React.Fragment>
    )
}

export default Peliculas
