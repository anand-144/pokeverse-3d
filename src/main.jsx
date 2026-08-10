import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { AudioProvider } from "./context/AudioContext";

import "./index.css";
import { PokedexProvider } from "./context/PokedexContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AudioProvider>
        <PokedexProvider>
          <App />
        </PokedexProvider>
      </AudioProvider>
    </ThemeProvider>
  </BrowserRouter>
);