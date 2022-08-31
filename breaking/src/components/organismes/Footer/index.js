import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <footer className={style.footer}>
        <span className={style.text}>{year}</span>
        <span>@Bacanava Nadzeya</span>
      </footer>
    </div>
  );
};

export default Footer;
