import "./style.css";

export const TeamStatics = ({ teams, onTeamSelect }) => {
    return (
        <div className="team-statistics-container">
            <h2>Times Cadastrados</h2>
            <div className="teams-list">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className="team-card"
                        onClick={() => onTeamSelect(team)}
                    >
                        <span className="team-name">{team.nome}</span>
                        <span className="team-localizacao">local: {team.localizacao}</span>
                        <span className="team-fans">torcedores: {team.qntdtorcedor}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
