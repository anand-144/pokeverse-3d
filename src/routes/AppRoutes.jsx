import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/Landing";
import Home from "../pages/Home";
import PokedexDetails from "../pages/PokedexDetails";
import Pokedex from "../pages/Pokedex";
import Types from "../pages/Types";
import Favorites from "../pages/Favorites";
import Compare from "../pages/Compare";
import Random from "../pages/Random";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function AppRoutes() {
  const location = useLocation();

  const hideFooter = location.pathname === "/";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokedexDetails />} />
        <Route path="/types" element={<Types />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare/:id" element={<Compare />} />
        <Route path="/random" element={<Random />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default AppRoutes;