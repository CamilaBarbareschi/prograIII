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
              <i className="far fa-window-close" onClick={()=> this.props.borrar(this.props.id)} />
          </section>
          <img src= {`https://image.tmdb.org/t/p/w500/${this.props.img}`} alt="" />
          <h3>{this.props.title} </h3>
          <p> <strong>Fecha de estreno:</strong> {this.props.estreno}</p>
          <section className={`${this.state.verMas ? 'aditional-info-show': 'aditional-info'}`}>
            <p> <strong>Popularidad:</strong> {this.props.popularidad} </p>
            <p><strong>Lenguaje original:</strong> {this.props.idioma}</p>
            <p className="description"> <strong>Sinopsis:</strong> {this.props.descrip} </p>
          </section>
            <a href onClick={()=>this.verMas()} className='VerMas'>{this.state.texto}</a>
        </main>
    )
}

}

export default Tarjetas