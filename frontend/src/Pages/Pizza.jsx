import { useContext } from "react";
import FormatearMonto from "../Components/FormatearMonto";
import { DisplayNombre } from "../Components/DisplayNombre";
import { DataContext } from "../Context/DataContext";
import { CartContext } from "../Context/CartContext";

export const Pizza = () => {
  const { data, isLoading } = useContext(DataContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {isLoading ? (
        <p>Loading pizza data...</p>
      ) : data ? (
        <div className="container my-5">
          {data.map((pizza) => (
            <div className="card my-4" key={pizza.id}>
              <div
                className="row g-0"
                style={{ height: "450px", maxHeight: "auto" }}
              >
                <div className="col-lg-6" style={{ height: "100%" }}>
                  <img
                    src={pizza.img}
                    style={{ width: "100%", height: "100%" }}
                    className="img-fluid rounded-start"
                    alt={pizza.name}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body text-start">
                    {pizza.name ? (
                      <h5 className="card-title fs-2">
                        Pizza {DisplayNombre(pizza.name)}
                      </h5>
                    ) : null}
                    <p className="card-text p-2">{pizza.desc}</p>
                    <div className="container mb-3">
                      <ul className="list-group list-group-flush text-start">
                        {pizza.ingredients
                          ? pizza.ingredients.map((ingrediente, index) => (
                              <li key={index} className="list-group-item">
                                🍕 {ingrediente}
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                    <div className="d-flex justify-content-around">
                      {pizza.price ? (
                        <p className="card-text fs-2">
                          Precio: {FormatearMonto(pizza.price)}
                        </p>
                      ) : null}
                      <div
                        className="btn btn-dark border border-3"
                        style={{ width: "8rem", height: "3rem" }}
                        onClick={() => addToCart(pizza)}
                      >
                        Añadir 🛒
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No pizza data available.</p>
      )}
    </>
  );
};
