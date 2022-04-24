import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container text-center Background">
            <div className="container">
            <img className="conteiner center" src="/img/Samaritano.png" alt="" />
            <h1 className="mt-5 mb-60">Fazer login</h1>
            <form>
                <div className="mb-3">
                    <input type="email" placeholder="Email" className="form-control btn btn-primary" id="formEmail" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Senha" className="form-control btn btn-primary" id="formPass" />
                </div>
                <div className="mb-3 form-check text-start d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input me-2" id="lsenha" />
                    <label className="form-check-label" for="lsenha">Lembrar Senha</label>
                </div>
                
                <Link className="btn btn-primary button2" to="/home">Entrar</Link>
            </form>
            <h1 className="mt-5 mb-3">Ou</h1>
            <div className="d-grid gap-2">
                <button  className="btn btn-primary ms-30 me-30 button1" type="button">
                    <img className="mr-30" src="img/icongoogle.png" alt="googleicon" /> 
                    Continuar com o google
                </button>
                <Link className="btn btn-primary mx-30 button1" to="/register">
                    Novo usuario? Crie uma conta
                </Link>
            </div>
            </div>
            <p className="mt-3 mb-3"> <Link to="/recovery">Esqueceu sua senha? Clique aqui.</Link></p>

        </div>
    );
}

export default Login;
