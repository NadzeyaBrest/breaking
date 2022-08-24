import React from "react";
import { useSelector } from "react-redux";
import Search from "../../organismes/Searсh";
import CardList from "../../organismes/CardList";
import style from "./style.module.scss";
import BackToCatalog from "../../atoms/BackToCatalog";
import loader from "../../../assets/images/loader.gif";

const SearchPage = () => {
  let searchPerson = useSelector((state) => state.persons.name);
  console.log(searchPerson);
  let isLoading = useSelector((state) => state.persons.isLoading);
  return (
    <div className={style.wrapper}>
      <Search />
      <BackToCatalog />
      <div>
        {
          // этот вариант без информации, что поиск не найден
          // isLoading ? (
          //   <div className={style.loader}>
          //     <img className={style.loaderImage} src={loader} />
          //   </div>
          // ) : (
          //   <CardList searchPerson={searchPerson} />
          // )
          //
          // а вот здесь vc у меня стирает круглые скобочки, которыми я хочу второй тернарный оградить и снова утка постоянная гуляет
          // isLoading ? (
          //   <div className={style.loader}>
          //     <img className={style.loaderImage} src={loader} />
          //   </div>
          // ) :
          // (searchPerson.length === 0 ? (
          //   <div>Поиск не дал результатов</div>
          // ) : (
          //   <CardList searchPerson={searchPerson} />
          // ))
        }
      </div>
    </div>
  );
};
export default SearchPage;
