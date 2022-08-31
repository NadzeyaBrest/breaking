import React from "react";
import style from "./style.module.scss";
import BigCard from "../../molecules/BigCard";
import loader from "../../../assets/images/loader.gif";

const PersonInfo = ({
  birthday,
  img,
  status,
  name,
  nick,
  quote,
  isLoading,
}) => {
  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <div className={style.loader}>
          <img className={style.loaderImage} src={loader} />
        </div>
      ) : (
        <BigCard
          birthday={birthday}
          img={img}
          status={status}
          name={name}
          nick={nick}
          quote={quote}
        />
      )}
    </div>
  );
};

export default PersonInfo;
