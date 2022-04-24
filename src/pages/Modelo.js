import NavFooter from "../components/NavFooter";
import NavSearch from "../components/NavSearch"
function Modelo() {
    return (
        <div className="mt-120" >
            <NavSearch />
            <h1 className="wrapperTitle" >Sistema Digestório</h1>
            <div className="container">
            <div className="wrapper">

                <div className="item itemBorder mt-30 mr-30 mb-3" >
                    <iframe width="100%" height="231px" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    {/* <video className="" width="320" height="240" controls>
                        <source src="" type="video/mp4" />
                          
                    </video> */}

                </div>
            </div>
            <img className="ml-30 mb-3" src="./img/staryellow.png" alt="Favoritos" />

            <div>
                <p className="paragrafo ml-30 mr-30">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates asperiores veniam alias velit quas maiores eum veritatis natus nihil molestias modi sunt accusantium commodi rerum, dignissimos beatae facere sint?</p>
            </div>
            </div>
            <br/><br/><br/>
            <NavFooter />
        </div>
    );
} export default Modelo;