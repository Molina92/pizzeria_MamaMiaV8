import { useState } from 'react'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            setError(true)
            return
        }

        if (password.length >= 6) {
            alert('Información enviada exitosamente');
            setError(false);

            setEmail('');
            setPassword('');
        } else {
            alert('La contraseña debe tener al menos 6 caracteres.');
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='container p-5'>
                    <div className="container p-5">
                        <form className="formulario m-5" onSubmit={validarDatos}>
                            {error ? <p className="text-danger">Todos los campos son obligatorios</p> : null}

                            <div className="form-group m-4">
                                <label className="text-light">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="form-group m-4">
                                <label className="text-light">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary mt-4">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}