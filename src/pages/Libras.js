import NavSearch from "../components/NavSearch";
import NavFooter from "../components/NavFooter";
function Libras() {
    return (

        <div className="">
            <NavSearch />

            <div className="mt-120 mb-60">
                <h1 className="wrapperTitle" >Apresentação dos Ícones</h1>
                <div className="grid-container">
                    <div className="container">
                    <div className="row">     
                        <div className="col-3 mr-120">    
                          
                            <div className=" mt-30 mr-30 mb-3" >
                                <div className="librasTitle">
                                    <img src="img/homeApresentacao.svg" alt="a" />
                                    </div>
                                   <p>Inicio</p>
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="mt-30 mr-30 mb-3">
                                <div className="librasTitle">
                                    <img src="img/favApresentacao.svg" alt="a" />
                                </div>
                                <p className="librasTitle">Favoritos</p>
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="mt-30 mr-30 mb-3"  >
                                <div className="librasTitle">
                                    <img src="img/librasApresentacao.svg" alt="a" />
                                    </div>
                                    <p>Itens em LIBRAS</p>
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>


                        </div>
                    <div className="col-3 ml-60">
                    <div className="mt-30 mr-30 mb-3"  >
                                <div className="librasTitle">
                                    <img src="img/menuApresentacao.svg" alt="a" />
                                    </div>
                                    <p>Opções</p>
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="mt-30 mr-30 mb-3"  >
                                <div className="librasTitle">
                                    <img src="img/condigApresentacao.svg" alt="a" />
                                    </div>
                                    <p>Configurações</p>
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="mt-60 mr-30 mb-3">
                               
                               <div className="librasTitle">
                                    <img src="img/helpApresentacao.svg" alt="a" />
                                    </div>
                                    <p>Ajuda</p>                               
                                <br />
                                <iframe width="auto" height="auto"
                                    src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div> 
                    </div>       

                        </div>
                    </div>
                </div>
            </div>
            <NavFooter />
        </div>

    );
} export default Libras;
