import { useState } from "react";
import axios from "axios";
import "./style.css";

export const CadastroTime = () => {
    const [formData, setFormData] = useState({
        name: "",
        localizacao: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8888/time/new",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setMessage("Time cadastrado com sucesso!");
            console.log("Time cadastrado:", response.data);

            setFormData({
                name: "",
                localizacao: "",
            });
        } catch (error) {
            
            setMessage(
                error.response?.data?.message ||
                    "Erro desconhecido ao cadastrar o time."
            );
            console.error("Erro ao cadastrar o time:", error);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: "",
            localizacao: "",
        });
        setMessage("");
    };

    return (
        <div className="register-team-container">
            <h2>Cadastro do Time</h2>
            <form className="register-team-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="localizacao">Localização</label>
                    <input
                        type="text"
                        id="localizacao"
                        name="localizacao"
                        value={formData.localizacao}
                        onChange={handleChange}
                        placeholder="Local"
                        required
                    />
                </div>

                <div className="buttons-container">
                    <button type="submit" className="register-button">
                        Cadastrar
                    </button>
                    <button
                        type="button"
                        className="clear-button"
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};
