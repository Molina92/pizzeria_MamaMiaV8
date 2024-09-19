import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { DataContext } from "../Context/DataContext";
import Header from "./Header";
import CardPizza from "./CardPizza";

export default function Home() {
  const { addToCart} = useContext(CartContext);
  const { data } = useContext(DataContext);

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {data.map((pizza) => (
          <div className="row mt-3" key={pizza.id}>
            <CardPizza
              id={pizza.id}
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
    </>
  );
}
