// import { useState, useEffect } from 'react'
// import FormatearMonto from './FormatearMonto';

// const urlBase = "http://localhost:5000/api/pizzas/p001";

// export const Pizza = () => {

//     const [data, setData] = useState([]);

//     const getPizza = async () => {
//         try {
//             const response = await fetch(urlBase);
//             const pizzas = await response.json();
//             setData(pizzas);
//         } catch (error) {
//             console.error(error);
//         }

//     }

//     useEffect(() => {
//         getPizza();
//     }, []);

//     return (
//         <>

//             <div className="container p-5 d-flex align-self-center">
                

//                 <div className="card mb-3" style={{ maxWidth: '540px' }} key={data.id}>
//                     <div className="row g-0 d-flex align-self-center">
//                         <div className="col-md-4">
//                             <img src="..." className="img-fluid rounded-start" alt="..." />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Pizza {data.name}</h5>
//                                 <p className="card-text">recio: {FormatearMonto(data.price)}</p>
//                             </div>
//                             <ul className='list-group list-group-flush text-start'>
//                                 {ingredients.map((ingrediente, index) => (
//                                     <li key={index} className='list-group-item'> 🍕{ingrediente} </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

                
//             </div>

//         </>
//     )
// }
