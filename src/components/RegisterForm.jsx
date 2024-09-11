

const RegisterForm = () => {
    return (
        <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-custom-green">
        <div className="form-container p-5 rounded">
            <h3 className='Text'>Registrate</h3>
            <div className='cline'>
                <div className='line'></div>
            </div>
            <br />
            <div className="mb-2">
                <label className='label-text' htmlFor="text">Nombre</label>
                <input type="text" required="" placeholder='Nombre' className='form-control' id='name'/>
            </div>
            <div className="mb-2">
                <label className='label-text' htmlFor="email">Correo Electrónico</label>
                <input type="email" required="" placeholder="Email" className="form-control" id="email" />
            </div>
            <div className="mb-2">
                <label className='label-text' htmlFor="password">Contraseña</label>
                <input type="password" required="true" placeholder="Contraseña" className="form-control" id="password" />
            </div>
            <div className="d-grid">
                <button className="btn btn-custom-white">Ingresar</button>
            </div>
            <p className="text-right">
                Ya cuentas con una cuenta? <a href="">Inicia Sesion</a>
            </p>
        </div>
    </div>
    )
}

export default RegisterForm