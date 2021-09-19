import React, {Component} from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Peliculas from './Components/Peliculas/Peliculas'
import Footer from  './Components/Footer/Footer'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      cargando: false,
      paginacion: 2,
      urlOriginal: `https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=1`, 
      orientacion: "card-container-row", 
      flechaDown: "fas fa-chevron-right", 
      flechaUp: "fas fa-chevron-left",
      value: '',
      resulBusqueda: true
    }
  }

  componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=1'
    fetch(url) 
      .then((respuesta) => respuesta.json())
      .then((data) =>{
          this.setState({
            peliculas: data.results, 
            cargando: true
          })
      })
      .catch(err => console.log(err))
  }

  
  agregar(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3db55afa4c61183073e97b76636daba5&language=en-US&page=${this.state.paginacion}`)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          paginacion: this.state.paginacion + 2
        })
      }).catch(err => console.log(err));
  } 

  cambiarOrientacion(orientacion){
    this.setState({
      orientacion: orientacion, 
      flechaUp: (this.state.flechaUp === "fas fa-chevron-left") ? ("fas fa-chevron-up") : ("fas fa-chevron-left"),
      flechaDown: (this.state.flechaDown === "fas fa-chevron-right") ? ("fas fa-chevron-down") : ("fas fa-chevron-right")
    })

  } 

  filtrar(texto){
    let filtrados =  this.state.peliculasOriginales.filter((pelicula)=> pelicula.title.toLowerCase().includes(texto.toLowerCase())
    ); 
    if (filtrados.length !== 0) {
      this.setState({
        peliculas: filtrados,
      })
    } else {
      this.setState({
        resulBusqueda: false,
      })
    }
  } 
 
  borrarTarjeta(id){
    const resto = this.state.peliculas.filter((peliBorrada) => peliBorrada.id !== id)
    this.setState({
      peliculas: resto,
    })
  }

  render(){
    
      return (
        <div id="wrapper">
          <Header cambiarOrientacion={(orientacion)=>this.cambiarOrientacion(orientacion)} filtrar={(params)=>this.filtrar(params)}/>
          <Peliculas resulBusqueda={this.state.resulBusqueda} borrar={(id)=> this.borrarTarjeta(id)}  agregar={()=> this.agregar()} cargando={this.state.cargando} peliculas={this.state.peliculas} orientacion={this.state.orientacion} flechaUp={this.state.flechaUp} flechaDown={this.state.flechaDown}/>
          <Footer/>
        </div>
      );
  }
}
  
export default App;