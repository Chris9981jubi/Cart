
import React from 'react';
import './ShoppingCart'; // If you have global styles
import ShoppingCart from './ShoppingCart'; // Importing the ShoppingCart component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Shopping App</h1>
      </header>
      <main>
        <ShoppingCart />
      </main>
    </div>
  );
}

export default App;
