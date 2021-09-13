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
      urlOriginal: `https://api.themoviedb.org/3/movie/popular?api_key=273b9407308bfcdeef52576c44acfda9&language=en-US&page=1`, 
      orientacion: "card-container-row", 
      flechaDown: "fas fa-chevron-right", 
      flechaUp: "fas fa-chevron-left",
      value: ''
    }
  }
  
  componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=273b9407308bfcdeef52576c44acfda9&language=en-US&page=1'
    console.log(url)
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.results)
        this.setState({
          peliculas: data.results,
          cargando: true
        })
      })
    .catch(err => console.log(err));
    
  }

  /* agregar(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=273b9407308bfcdeef52576c44acfda9&language=en-US&page=${this.state.paginacion}`)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            paginacion: this.state.paginacion + 1
          })
      })
      .catch(err => console.log(err));
  }  */

/*   filtrar(texto){
    let filtrados =  this.state.peliculas.filter((pelicula)=> pelicula.title.toLowerCase().includes(texto.toLowerCase())
     ); 
     console.log(filtrados);
     
     this.setState({
         peliculas: filtrados,
     })
 }


 cambiarOrientacion(orientacion){
    this.setState({
      orientacion: orientacion, 
      flechaUp: (this.state.flechaUp === "fas fa-chevron-left") ? ("fas fa-chevron-up") : ("fas fa-chevron-left"),
      flechaDown: (this.state.flechaDown === "fas fa-chevron-right") ? ("fas fa-chevron-down") : ("fas fa-chevron-right")
    })

  }  */

/*   filtrarPeliculas(value){
    alert(value)
    this.setState({
      value
    })
  }
 */
  render(){
      return (
        <div id="wrapper">
          <Header cambiarOrientacion={(orientacion)=>this.cambiarOrientacion(orientacion)} filtrarBusqueda={(value)=>this.filtrarPeliculas(value)}/>
          <Peliculas /* agregar={this.agregar()} */ peliculas={this.state.peliculas} /* orientacion={this.state.orientacion} */ flechaUp={this.state.flechaUp} flechaDown={this.state.flechaDown} filtro={()=> this.state.value} cargando={this.state.cargando}/>
          <Footer/>
        </div>
      );
  }
}
  
export default App;