import React from "react";
import datosDeEnvios from "./database"; // Asegúrate de tener la ruta correcta al archivo database.js
import "./App.css";
import {
  faWarehouse,
  faBars,
  faLocationDot,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pantalla = () => {
  return (
    <div className="pantalla">
      <header className="header-black">
        <h1>Bodega</h1>
      </header>
      <div className="listaEnvios">
        {datosDeEnvios.map((envio, index) => (
          <div key={index} className="envio">
            <div className="infoLeft">
              <p>
                <strong>{envio.numeroGuia}</strong>{" "}
              </p>
              <p>{envio.fechaIngreso}</p>
              <p>{envio.descripcion}</p>
            </div>
            <p className="peso">
              {" "}
              <strong> {envio.peso} LB</strong>
            </p>
          </div>
        ))}
      </div>
      <div className="footer">
        <FontAwesomeIcon icon={faWarehouse} size="lg" color="gray" />
        <FontAwesomeIcon icon={faBoxOpen} size="lg" color="gray" />
        <FontAwesomeIcon icon={faLocationDot} size="lg" color="gray" />
        <FontAwesomeIcon icon={faBars} size="lg" color="gray" />
      </div>
    </div>
  );
};

export default Pantalla;
