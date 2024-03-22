import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/Appbar";
import cities from "./data.json";
import Typography from "@mui/material/Typography";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourCard from "./components/TourCard";
import Tour from "./pages/Tour";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
