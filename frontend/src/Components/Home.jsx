import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import Cart from "./Cart.jsx";

const urlBase = "http://localhost:5000/api/pizzas";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]); //declaro otro state para traer los datos del pizzas.json
  const [isLoading, setIsLoading] = useState(false); 

  const getPizzas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlBase);
      const pizzas = await response.json();
      setData(pizzas); // en vez de asignarlo a cart porque con cart hago otras operaciones lo asigno
    } catch (error) { // a setData que es el otro estado que declare arriba
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
