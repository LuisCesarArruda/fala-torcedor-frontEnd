import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

export const EditarTime = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
<<<<<<< Updated upstream
    id: '',
    nome: '',
    localizacao: '',
    divisao: '',
=======
    id: "",
    nome: "",
    localizacao: "",
    divisao: "",
>>>>>>> Stashed changes
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/time/${id}`);

        setFormData({
          id: response.data.id,
<<<<<<< Updated upstream
          nome: response.data.nome || '',
          localizacao: response.data.localizacao || '',
          divisao: response.data.divisao || '',
        });
      } catch (error) {
        console.error('Erro ao carregar time:', error);
        alert('Erro ao carregar os dados do time.');
=======
          nome: response.data.nome || "",
          localizacao: response.data.localizacao || "",
          divisao: response.data.divisao || "",
        });
      } catch (error) {
        console.error("Erro ao carregar time:", error);
        alert("Erro ao carregar os dados do time.");
>>>>>>> Stashed changes
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
    const { id, nome, localizacao, divisao } = formData;

    try {
      await axios.put(`http://localhost:8888/time/${id}`, {
        nome,
        localizacao,
        divisao,
      });
<<<<<<< Updated upstream
      alert('Informações atualizadas com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar time:', error);
=======
      alert("Informações atualizadas com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao salvar time:", error);
>>>>>>> Stashed changes
    }
  };

  const handleCancel = () => {
<<<<<<< Updated upstream
    navigate('/');
=======
    navigate("/");
>>>>>>> Stashed changes
  };

  const handleDelete = async () => {
    const { id } = formData;

<<<<<<< Updated upstream
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este time?');
=======
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este time?"
    );
>>>>>>> Stashed changes

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8888/time/${id}`);
<<<<<<< Updated upstream
      alert('time excluído com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao deletar time:', error);
      alert('Erro ao excluir o time.');
=======
      alert("time excluído com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar time:", error);
      alert("Erro ao excluir o time.");
>>>>>>> Stashed changes
    }
  };

  return (
    <div className="edit-team-container">
      <h2>Editar time</h2>
      <form>
        <div>
          <label>Time:</label>
<<<<<<< Updated upstream
          <input type="text" name="nome" value={formData.nome || ''} onChange={handleInputChange} />
=======
          <input
            type="text"
            name="nome"
            value={formData.nome || ""}
            onChange={handleInputChange}
          />
>>>>>>> Stashed changes
        </div>
        <div>
          <label>localização:</label>
          <input
            type="localizacao"
            name="localizacao"
<<<<<<< Updated upstream
            value={formData.localizacao || ''}
=======
            value={formData.localizacao || ""}
>>>>>>> Stashed changes
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Divisao:</label>
<<<<<<< Updated upstream
          <input type="divisao" name="divisao" value={formData.divisao || ''} onChange={handleInputChange} />
=======
          <input
            type="divisao"
            name="divisao"
            value={formData.divisao || ""}
            onChange={handleInputChange}
          />
>>>>>>> Stashed changes
        </div>

        <div className="buttons-container">
          <button type="button" onClick={handleSave} className="save-button">
            Salvar
          </button>
<<<<<<< Updated upstream
          <button type="button" onClick={handleCancel} className="cancel-button">
            Voltar
          </button>
          <button type="button" onClick={handleDelete} className="delete-button">
=======
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
>>>>>>> Stashed changes
            Deletar
          </button>
        </div>
      </form>
    </div>
  );
};
