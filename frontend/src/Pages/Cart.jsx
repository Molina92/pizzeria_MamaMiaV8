import { useState, useEffect, useContext } from "react";
import FormatearMonto from "../Components/FormatearMonto";
import { DisplayNombre } from "../Components/DisplayNombre";
import { CartContext } from "../Context/CartContext";

const Cart = () => {

  const { cart, setCart, total, setTotal } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updatedCartItems = [];

    cart?.forEach(newItem => {
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
  }, [cart]);

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
      setCart([]);
    } else {
      setCartItems(updatedCart);
    }
  };

  // Calcular el total de la compra y actualizar el valor de setTotal
  useEffect(() => {
    const totalOperation = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalOperation);
  }, [cartItems]);
  
  return (
    <>      
      {cartItems.length > 0 ? (
        <div className="text-light" style={{ marginTop: "5rem" }}>
          <div className="cart ">
            <h2>Carrito de Compras</h2>
            <ul className="p-5 d-flex flex-wrap gap-4 justify-content-center">
              {cartItems.map(({ id, name, img, price, quantity }) => (
                <li key={id} className="cart-item" style={{ listStyle: "none"}}>
                  <div className="card" style={{ maxWidth: "380px", height: "140px" }}>
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
                          <h5 className="card-title">Pizza {DisplayNombre(name)}</h5>
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
      ) : 
      <h3 className="text-light my-5">Carrito vacío</h3>
      }
    </>
  ); 
};

export default Cart;