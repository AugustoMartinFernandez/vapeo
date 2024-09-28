import React from 'react';
import './App.css'; // Aquí puedes agregar estilos propios
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting="¡Bienvenidos a Vapeo 3.5!" /> 
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;


