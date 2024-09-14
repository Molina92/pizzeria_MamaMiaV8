import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const urlBase = "http://localhost:5000/api/pizzas";
  
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

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
