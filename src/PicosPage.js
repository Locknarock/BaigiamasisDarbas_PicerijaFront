import "./PicosPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PicosPage() {
  const [pizzas, setPizzas] = useState([]);
  const [isPending, setPending] = useState(true);
  const [randomPizzaIndex, setRandomPizzaIndex] = useState(null);
  const [showRandomPizza, setShowRandomPizza] = useState(false);

  useEffect(() => {
    axios
      .get("/api/pizza")
      .then((response) => {
        setPizzas(response.data);
        setPending(false);
      })
      .catch((error) => {
        console.error("Klaida gavus picų duomenis:", error);
        setPending(false);
      });
  }, []);

  const base64ToImageUrl = (base64String) => {
    return `data:image/*;base64,${base64String}`;
  };

  useEffect(() => {
    if (pizzas.length > 0 && randomPizzaIndex === null) {
      const newRandomPizzaIndex = Math.floor(Math.random() * pizzas.length);
      setRandomPizzaIndex(newRandomPizzaIndex);
    }
  }, [pizzas, randomPizzaIndex]);

  const chooseRandomPizza = () => {
    const nonEmptyPizzas = pizzas.filter(
      (pizza) =>
        pizza.pizzaName &&
        pizza.pizzaPrice &&
        pizza.pizzaSize &&
        pizza.products &&
        pizza.pizzaPhoto &&
        pizza.products.length > 0
    );

    if (nonEmptyPizzas.length > 0) {
      const newRandomPizzaIndex = Math.floor(
        Math.random() * nonEmptyPizzas.length
      );
      setRandomPizzaIndex(newRandomPizzaIndex);
      setShowRandomPizza(true);
    } else {
      console.log("Nerasta tinkamų picų su visais reikiamais duomenimis.");
    }
  };

  return (
    <div className="pizzas-container">
      {isPending && <div>Loading...</div>}
      <h1>Menu</h1>
      <div className="pizzas-list">
        {pizzas
          .filter(
            (pizza) =>
              pizza.pizzaName &&
              pizza.pizzaPrice &&
              pizza.pizzaSize &&
              pizza.products &&
              pizza.pizzaPhoto &&
              pizza.products.length > 0
          )
          .map((pizza) => (
            <div key={pizza.id} className="pizza-item">
              {pizza.pizzaPhoto && (
                <img
                  src={base64ToImageUrl(pizza.pizzaPhoto)}
                  alt={pizza.pizzaName}
                />
              )}
              <div className="pizza-details">
                <h2>{pizza.pizzaName}</h2>
                <p>Kaina: {pizza.pizzaPrice} €</p>
                <p>Dydis: {pizza.pizzaSize} cm</p>
                <p>
                  Ingridientai:{" "}
                  {pizza.products
                    .map((product) => product.productName)
                    .join(", ")}
                </p>
              </div>
            </div>
          ))}
      </div>
      {showRandomPizza ? (
        <div className="random-pizza">
          <h2>{pizzas[randomPizzaIndex].pizzaName}</h2>
          <img
            src={base64ToImageUrl(pizzas[randomPizzaIndex].pizzaPhoto)}
            alt={pizzas[randomPizzaIndex].pizzaName}
          />
        </div>
      ) : (
        <button className="random-button" onClick={chooseRandomPizza}>
          SUŽINOK DIENOS PICĄ
        </button>
      )}
    </div>
  );
}
