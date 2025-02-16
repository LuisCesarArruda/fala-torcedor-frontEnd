import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

import P from 'prop-types';

export const TorcedoresTime = ({ team, onBack }) => {
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFans = async () => {
      try {
<<<<<<< Updated upstream
        const response = await axios.get(`http://localhost:8888/torcedor/time/${team.nome}`);
        setFans(response.data);
      } catch (error) {
        console.error('Erro ao carregar torcedores:', error);
=======
        const response = await axios.get(
          `http://localhost:8888/torcedor/time/${team.nome}`
        );
        setFans(response.data);
      } catch (error) {
        console.error("Erro ao carregar torcedores:", error);
>>>>>>> Stashed changes
      } finally {
        setLoading(false);
      }
    };

    if (team) {
      fetchFans();
    }
  }, [team]);

  const handleEditTeam = () => {
    navigate(`/editartime/${team.id}`);
  };

  return (
    <div className="team-fans-container">
      <h2>Torcedores de {team.nome}</h2>
      <div className="fans-list">
        {loading ? (
          <p>Carregando torcedores...</p>
        ) : fans.length > 0 ? (
          fans.map((fan) => (
            <div key={fan.id} className="fan-card">
<<<<<<< Updated upstream
              <span>{fan.nome}</span>{' '}
=======
              <span>{fan.nome}</span>{" "}
>>>>>>> Stashed changes
            </div>
          ))
        ) : (
          <p>Não há torcedores cadastrados para este time.</p>
        )}
      </div>
      <div className="editbutton-container">
        <button type="button" className="edit-button" onClick={handleEditTeam}>
          editar time
        </button>
        <button type="button" className="clear-button" onClick={onBack}>
          Voltar
        </button>
      </div>
    </div>
  );
<<<<<<< Updated upstream
};

TorcedoresTime.propTypes = {
  team: P.array.isRequired,
  onBack: P.func,
=======
>>>>>>> Stashed changes
};
