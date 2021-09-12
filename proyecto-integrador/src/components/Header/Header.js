import React from 'react';
import './Header.css'


const Header =(props)=> {
  return (
    <header>
      <h1><img src="/img/hooves.png" alt="logo hooves" srcset="" /></h1> 
      <p>ASC/ DESC</p>
      <i className="fas fa-th" onClick={()=>props.cambiarOrientacion("card-container-row")}/>
      <i className="fas fa-align-justify" onClick={()=>props.cambiarOrientacion("card-container-column")} />
      <form action>
        <input type="text" name="search" id placeholder="Search" />
        <button className="searchSubmit" type="submit"><i className="fas fa-search" /></button>
      </form>
    </header>
  );
}

export default Header;