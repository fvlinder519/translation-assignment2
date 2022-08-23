import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Translation from "./views/Translation";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    light: "#b5838d",
  },
});

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
