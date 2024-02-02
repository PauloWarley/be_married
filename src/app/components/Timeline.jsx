// components/Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div>
      <h2>Linha do Tempo</h2>
      <ul className="timeline">
        <li>
          <div className="timeline-content">
            <h3>Período de Gelo</h3>
            <p>01/11/2023 - 03/01/2024</p>
            <br />
            <p>Um tempo de descoberta e amadurecimento espiritual.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3>Período de Oração</h3>
            <p>06/01/2024 - 29/01/2024</p>
            <br />
            <p>Busca conjunta pela orientação divina para a jornada a dois.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3>Tempo de Namoro</h3>
            <p>30/01/2024 - 30/04/2024</p>
            <br />
            <p>Uma fase especial de construção de laços e cumplicidade.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3>Tempo de Noivado</h3>
            <p>30/01/2024 - 16/07/2024</p>
            <br />
            <p>Compromisso mútuo e preparação para a vida matrimonial.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3>Tempo de Casamento</h3>
            <p>16/07/2024 - Eternidade</p>
            <br />
            <p>O início de uma jornada eterna de amor e companheirismo.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
