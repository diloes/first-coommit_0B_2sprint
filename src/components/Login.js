import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="login"> 
            <h2 className="login__title">OpenBootcamp <span>| Alumnos</span></h2>

            <form className="login__form">
                <label for="correo"><b>Email</b></label>
                <input type="email" placeholder="Introduce tu correo" id="correo" />

                <label for="contraseña"><b>Contraseña</b></label>
                <input type="password" placeholder="Introduce tu contraseña" id="contraseña"></input>

                <div class="login__checkbox">
                                <div>
                                <input type="checkbox" id="recuerdame"/>
                                <label for="recuerdame">Recuerdame</label>
                                </div>
                                <p>He olvidado la contraseña</p>
                        </div>
            
                <button class="login__btn">Iniciar Sesión</button>
                <p>Click en iniciar sesión para ver tabla ^</p>
            </form>
            </div>
        </div>
    )
}

export default Login
