function Recovery() {
    return (

        <div className="container text-center">
            <img className="mt-120" src="/img/logo.png" alt="" />
            <h4 className="mt-60 mb-30">Recuperar Senha</h4>
            <form>
                <div className="mb-3">
                    <input type="email" placeholder="Email" className="form-control btn btn-primary" id="formEmail" />
                </div>
                <button  type="submit" className="btn btn-primary mt-30 mb-4 button2" >Enviar</button>
            </form>
            <p className="mt-120 mb-3">Sua senha será enviada para seu e-mail.. </p>
        </div>
    )
}

export default Recovery;