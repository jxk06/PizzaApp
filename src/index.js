import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <Header />
            <Pizza />
            <Pizza2 />
        </div>
    )
}

function Header() {
    return (
        <h1>Jing Xi's Pizza Co.</h1>

    )
}

function Pizza() {
    return (
        <div>
            <img src="/pizzas/focaccia.jpg" alt="focaccia" />
             <h2> Focaccia</h2>
            <div>
                <p>Olive oil</p>
                <p>5</p>
            </div>
            


        </div>
        
    )
}

function Pizza2() {
    return (
        <div>
            <img src="/pizzas/funghi.jpg" alt="funghi" />
            <h2> Funghi Pizza</h2>
            <div>
                <p>Tomato, Onion, Cheese</p>
                <p>10</p>
            </div>


        </div>
        
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
