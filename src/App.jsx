import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import './global.css';
import Dashboard from './Pages/Dashboard';
import Carrinho from './Pages/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/carro/:id' element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
