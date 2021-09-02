import React, { Component } from 'react'
import './Tarjetas.css'

class Tarjetas extends Component{

constructor(){
    super()
    this.state = {

    }
}   

render(){
    return(
        <main className= 'tarjeta'>
        <img src="./img/image-default.png" alt="" />
        <h3>Título/ Nombre</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
        <section className="aditional-info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
        </section>
        <a href>Ver más</a>
      </main>
    )
}

}

export default Tarjetas
