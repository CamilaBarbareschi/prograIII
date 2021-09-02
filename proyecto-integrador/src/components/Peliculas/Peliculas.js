import React, { Component } from 'react'

class Peliculas extends Component{

constructor(){
    super()
    this.state = {

    }
}   

componentDidMount(){
    console.log('component did mount');
    const url = ''
    fetch(url)
    .then( (respuesta) => respuesta.json())
    .then((data) => {
        console.log(data);
        this.setState({
            
        })
    })
    .catch(err => console.log(err));
}

render(){
    return(
        
    )
}

}

export default Peliculas
