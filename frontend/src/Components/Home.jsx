import { useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../Pizzas.js";
import Cart from "./Cart.jsx";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {pizzas.map((pizza) => (
          <div className="row mt-3" key={pizza.id}>
            <CardPizza
              nombre={pizza.name}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              imagen={pizza.img}
              addToCart={addToCart}
              pizza={pizza}
            />
          </div>
        ))}
      </div>
      <Cart className="mt-3 text-light" pizzasInCart={cart} onEmptyCart={handleEmptyCart} />
    </>
  );
}
