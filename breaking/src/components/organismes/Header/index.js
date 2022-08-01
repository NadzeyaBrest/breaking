import React from "react";
import Logo from "../../atoms/Logo";
import Button from "../../molecules/Button";
import style from "./style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Button />
    </header>
  );
};
export default Header;
