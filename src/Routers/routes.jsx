

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index.jsx';
import Info from '../Pages/Info/index.jsx';
import Lista from '../Pages/Lista/index.jsx';
import Denuncia from '../Pages/Denuncia/index.jsx';
import Login from '../Pages/Login/index.jsx';
import Register from '../Pages/Register/index.jsx';
import Sobre from '../Pages/Sobre/index.jsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />  {/* Definindo a rota principal como Login */}
                <Route path="/home" element={<Home />} />
                <Route path="/informacao" element={<Info />} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/fazerdenuncia" element={<Denuncia />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sobre" element={<Sobre />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
