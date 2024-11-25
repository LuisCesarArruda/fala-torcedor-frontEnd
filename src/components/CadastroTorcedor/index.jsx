import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";
import "./style.css";

export const CadastroTorcedor = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        team: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post(
                "/torcedor/new",
                formData
            ); 
            console.log("Cadastro realizado com sucesso:", response.data);

            setFormData({
                name: "",
                email: "",
                phone: "",
                team: "",
            });
        } catch (error) {
            console.error("Erro ao cadastrar torcedor:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="register-supporter-container">
            <h2>Cadastro de torcedor</h2>
            <form className="register-supporter-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="phone">Telefone</label>
                    <PhoneInput
                        id="phone"
                        name="phone"
                        defaultCountry="br"
                        value={formData.phone}
                        onChange={(phone) =>
                            setFormData({ ...formData, phone })
                        }
                    />
                </div>
                <div className="time-container">
                    <label htmlFor="team">Time</label>
                    <input
                        type="text"
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        placeholder="Time"
                        required
                    />
                </div>

                <div className="buttons-container">
                    <button type="submit" className="register-button">
                        Cadastrar
                    </button>
                    <button type="button" className="clear-button">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};
