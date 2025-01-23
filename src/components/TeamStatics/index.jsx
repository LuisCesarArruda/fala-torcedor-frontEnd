import React, { useState } from "react";
import "./style.css";
import { TorcedorStatics } from "../TorcedorStatics";

export const TeamStatics = ({ teams, fans, onTeamSelect }) => {
    const [activeSerie, setActiveSerie] = useState("A");
    const [view, setView] = useState("teams"); 
    const series = ["A", "B", "C", "D"];

    const filteredTeams = teams.filter((team) => team.divisao === activeSerie);

    console.log("Fans recebidos no TeamStatics:", fans); 

    return (
        <div className="team-statistics-container">
            <div className="header">
                <h2>{view === "teams" ? "Times Cadastrados" : "Torcedores Cadastrados"}</h2>
                <button
                    className="toggle-view-button"
                    onClick={() => setView(view === "teams" ? "fans" : "teams")}
                >
                    {view === "teams" ? "➡️ Torcedores" : "⬅️ Times"}
                </button>
            </div>

            {view === "teams" && (
                <div className="tabs">
                    {series.map((serie) => (
                        <button
                            key={serie}
                            className={`tab-button ${activeSerie === serie ? "active" : ""}`}
                            onClick={() => setActiveSerie(serie)}
                        >
                            Série {serie}
                        </button>
                    ))}
                </div>
            )}

            <div className="list">
                {view === "teams" ? (
                    filteredTeams.length > 0 ? (
                        filteredTeams.map((team, index) => (
                            <div
                                key={index}
                                className="team-card"
                                onClick={() => onTeamSelect(team)}
                            >
                                <span className="team-name">{team.nome}</span>
                                <span className="team-localizacao">{team.localizacao}</span>
                                <span className="team-fans">
                                    Torcedores: {team.qntdtorcedor}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum time cadastrado na Série {activeSerie}</p>
                    )
                ) : (
                    <TorcedorStatics fans={fans || []} /> 
                )}
            </div>
        </div>
    );
};
