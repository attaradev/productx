import React from "react";
import { ProductList } from "./features/products/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ProductX</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
