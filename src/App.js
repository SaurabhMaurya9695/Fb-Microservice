import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/login';
import Logout from './Pages/logout';
import Home from './Pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
