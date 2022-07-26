import "./App.scss";
// import Header from "./components/organizmes/Header/Header";
import Card from "./components/molecules/Card";

const App = () => {
  return (
    <div>
      {/* <main className="main">
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
      {/* <Header /> */}
      <Card />
    </div>
  );
};

export default App;
