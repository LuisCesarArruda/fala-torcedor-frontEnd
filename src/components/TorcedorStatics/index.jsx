<<<<<<< Updated upstream
import P from 'prop-types';

import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const TorcedorStatics = ({ fans }) => {
=======
import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const TorcedorStatics = ({ fans = [] }) => {
>>>>>>> Stashed changes
  const navigate = useNavigate();
  const handleEditClick = (fanId) => {
    navigate(`/editarTorcedor/${fanId}`);
  };
  return (
    <div className="fans-list">
      {fans.length > 0 ? (
        fans.map((fan, index) => (
          <div key={index} onClick={() => handleEditClick(fan.id)} className="fan-div">
            <span className="fan-name">{fan.nome}</span>
          </div>
        ))
      ) : (
        <p>Nenhum torcedor cadastrado</p>
      )}
    </div>
  );
<<<<<<< Updated upstream
};

TorcedorStatics.propTypes = {
  fans: P.array.isRequired,
=======
>>>>>>> Stashed changes
};
