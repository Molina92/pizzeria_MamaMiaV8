import { useState, useEffect } from "react";
import FormatearMonto from "./FormatearMonto";

const Cart = ({ pizzasInCart, onEmptyCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updatedCartItems = [];

    pizzasInCart.forEach(newItem => {
      const existingItemIndex = updatedCartItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex >= 0) {
        // Si el item ya existe, actualizar la cantidad
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + (newItem.quantity || 1),
        };
      } else {
        // Si el item no existe, añadirlo al carrito
        updatedCartItems.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      }
    });

    // Actualizar el estado con el nuevo array
    setCartItems(updatedCartItems);
  }, [pizzasInCart]);

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
      .filter((item) => item.quantity > 0); // Filtrar items con cantidad <= 0

    // Si el carrito está vacío después de la actualización, establecerlo como un array vacío
    if (updatedCart.length === 0) {
      setCartItems([]);
      onEmptyCart();
    } else {
      setCartItems(updatedCart);
    }
  };

  // Calcular el total de la compra
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="text-light" style={{ marginTop: "5rem" }}>
          <div className="cart ">
            <h2>Carrito de Compras</h2>
            <ul className="p-5 d-flex flex-wrap gap-4 justify-content-center">
              {cartItems.map(({ id, name, img, price, quantity }) => (
                <li key={id} className="cart-item" style={{ listStyle: "none", width: "400px", height: "140px" }}>
                  <div className="card" style={{ maxWidth: "400px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={img}
                          className="img-fluid rounded-start"
                          alt={name}
                          style={{ height: "-webkit-fill-available" }}
                        />
                      </div>
                      <div className="col-md-8 ">
                        <div className="card-body p-1 d-flex flex-wrap justify-content-around p-2">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">
                            {FormatearMonto(price * quantity)}
                          </p>
                          <div className="container d-flex flex-wrap justify-content-center align-items-center">
                            <button className="btn btn-primary" onClick={() => handleDecrease(id)}>-</button>
                            <span className="mx-2 fs-5">{quantity}</span>
                            <button className="btn btn-primary" onClick={() => handleIncrease(id)}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total">
              <h3>Total: {FormatearMonto(total)}</h3>
            </div>
          </div>
        </div>
      ) : null} {/* //renderiza null si el carro esta vacio */}
    </>
  );
};

export default Cart;