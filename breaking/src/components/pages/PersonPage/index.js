import React from "react";
import BackToCatalog from "../../atoms/BackToCatalog";
import PersonInfo from "../../organismes/PersonInfo";

const PersonPage = () => {
  return (
    <div className="wrapper">
      <BackToCatalog />
      <PersonInfo />
    </div>
  );
};
export default PersonPage;
