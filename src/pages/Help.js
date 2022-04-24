import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeaderHelp";
import {Link} from 'react-router-dom';

function Help() {
  return (

    <div>
      <div>
        <NavHeader />
      </div>

      <div className="mt-120 container">
        <div className="ml-30">
          <h4 ><img src="img/Group_301.svg" alt="" />
            <Link className="mt-3 ml-30 optionHelp " to="/Talktous">Fale Conosco</Link>
            </h4>
        </div>
        <div className="ml-30">
          <h4 className="optionHelp">
            <img src="img/Group_64.svg" alt="" />
            <Link className="mt-3 ml-30 optionHelp " to="/Terms">Termos de Serviço e Políticas de Privacidade</Link>
              </h4>
        </div>
        <div className="">
          <h4 className="optionHelp"><img src="img/information_2.svg" alt="" />
            <Link className="mt-3 ml-30 optionHelp " to="/appdata">Dados Do Aplicativo</Link>
            </h4>
        </div>

      </div>

      <NavFooter />
    </div>

  );
}
export default Help;