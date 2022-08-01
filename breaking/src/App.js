// import CatalogPage from "./components/pages/CatalogPage";
// import MainPage from "./components/pages/MainPage";
// import CardList from "./components/organismes/CardList";
// import Logo from "./components/atoms/Logo"
// import Picture from "./components/molecules/Picture";
// import Singl from "./components/organismes/Singl";

import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./components/organismes/Header";
import Footer from "./components/organismes/Footer";
import { BrowserRouter } from "react-router-dom";
const CardList = React.lazy(() => import("./components/organismes/CardList"));
const Picture = React.lazy(() => import("./components/molecules/Picture"));
const Singl = React.lazy(() => import("./components/organismes/Singl"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Загрузка... Жди</div>}>
        <Routes>
          <Route path="/main" element={<Picture />} />
          <Route path="/catalog" element={<CardList />} />
          <Route path="/catalog3" element={<Singl />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
