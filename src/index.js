import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza2 />
        </div>
    )
}

function Header() {
    return (
        <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>Jing Xi's Pizza Co.</h1>

    )
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
    return (
        <footer className="footer">
            {isOpen ? "We're currently open" : "Sorry we're closed"}
        </footer>
    );
}

//function Footer() {
    //const currentHour = new Date().getHours();
   // return (
        //<footer className="footer">
            //{currentHour >= 10 && currentHour < 22 ? "We're currently open" : "Sorry we're closed"}
        //</footer>
    //);
//}





function Pizza() {
    return (
        <div>
            <img src="/pizzas/focaccia.jpg" alt="focaccia" />
             <h3> Focaccia</h3>
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
            <h3> Funghi Pizza</h3>
            <div>
                <p>Tomato, Onion, Cheese</p>
                <p>10</p>
            </div>


        </div>
        
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
