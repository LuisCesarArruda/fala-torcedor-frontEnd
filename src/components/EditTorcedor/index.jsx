import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

export const EditarTorcedor = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        email: "",
        telefone: "",
    });
    const navigate = useNavigate(); // Hook para navegação programática

    useEffect(() => {
        const fetchTorcedor = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8888/torcedor/${id}`
                );

                setFormData({
                    id: response.data.id,
                    nome: response.data.nome || "",
                    email: response.data.email || "",
                    telefone: response.data.telefone || "",
                });
            } catch (error) {
                console.error("Erro ao carregar torcedor:", error);
                alert("Erro ao carregar os dados do torcedor.");
            }
        };

        if (id) {
            fetchTorcedor();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        const { id, nome, email, telefone } = formData;

        try {
            await axios.put(`http://localhost:8888/torcedor/${id}`, {
                nome,
                email,
                telefone,
            });
            alert("Informações atualizadas com sucesso!");
            navigate("/"); // Navega de volta para a Home após salvar
        } catch (error) {
            console.error("Erro ao salvar torcedor:", error);
            alert("Erro ao salvar as informações.");
        }
    };

    const handleCancel = () => {
        navigate("/"); // Navega de volta para a Home ao cancelar
    };

    const handleDelete = async () => {
        const { id } = formData;

        const confirmDelete = window.confirm(
            "Tem certeza que deseja excluir este torcedor?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8888/torcedor/${id}`);
            alert("Torcedor excluído com sucesso!");
            navigate("/"); // Navega para a Home após a exclusão
        } catch (error) {
            console.error("Erro ao deletar torcedor:", error);
            alert("Erro ao excluir o torcedor.");
        }
    };

    return (
        <div className="edit-fan-container">
            <h2>Editar Torcedor</h2>
            <form>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome || ""}
                    onChange={handleInputChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                />
                <label>Telefone:</label>
                <input
                    type="text"
                    name="telefone"
                    value={formData.telefone || ""}
                    onChange={handleInputChange}
                />
                <div className="buttons-container">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="save-button"
                    >
                        Salvar
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="cancel-button"
                    >
                        Voltar
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="delete-button"
                    >
                        Deletar
                    </button>
                </div>
            </form>
        </div>
    );
};
