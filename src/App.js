import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/login';
import Logout from './Pages/logout';
import Home from './Pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import ChangeThemeProvider from  "./Context/theme.provider"
import { useSelector } from 'react-redux';


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <ChangeThemeProvider >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </ChangeThemeProvider>
  );
}

export default App;
