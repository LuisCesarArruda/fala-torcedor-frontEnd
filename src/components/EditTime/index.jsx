import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

export const EditarTime = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        localizacao: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8888/time/${id}`
                );

                setFormData({
                    id: response.data.id,
                    nome: response.data.nome || "",
                    localizacao: response.data.localizacao || "",
                    
                });
            } catch (error) {
                console.error("Erro ao carregar time:", error);
                alert("Erro ao carregar os dados do time.");
            }
        };

        if (id) {
            fetchTime();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        const { id, nome, localizacao } = formData;

        try {
            await axios.put(`http://localhost:8888/time/${id}`, {
                nome,
                localizacao,
            });
            alert("Informações atualizadas com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao salvar time:", error);
            
        }
    };

    const handleCancel = () => {
        navigate("/"); 
    };

    const handleDelete = async () => {
        const { id } = formData;

        const confirmDelete = window.confirm(
            "Tem certeza que deseja excluir este time?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8888/time/${id}`);
            alert("time excluído com sucesso!");
            navigate("/"); 
        } catch (error) {
            console.error("Erro ao deletar time:", error);
            alert("Erro ao excluir o time.");
        }
    };

    return (
        <div className="edit-team-container">
            <h2>Editar time</h2>
            <form>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome || ""}
                    onChange={handleInputChange}
                />
                <label>localização:</label>
                <input
                    type="localizacao"
                    name="localizacao"
                    value={formData.localizacao || ""}
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
