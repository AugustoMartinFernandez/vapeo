import React, { useEffect, useState } from "react";
import productosData from "../MOCK_DATA.json"; // Asegúrate de que esta ruta sea correcta

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve) => {
      resolve(productosData);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div className="producto" key={producto.id}>
          <img src={producto.pictureUrl} alt={producto.title} className="producto-imagen" />
          <h2>{producto.title}</h2>
          <p>{producto.descritption}</p>
          <p className="precio">{producto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;


