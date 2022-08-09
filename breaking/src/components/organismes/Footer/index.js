import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={style.footer}>
      <span className={style.text}>{year}</span>
      <span>@Bacanava Nadzeya</span>
    </footer>
  );
};

export default Footer;
