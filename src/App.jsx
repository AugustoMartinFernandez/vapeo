import React from 'react';
import './App.css'; // Aquí puedes agregar estilos propios
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting="¡Bienvenidos a nuestro E-commerce!" /> 
    </div>
  );
}

export default App;


