import React, { useState, useEffect } from 'react';
import './style.css';
import { Registrar } from '../../components/Registrar';
import { EmptyTeam } from '../../components/EmptyTeam';
import { TeamStatics } from '../../components/TeamStatics';
import { TorcedoresTime } from '../../components/TorcedoresTime';
import { Stripes } from '../../components/Stripes';
import axios from 'axios';

function Home() {
  const [teams, setTeams] = useState([]);
  const [fans, setFans] = useState([]); // Estado para torcedores
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:8888/times');
        setTeams(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('ainda não há times no banco de dados');
          return;
        }
        console.error('Erro ao carregar os times:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchFans = async () => {
      try {
        const response = await axios.get('http://localhost:8888/torcedores');
        setFans(response.data); // Carrega torcedores
      } catch (error) {
        console.error('Erro ao carregar os torcedores:', error);
      }
    };

    fetchTeams();
    fetchFans();
  }, []);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleBack = () => {
    setSelectedTeam(null);
  };

  return (
    <main className="home">
      <div className="card-register">
        <Stripes />
        <Registrar />
      </div>

      <div className="card-team">
        {loading ? (
          <p>Carregando...</p>
        ) : teams.length > 0 ? (
          <>
            {selectedTeam ? (
              <TorcedoresTime team={selectedTeam} onBack={handleBack} />
            ) : (
              <TeamStatics teams={teams} fans={fans} onTeamSelect={handleTeamSelect} />
            )}
          </>
        ) : (
          <EmptyTeam />
        )}
      </div>
    </main>
  );
}

export default Home;
