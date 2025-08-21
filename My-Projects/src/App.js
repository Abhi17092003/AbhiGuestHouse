import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./componantes/Header";
import Footer from "./componantes/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>


      </Routes>
      <Footer />
    </>
  );
}

export default App;
