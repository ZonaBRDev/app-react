import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function NavFooter() {
  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <footer>
      {showingMenu && 
      <div className="card  menu animate__animated animate__fadeInRight"> 
        <div className="menuContent">
          <Link className="btn  d-flex " to="/Changedata" role="button">
            <img src="img/engrenagem.svg" alt="" />
            <h4 className="optionHelp mt-2 ms-2">Configuration</h4>
          </Link>
          <Link className="btn  d-flex" to="/help" role="button">
            <img src="img/pergunta 4.png" alt="" />
            <h4 className="optionHelp mt-2 ms-2">Ajuda</h4>
          </Link>
          <Link className="btn  d-flex" to="/" role="button">
            <img src="img/X.svg" alt="" />
            <h4 className="optionHelp mt-2 ms-2">Sair</h4>
          </Link>
        </div>
      </div>
      }

      <div className="navbar-expand fixed-bottom">
        <nav className="navbar" >
          <div className="container menuBar">

            <NavLink  to="/Home" activeClassName="selected">
              <img src="img/Home.svg" width="30" height="30" className=" align-top ml-30 line-icon" alt="Home" />
              <img src="img/HomeFull.svg" width="30" height="30" className=" align-top ml-30 full-icon" alt="Home" />
            </NavLink>
            <NavLink to="/Favoritos"  activeClassName="selected">
              <img src="img/FAVORITO.svg" width="30" height="30" className="align-top ml-30 line-icon" alt="Fav" />
              <img src="img/FAVORITOFULL.svg" width="30" height="30" className="align-top ml-30 full-icon" alt="Fav" />
            </NavLink>
            <NavLink to="/Libras" activeClassName="selected">
              <img src="img/LIBRAS.svg" width="30" height="30" className="align-top ml-30 line-icon" alt="Libras" />
              <img src="img/LIBRASFULL.svg" width="30" height="30" className="align-top ml-30 full-icon" alt="Libras" />
            </NavLink>
            <button onClick={() => setShowingMenu(!showingMenu)} className={showingMenu ? 'btn selected' : 'btn'} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="img/MenuLine.svg" width="30" height="30" className="line-icon align-top" alt="Option" />
              <img src="img/MenuFull.svg" width="30" height="30" className="full-icon align-top" alt="Option" /> 
            </button>
          </div>
        </nav>
      </div>
    </footer>
  );


} export default NavFooter;