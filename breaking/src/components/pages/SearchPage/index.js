import React from "react";
import { useSelector } from "react-redux";
import Search from "../../organismes/Searсh";
import Card from "../../molecules/Card";
import CardList from "../../organismes/CardList";
import style from "./style.module.scss";
import BackToCatalog from "../../atoms/BackToCatalog";

const SearchPage = () => {
  let searchPerson = useSelector((state) => state.persons.name);

  return (
    <div>
      <Search />
      <BackToCatalog />
      <div className={style.wrapper}>
        {searchPerson.length === 0 ? (
          <div>Ваш поиск не дал результата</div>
        ) : (
          searchPerson.map((card) => {
            return (
              <div>
                <Card
                  key={card.char_id}
                  id={card.char_id}
                  img={card.img}
                  status={card.status}
                  name={card.name}
                  date={card.date}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default SearchPage;
