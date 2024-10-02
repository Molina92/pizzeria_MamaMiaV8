import { useContext } from "react";
import FormatearMonto from "../Components/FormatearMonto";
import { DisplayNombre } from "../Components/DisplayNombre";
import { CartContext } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext";

const Cart = () => {
  const { cart, setCart, total, handleIncrease, handleDecrease } =
    useContext(CartContext);

  const { token, handleCheckout } = useContext(UserContext);

  return (
    <>
      {cart.length > 0 ? (
        <div className="text-light" style={{ marginTop: "5rem" }}>
          <div className="cart ">
            <h2>Carrito de Compras</h2>
            <ul className="p-5 d-flex flex-wrap gap-4 justify-content-center">
              {cart.map(({ id, name, img, price, quantity }) => (
                <li
                  key={id}
                  className="cart-item"
                  style={{ listStyle: "none" }}
                >
                  <div
                    className="card"
                    style={{ maxWidth: "380px", height: "140px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={img}
                          className="img-fluid rounded-start"
                          alt={name}
                        />
                      </div>
                      <div className="col-md-8 ">
                        <div className="card-body p-1 d-flex flex-wrap justify-content-around p-2">
                          <h5 className="card-title">
                            Pizza {DisplayNombre(name)}
                          </h5>
                          <p className="card-text">
                            {FormatearMonto(price * quantity)}
                          </p>
                          <div className="container d-flex flex-wrap justify-content-center align-items-center">
                            <button
                              className="btn btn-primary"
                              onClick={() => handleDecrease(id)}
                            >
                              -
                            </button>
                            <span className="mx-2 fs-5">{quantity}</span>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleIncrease(id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="container p-5 d-flex justify-content-center gap-3">
              <button type="button" className="btn btn-success disabled">
                Total: {FormatearMonto(total)}
              </button>
              {token ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCheckout}
                >
                  Pagar 💲
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-light my-5">Carrito vacío</h3>
      )}
    </>
  );
};

export default Cart;
