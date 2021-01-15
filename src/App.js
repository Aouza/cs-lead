import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStorage } from "./hooks/GlobalContext";
import Routes from "./routes";
import GlobalStyle from "./styles/";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes />
      </GlobalStorage>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
