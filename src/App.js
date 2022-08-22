import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Translation from "./views/Translation";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
