import React, { Component } from 'react'
import Tarjetas from '../Tarjetas/Tarjetas';

class Peliculas extends Component{

constructor(){
    super()
    this.state = {
        peliculas: [],
        cargando: false,
    }
}   

componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=1'
    console.log(url)
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
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
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=${1}`
    console.log(url)
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
            this.setState({
                peliculas: this.state.peliculas.concat(data.results)
            })
        })
        .catch(err => console.log(err));
}

render(){
    return(
        <React.Fragment>
         {this.state.cargando === false ? (<iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>) : ( <article className='contenedor-tarjetas'>
         {this.state.peliculas.map((peliculas) => (
            <Tarjetas key={peliculas.id} id={peliculas.id} img={peliculas.poster_path} title={peliculas.title} descrip={peliculas.overview} estreno={peliculas.release_date} popularidad={peliculas.popularity} idioma={peliculas.original_language} borrar={(peliculaBorrada)=>this.borrarTarjeta(peliculaBorrada)}/>
        ))}
        </article>
        )} 
        <button className="cargarMas" type="button" onClick={()=>this.agregar()}>Cargar más tarjetas</button>
        </React.Fragment>
    )
}

}

export default Peliculas
