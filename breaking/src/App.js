import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./components/organismes/Header";
import Footer from "./components/organismes/Footer";
import { BrowserRouter } from "react-router-dom";
const CatalogPage = React.lazy(() => import("./components/pages/CatalogPage"));
const MainPage = React.lazy(() => import("./components/pages/MainPage"));
const PersonPage = React.lazy(() => import("./components/pages/PersonPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Загрузка... Жди</div>}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<PersonPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
