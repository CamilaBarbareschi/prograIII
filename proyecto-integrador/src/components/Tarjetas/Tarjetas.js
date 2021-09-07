import React, { Component } from 'react'
import "./Tarjetas.css"

class Tarjetas extends Component{

constructor(props){
    super(props)
    this.state = {

    }
}   

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
          <section className="aditional-info">
            <p>Fecha de estreno: {this.props.estreno}</p>
            <p>Popularidad: {this.props.popularidad} </p>
          </section>
          <a href>Ver más</a>
        </main>
    )
}

}

export default Tarjetas