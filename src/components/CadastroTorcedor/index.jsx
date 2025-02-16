import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const CadastroTorcedor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
<<<<<<< Updated upstream
    nome: '',
    email: '',
    telefone: '',
    time: '',
  });
  const [times, setTimes] = useState([]); // Estado para armazenar os times
  const [message, setMessage] = useState('');
=======
    nome: "",
    email: "",
    telefone: "",
    time: "",
  });
  const [times, setTimes] = useState([]); // Estado para armazenar os times
  const [message, setMessage] = useState("");
>>>>>>> Stashed changes

  useEffect(() => {
    const fetchTimes = async () => {
      try {
<<<<<<< Updated upstream
        const response = await axios.get('http://localhost:8888/times');
        setTimes(response.data);
      } catch (error) {
        console.error('Erro ao buscar times:', error);
=======
        const response = await axios.get("http://localhost:8888/times");
        setTimes(response.data);
      } catch (error) {
        console.error("Erro ao buscar times:", error);
>>>>>>> Stashed changes
      }
    };
    fetchTimes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< Updated upstream
      const response = await axios.post('http://localhost:8888/torcedor/new', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Cadastro realizado com sucesso:', response.data);

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        time: '',
      });
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar torcedor:', error);
=======
      const response = await axios.post(
        "http://localhost:8888/torcedor/new",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Cadastro realizado com sucesso:", response.data);

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        time: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar torcedor:", error);
>>>>>>> Stashed changes
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
<<<<<<< Updated upstream
      nome: '',
      email: '',
      telefone: '',
      time: '',
    });
    setMessage('');
    navigate('/');
=======
      nome: "",
      email: "",
      telefone: "",
      time: "",
    });
    setMessage("");
    navigate("/");
>>>>>>> Stashed changes
  };

  return (
    <div className="supporter-register-container">
      <h2>Cadastro de torcedor</h2>
      <form className="supporter-register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="+xx (xx) xxxxx-xxxx"
          />
        </div>
        <div className="supporter-time-container">
          <label htmlFor="team">Time</label>
<<<<<<< Updated upstream
          <select id="time" name="time" value={formData.time} onChange={handleChange} required>
=======
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
>>>>>>> Stashed changes
            <option value="">Selecione um time</option>
            {times.map((team) => (
              <option key={team.id} value={team.nome}>
                {team.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="supporter-buttons-container">
          <button type="submit" className="supporter-register-button">
            Cadastrar
          </button>
<<<<<<< Updated upstream
          <button type="button" className="supporter-clear-button" onClick={handleCancel}>
=======
          <button
            type="button"
            className="supporter-clear-button"
            onClick={handleCancel}
          >
>>>>>>> Stashed changes
            Cancelar
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};
