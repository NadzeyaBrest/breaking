import React from "react";
import { useSelector } from "react-redux";
import Search from "../../organismes/Searсh";
import CardList from "../../organismes/CardList";
import style from "./style.module.scss";
import BackToCatalog from "../../atoms/BackToCatalog";

const SearchPage = () => {
  let searchPerson = useSelector((state) => state.persons.name);
  console.log(searchPerson);
  let isLoading = useSelector((state) => state.persons.isLoading);
  return (
    <div className={style.wrapper}>
      <Search />
      <BackToCatalog />
      <div>
        {searchPerson.length == 0 && !isLoading ? (
          <div>Поиск не дал результатов</div>
        ) : (
          <CardList searchPerson={searchPerson} />
        )}
      </div>
    </div>
  );
};
export default SearchPage;
