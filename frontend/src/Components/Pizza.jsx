import { useState, useEffect } from 'react';
import FormatearMonto from './FormatearMonto';

const urlBase = "http://localhost:5000/api/pizzas/p001";

export const Pizza = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Agregar un estado para manejar la carga

    const getPizza = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(urlBase);
            const pizzaData = await response.json();
            setData(pizzaData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Estableblerlo en falso luego de la petición incluso en error
        }
    };

    useEffect(() => {
        getPizza();
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Loading pizza data...</p>
            ) : (
                data ? (
                    <div className="container">
                        <div className="container my-5 d-flex flex-column">
                            <div className="card my-4" key={data.id}>
                                <div className="row g-0" style={{ maxHeight: '450px' }}>
                                    <div className="col-md-6" style={{ Height: '100%' }}>
                                        <img
                                            src={data.img}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            className="img-fluid rounded-start"
                                            alt={data.name}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body text-start">
                                            <h5 className="card-title fs-2">Pizza {data.name}</h5>
                                            <p className="card-text p-2">{data.desc}</p>
                                            <div className="container mb-3">
                                                <ul className="list-group list-group-flush text-start">
                                                    {data.ingredients ? ((data.ingredients).map((ingrediente, index) => (
                                                        <li key={index} className="list-group-item">
                                                            🍕 {ingrediente}
                                                        </li>
                                                    ))) : null}
                                                </ul>
                                            </div>
                                            <div className='d-flex justify-content-around'>
                                                {data.price ? (
                                                    <p className="card-text fs-2"> Precio: {FormatearMonto(data.price)}</p>
                                                ) : null}
                                                <div variant="dark" className='btn btn-dark border border-3' style={{ width: '8rem', height: '3rem' }}>Añadir 🛒</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null)
            }
        </>
    );
};