import React from 'react';

const SearchLogo = () => (
  <div className="navbar-header search-logo hidden-xs hidden-sm">
    <a className="navbar-brand" href="#home">
        <div>
            <img className="img-responsive" src="/images/logo.png" alt="UGM Fisipol DigiLib" />
        </div>
        <span className="title-top">
            <i className="fa fa-book" /> Digital Library
            <br/>Fakultas Ilmu Sosial dan Politik
            <br/> Universitas Gadjah Mada
        </span>
    </a>
  </div>
);

export default SearchLogo;
