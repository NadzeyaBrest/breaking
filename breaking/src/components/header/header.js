import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header_wrapper">
        <div className="header__logo">
          <img className="logo" src="#" alt="logo"></img>
        </div>
        <button className="button header__button header__button_bright">
          <span className="burger">
            <span className="burger__line"></span>
          </span>
          <span className="button__text">Каталог</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
