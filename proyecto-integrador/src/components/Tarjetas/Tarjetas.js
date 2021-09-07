import React, { Component } from 'react'
import "./Tarjetas.css"

class Tarjetas extends Component{

constructor(props){
    super(props)
    this.state = {
      verMas: false,
      texto: "Ver mas",
    }
}   
verMas(){
  if (this.state.verMas) {
    this.setState(
      { verMas: false,
        texto: "Ver mas",
      }   
    )
  }else{
    this.setState(
      { verMas: true,
        texto: "Ver menos",
      })
}}
render(){
    return(
        <main className= 'tarjeta'>
          <section className="navigation">
              <div>
                <i className="fas fa-chevron-left" />
                <i className="fas fa-chevron-right" />
              </div>
              <i className="far fa-window-close" />
          </section>
          <img src= {`https://image.tmdb.org/t/p/w500/${this.props.img}`} alt="" />
          <h3>{this.props.title} </h3>
          <p className="description">{this.props.descrip} </p>
          <section className={`${this.state.verMas ? 'aditional-info-show': 'aditional-info'}`}>
            <p>Fecha de estreno: {this.props.estreno}</p>
            <p>Popularidad: {this.props.popularidad} </p>
            <p>Lenguaje original: {this.props.idioma}</p>
          </section>
            <a href onClick={()=>this.verMas()}>{this.state.texto}</a>
        </main>
    )
}

}

export default Tarjetas