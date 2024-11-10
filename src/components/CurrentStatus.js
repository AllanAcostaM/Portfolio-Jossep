// CurrentStatus.js
import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaBook, FaWrench } from "react-icons/fa";

// Definición de los estados y sus íconos correspondientes
const states = [
  { text: "Working on future game versions with AI", icon: <FaLaptopCode /> },
  { text: "Improving skills in UI animations in Unity", icon: <FaBook /> },
  { text: "Exploring advanced shading and materials in Unity", icon: <FaWrench /> },
];

function CurrentStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia el estado cada 4 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % states.length);
    }, 4000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  const { text, icon } = states[currentIndex];

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "10px", color: "white" }}>
      <div className="status-icon" style={{ marginBottom: "20px" }}>{icon}</div>
      <p className="status-text">{text}</p>
    </div>
  );
}

export default CurrentStatus;