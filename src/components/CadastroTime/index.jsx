<<<<<<< Updated upstream
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const CadastroTime = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    localizacao: '',
    serie: '',
  });

  const [message, setMessage] = useState('');
=======
import { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import React from "react";
export const CadastroTime = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    localizacao: "",
    serie: "",
  });

  const [message, setMessage] = useState("");
>>>>>>> Stashed changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
<<<<<<< Updated upstream
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8888/time/new',
        {
          nome: formData.nome,
          localizacao: formData.localizacao,
          serie: formData.serie,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Cadastro realizado com sucesso:', response.data);
      setMessage('Time cadastrado com sucesso!');

      setFormData({
        nome: '',
        localizacao: '',
        serie: '',
      });
      navigate('/');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Erro desconhecido ao cadastrar o time.');
      console.error('Erro ao cadastrar o time:', error);
    }
  };

  const handleCancel = () => {
    setFormData({
      nome: '',
      localizacao: '',
      serie: '',
    });
    setMessage('');
    navigate('/');
  };

=======
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8888/time/new",
        {
          nome: formData.nome,
          localizacao: formData.localizacao,
          serie: formData.serie,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Cadastro realizado com sucesso:", response.data);
      setMessage("Time cadastrado com sucesso!");

      setFormData({
        nome: "",
        localizacao: "",
        serie: "",
      });
      navigate("/");
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
      nome: "",
      localizacao: "",
      serie: "",
    });
    setMessage("");
    navigate("/");
  };

>>>>>>> Stashed changes
  return (
    <div className="form-container">
      <h2>Cadastro do Time</h2>
      <form className="form-label" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Time</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Time"
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
        <div>
          <label htmlFor="serie">Série</label>
          <input
            type="text"
            id="serie"
            name="serie"
            value={formData.serie}
            onChange={handleChange}
            placeholder="Série"
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="button-register">
            Cadastrar
          </button>
          <button type="button" className="button-clear" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
