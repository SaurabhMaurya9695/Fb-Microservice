import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/login';
import Logout from './Pages/logout';
import Home from './Pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import Register from './Pages/register';
import Profile from './Component/Profile/profile';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const token = useSelector((state) => state.token);
  
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            {token ? 
            (
              <>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
              </>
            )
              : <Route path="/" element={<Logout/>} />}
            <Route path="/register" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/login" element={<Register/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
