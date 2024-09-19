import { useContext, useEffect, useState } from "react";
import FormatearMonto from "../Components/FormatearMonto";
import { DisplayNombre } from "../Components/DisplayNombre";
import { DataContext } from "../Context/DataContext";
import { CartContext } from "../Context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

export const Pizza = () => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/");
  };

  // Implementación del useParams de manera local en el componente
  const { id } = useParams();
  const [data2, setData2] = useState([]);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleFetch = (id) => {
    setIsLoading2(true);
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
        setIsLoading2(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleFetch(id);
  }, [id]);

  return (
    <>
      {isLoading2 ? (
        <p>Loading pizza data...</p>
      ) : data2 ? (
        <div className="container my-5">
          <div className="card my-4" key={data2.id}>
            <div
              className="row g-0"
              style={{ height: "450px", maxHeight: "auto" }}
            >
              <div className="col-lg-6" style={{ height: "100%" }}>
                <img
                  src={data2.img}
                  style={{ width: "100%", height: "100%" }}
                  className="img-fluid rounded-start"
                  alt={data2.name}
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body text-start">
                  {data2.name ? (
                    <h5 className="card-title fs-2">
                      Pizza {DisplayNombre(data2.name)}
                    </h5>
                  ) : null}
                  <p className="card-text p-2">{data2.desc}</p>
                  <div className="container mb-3">
                    <ul className="list-group list-group-flush text-start">
                      {data2.ingredients
                        ? data2.ingredients.map((ingrediente, index) => (
                            <li key={index} className="list-group-item">
                              🍕 {ingrediente}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <div className="d-flex justify-content-around">
                    {data2.price ? (
                      <p className="card-text fs-2">
                        Precio: {FormatearMonto(data2.price)}
                      </p>
                    ) : null}
                    <div
                      className="btn btn-dark border border-3"
                      style={{ width: "8rem", height: "3rem" }}
                      onClick={() => addToCart(data2)}
                    >
                      Añadir 🛒
                    </div>
                    <div
                      className="btn btn-dark border border-3"
                      style={{ width: "8rem", height: "3rem" }}
                      onClick={() => handleNavigate()}
                    >
                      Go Home 🏠
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No pizza data available.</p>
      )}
    </>
  );
};
