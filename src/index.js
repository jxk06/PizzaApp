import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    description: "Bread with Italian olive oil and rosemary",
    price: 6,
    image: "/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    description: "Tomato and mozzarella",
    price: 10,
    image: "/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    description: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    image: "/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    description: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    image: "/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    description: "Tomato, mozzarella, and pepperoni",
    price: 15,
    image: "/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    description: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    image: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour <= 22;

  const [searchText, setSearchText] = useState("");
  const [favourites, setFavourites] = useState([]);

  function toggleFavourite(name) {
    setFavourites((prev) =>
      prev.includes(name)
        ? prev.filter((p) => p !== name)
        : [...prev, name]
    );
  }

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="container">
      <Header isOpen={isOpen} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Menu
        pizzaData={filteredPizzas}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      <Footer isOpen={isOpen} />
    </main>
  );
}

function Header({ isOpen }) {
  return (
    <header className="header">
      <h1>Jing Xi's Pizza Co.</h1>
      {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
    </header>
  );
}

function Search({ searchText, setSearchText }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search pizzas..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </section>
  );
}

function Menu({ pizzaData, favourites, toggleFavourite }) {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length === 0 ? (
        <p>No pizzas match your search.</p>
      ) : (
        <ul className="pizza-list">
          {pizzaData.map((pizza, index) => (
            <Pizza
              key={index}
              {...pizza}
              isFavourite={favourites.includes(pizza.name)}
              toggleFavourite={() => toggleFavourite(pizza.name)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function Pizza({ name, image, description, price, soldOut, isFavourite, toggleFavourite }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} alt={name} />
      <div className="pizza-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">${price}</p>

        {!soldOut && (
          <button className="fav-btn" onClick={toggleFavourite}>
            {isFavourite ? "★ Favourite" : "☆ Add Favourite"}
          </button>
        )}

        {soldOut && <span className="sold-out-text">Sold Out</span>}
      </div>
    </li>
  );
}

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn order-btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




