import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt corrupti reiciendis eos
                        eveniet est ipsa voluptates neque. Quo et vel ea ut dignissimos iure cum at, omnis rem dolore?
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.name} pizzaObj={pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>Come back later.</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHoure = 20;
    const closeHoure = 23;
    const isOpen = hour >= openHoure && hour <= closeHoure;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHoure={closeHoure} />
            ) : (
                <p>
                    We're happy to welcome you between {openHoure}:00 and {closeHoure}:00.
                </p>
            )}
        </footer>
    );
    // return React.createElement('footer', null, "We 'r corrently open!");
}

function Order({ closeHoure }) {
    return (
        <div className="order">
            <p>We're open until {closeHoure}:00. come visit us order</p>
            <button className="btn">order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
