import React, { useState, useEffect } from "react";
import "./style.css";
import { Registrar } from "../../components/Registrar";
import { EmptyTeam } from "../../components/EmptyTeam";
import { TeamStatics } from "../../components/TeamStatics";
import { Stripes } from "../../components/Stripes";
import axios from "axios";

function Home() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get("/times");
                setTeams(response.data);
            } catch (error) {
                console.error("Erro ao carregar os times:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchTeams(); 
    }, []); 

    return (
        <main className="home">
            <div className="card-register">
                <Stripes />
                <Registrar />
            </div>

            <div className="card-team">
                
                {loading && <p>Carregando...</p>}

                
                {teams.length > 0 ? (
                    <TeamStatics teams={teams} />
                ) : (
                    <EmptyTeam />
                )}
            </div>
        </main>
    );
}

export default Home;
