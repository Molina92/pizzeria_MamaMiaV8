import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import Cart from "./Cart.jsx";

const urlBase = "http://localhost:5000/api/pizzas";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 

  const getPizzas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlBase);
      const pizzas = await response.json();
      setData(pizzas); 
    } catch (error) { 
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPizzas();
  }, [isLoading]);

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
        {data.map((pizza) => (
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
      <Cart
        className="mt-3 text-light"
        pizzasInCart={cart}
        onEmptyCart={handleEmptyCart}
      />
    </>
  );
}
