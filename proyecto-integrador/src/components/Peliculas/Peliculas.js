import React, { Component } from 'react'
import Tarjetas from '../Tarjetas/Tarjetas';

class Peliculas extends Component{

constructor(){
    super()
    this.state = {
        peliculas: []
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
                peliculas: data.results
            })
        })
        .catch(err => console.log(err));
}

render(){
    return(
        <>
        {this.state.peliculas.map((peliculas) => (
            <Tarjetas key={peliculas.id} img={peliculas.poster_path} title={peliculas.title} descrip={peliculas.overview} estreno={peliculas.release_date} popularidad={peliculas.popularity} idioma={peliculas.original_language} />
        ))}
        </>
    )
}

}

export default Peliculas
