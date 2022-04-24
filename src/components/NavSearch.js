function NavSearch(){
    return(
        <div className="Search "> 
        <nav  className="py-2 fixed-top bg-light navSearch">
          <div className="container d-flex justify-content-between">


            <form className="form me-2">

              <input  className="form-control searchInput" type="search" placeholder="Pesquisar" aria-label="Search" />

            </form>
            <div className="logo"> <img className="responsive-img-logo" src="img/Samaritano.png" alt="logo" /> </div>
          </div>

        </nav>
      </div>
    );
}export default NavSearch;