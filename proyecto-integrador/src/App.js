import React, {Component} from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Peliculas from './Components/Peliculas/Peliculas'
import Footer from  './Components/Footer/Footer'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      orientacion: "card-container-column"
    }
  }
  
cambiarOrientacion(orientacion){
 
  this.setState({
    orientacion: orientacion
    
  })
}
render(){
    return (
      <div id="wrapper">
        <Header cambiarOrientacion={(orientacion)=>this.cambiarOrientacion(orientacion)}/>
        <Peliculas orientacion={this.state.orientacion}/>
        <Footer/>
      </div>
    );
 }}
  
  export default App;