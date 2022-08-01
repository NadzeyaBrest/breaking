import React from "react";
import style from "./style.module.scss";
import mainWebp from "../../../assets/images/mainWebp.webp";
import mainJpg from "../../../assets/images/main.jpg";

const Picture = () => {
  return (
    <picture className={style.main}>
      <source type="image/webp" srcSet={mainWebp} />
      <source type="image/jpg" srcSet={mainJpg} />
      <img src={mainWebp} alt="Изображение" />
    </picture>
  );
};
export default Picture;
