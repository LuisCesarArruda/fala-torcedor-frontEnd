import HomeLogo from "../../assets/HomeLogo.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Registrar = () => {
    const navigate = useNavigate();

    const handleCadastroTime = () => {
        navigate("/time");
    };

    const handleCadastroTorcedor = () => {
        navigate("/torcedor");
    };
    return (
        <div className="register-box">
            <img src={HomeLogo} alt="foto de um estadio de futebol" />

            <div className="container-text">
                <h1>Fala Torcedor!</h1>
                <p>se conecte com seu time ou seus torcedores!</p>
            </div>

            <div className="container-btn">
                <button onClick={handleCadastroTime}>Cadastro Time</button>
                <button onClick={handleCadastroTorcedor}>
                    Cadastro Torcedor
                </button>
            </div>
        </div>
    );
};
