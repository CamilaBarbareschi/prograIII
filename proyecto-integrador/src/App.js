import React, {Component} from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Peliculas from './Components/Peliculas/Peliculas'
import Footer from  './Components/Footer/Footer'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      orientacion: "card-container-row", 
      flechaDown: "", 
      flechaUp: "",
    }
  }
  
cambiarOrientacion(orientacion){
 
  this.setState({
    orientacion: orientacion, 
    flechaUp: "fas fa-chevron-up", 
    flechaDown: "fas fa-chevron-down", 
  })
}
render(){
    return (
      <div id="wrapper">
        <Header cambiarOrientacion={(orientacion)=>this.cambiarOrientacion(orientacion)}/>
        <Peliculas orientacion={this.state.orientacion} flechaUp={this.state.flechaUp} flechaDown={this.state.flechaDown} />
        <Footer/>
      </div>
    );
 }}
  
  export default App;