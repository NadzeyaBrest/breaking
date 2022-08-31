import React from "react";
import Logo from "../../atoms/Logo";
import Button from "../../molecules/Button";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <Logo />
        <Button />
      </header>
    </div>
  );
};
export default Header;
