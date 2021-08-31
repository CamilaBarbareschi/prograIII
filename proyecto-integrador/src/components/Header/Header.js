import React from 'react';
import './Header.css'

const Header =()=> {
      return (
        <header>
          <h1>Titulo</h1>
          <section>
            <p>ASC/ DESC</p>
            <i className="fas fa-th" />
            <i className="fas fa-align-justify" />
            <form action>
              <input type="text" name="search" id placeholder="Search" />
              <button type="submit"><i className="fas fa-search" /></button>
            </form>
            </section>
        </header>
      );
    }

  export default Header;