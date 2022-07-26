import "./App.css";
// import Header from "./components/header/header";
import Face from "./components/face/Face";

const App = () => {
  return (
    <div>
      {/* <Header />
      <main className="main">
        <div className="wrapper">
          <div className="main__input">
            <input
              className="input__text"
              type="text"
              placeholder="Поиск"
            ></input>
            <input className="button input__button" type="button">
              <span className="input__button_img"></span>
              <span className="input__button_text">Найти</span>
            </input>
          </div>
          <div className="main__catalog-title"></div>
        </div>
        
      </main> */}
      <Face />
    </div>
  );
};

export default App;
