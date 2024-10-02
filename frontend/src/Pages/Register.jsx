import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'


export const Register = () => {

    const { handleRegister, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error } = useContext(UserContext)

    return (
        <>
            <div className='container-fluid'>
                <div className='container p-5'>
                    <div className="container p-5">
                        <form className="formulario m-5" onSubmit={handleRegister}>
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

                            <div className="form-group m-4">
                                <label className="text-light">Confirm password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
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