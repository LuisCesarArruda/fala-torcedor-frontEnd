import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Home from './templates/home/Home';
import { Registrar } from './components/Registrar';
import { CadastroTime } from './components/CadastroTime';
import { CadastroTorcedor } from './components/CadastroTorcedor';
import {EditarTorcedor} from "./components/EditTorcedor"
import {EditarTime} from "./components/EditTime"
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/time" element={<CadastroTime />} />
        <Route path="/torcedor" element={<CadastroTorcedor />} />
        <Route path="/editarTorcedor/:id" element={<EditarTorcedor />} />
        <Route path="/editartime/:id" element={<EditarTime />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
