import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material'
import Dashboard from './layouts/Dashboard'
import themeOptions from './theme';
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

const theme = createTheme(themeOptions);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="Reports" element={<Reports />} />
        </Routes>
      </Dashboard>
    </ThemeProvider>
  )
}

export default App
