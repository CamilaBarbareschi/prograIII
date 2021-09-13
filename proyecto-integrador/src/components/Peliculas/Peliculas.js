import React, { Component } from 'react'
import Tarjetas from '../Tarjetas/Tarjetas';
import './Peliculas.css'

class Peliculas extends Component{

constructor(props){
    super(props)
    this.state = {
        peliculas: [],
        cargando: false,
        paginacion: 2,
        urlOriginal: `https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=1`, 
    }
}   

componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=1'
        console.log(url)
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results,
                    cargando: true
                })
            })
        .catch(err => console.log(err));
}

borrarTarjeta(id){
    const resto = this.state.peliculas.filter((peliBorrada) => peliBorrada.id !== id)
    this.setState({
        peliculas: resto,
    })
}

agregar(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=${this.state.paginacion}`)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                paginacion: this.state.paginacion + 1
            })
        })
        .catch(err => console.log(err));
}

filtrar(texto){
   let filtrados =  this.state.peliculas.filter((pelicula)=> pelicula.title.toLowerCase().includes(texto.toLowerCase())
    ); 
    console.log(filtrados);
    
    this.setState({
        peliculas: filtrados,
    })
}

render(){
    return(
        <React.Fragment>
            <section className="topbar">
                <h2>Peliculas populares</h2>
            </section>
          
            <section className="card-container">
            {
                this.state.cargando === false ? (
                    <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                ):( 
                
                <article className={this.props.orientacion}>
            
            {   this.state.peliculas.map((peliculas) => (
                    <Tarjetas key={peliculas.id} id={peliculas.id} img={peliculas.poster_path} title={peliculas.title} descrip={peliculas.overview}  flechaUp={this.props.flechaUp} flechaDown={this.props.flechaDown}
                    estreno={peliculas.release_date} popularidad={peliculas.popularity} idioma={peliculas.original_language} borrar={(peliculaBorrada)=>this.borrarTarjeta(peliculaBorrada)}/>
                ))
            }
                </article>
            )} 
            
            <button className="cargarMas" type="button" onClick={()=>this.agregar()}>Cargar más tarjetas</button>
            
            </section>
        </React.Fragment>
    )
}

}

export default Peliculas
