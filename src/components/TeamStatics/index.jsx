import "./style.css"
const teamsData = [
    { name: "Team A", fans: 500 },
    { name: "Team B", fans: 450 },
    { name: "Team C", fans: 300 },
    { name: "Team D", fans: 250 },
    { name: "Team E", fans: 200 },
];

export const TeamStatics = () => {
    return (
        <div className="team-statistics-container">
            <h2>Times Cadastrados</h2>
            <div className="teams-list">
                {teamsData.map((team, index) => (
                    <div key={index} className="team-card">
                        <span className="team-name">{team.name}</span>
                        <span className="team-fans">Fans: {team.fans}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
