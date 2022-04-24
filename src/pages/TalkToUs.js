import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeaderHelp";

function TalkToUs() {
    return (
        <div>
            <NavHeader />
            <div className="container">
                <div className=" form-group">
                    <label className="ml-30 TalkToUsTitle" for="Form">Fale conosco</label>
                    <textarea className="form-control FormTalkToUs" rows="3" placeholder="Escreva sua mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2 ml-30 button3">Enviar</button>
                <NavFooter />
            </div>
        </div>

    );
} export default TalkToUs;