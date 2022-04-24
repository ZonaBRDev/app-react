import {Link} from 'react-router-dom';
function Subjectfav() {
    return (
        <div className="">
            <div className="holderTitle me-5">
                <div className="container">
                    <h1>Anatomia e Fisiologia Humana</h1>
                </div>
            </div>
            <div className="container">
            <div className="wrapper">
                <div className="item mt-30 mr-30 mb-3" >
                    <img src="img/SistemaDigestorio.png" alt="a"/>
                    <br />
                    <Link className="btn btn-primary2 " to="/Modelo">Sistema Digestorio</Link>
                </div>

            </div>

            </div>
            <div className="holderTitle me-5">
                <div className="container">
                    <h1>Bioquímica</h1>
                </div>
            </div>
            <div className="container">
            <div className="wrapper">
                <div className="item mt-30 mr-30 mb-3" >
                    <img src="img/Atomo.png" alt="a"/>
                    <br />
                    <Link className="btn btn-primary2 " to="/Modelo">Átomo</Link>
                </div>

                <div className="item mt-30 mb-3 mb-3">
                    <img src="img/Agua.png" alt="a" />
                    <br />
                    <Link className="btn btn-primary2 " to="/Modelo">Água</Link>
                </div>

            </div>

            </div>
            <div className="holderTitle me-5">
                <div className="container">
                    <h1>Citologia</h1>
                </div>
            </div>
            <div className="container">
            <div className="wrapper">
                <div className="item mt-30 mr-30 mb-3" >
                    <img src="img/Cintologia1.png" alt="a"/>
                    <br />
                    <Link className="btn btn-primary2 " to="/Modelo">Cintologia1</Link>
                </div>

                <div className="item mt-30 mb-3 mb-3">
                    <img src="img/Cintologia2.png" alt="a" />
                    <br />
                    <Link className="btn btn-primary2 " to="/Modelo">Cintologia2</Link>
                </div>

            </div>

            </div>
            <br/> <br/> <br/>
            
        </div>

    );
} export default Subjectfav;