import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../search/SearchForm';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><img src="/public/images/rnews.png" alt=""></img>RNEWS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">         
         <SearchForm></SearchForm>
        </div>
      </nav>
    </header>
  )
}

export default Header;