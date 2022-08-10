import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./components/organismes/Header";
import Footer from "./components/organismes/Footer";
import { BrowserRouter } from "react-router-dom";
import style from "./style.module.scss";
import Loader from "./components/atoms/Loader";
const CatalogPage = React.lazy(() => import("./components/pages/CatalogPage"));
const MainPage = React.lazy(() => import("./components/pages/MainPage"));
const PersonPage = React.lazy(() => import("./components/pages/PersonPage"));

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.around}>
        <Header />
        <Suspense fallback={<Loader />}>
          <div className={style.content}>
            <Routes>
              <Route path="/" element={<MainPage />} />+
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/catalog/:id" element={<PersonPage />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
