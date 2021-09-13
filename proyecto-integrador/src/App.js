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
      flechaDown: "fas fa-chevron-right", 
      flechaUp: "fas fa-chevron-left",
    }
  }
    
  cambiarOrientacion(orientacion){
    this.setState({
      orientacion: orientacion, 
      flechaUp: (this.state.flechaUp === "fas fa-chevron-left") ? ("fas fa-chevron-up") : ("fas fa-chevron-left"),
      flechaDown: (this.state.flechaDown === "fas fa-chevron-right") ? ("fas fa-chevron-down") : ("fas fa-chevron-right")
    })
    console.log(this.state)
  }

  render(){
      return (
        <div id="wrapper">
          <Header cambiarOrientacion={(orientacion)=>this.cambiarOrientacion(orientacion)}/>
          <Peliculas orientacion={this.state.orientacion} flechaUp={this.state.flechaUp} flechaDown={this.state.flechaDown} />
          <Footer/>
        </div>
      );
  }
}
  
export default App;