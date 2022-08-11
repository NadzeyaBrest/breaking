// import React, { useEffect, useState } from "react";
// import style from "./style.module.scss";
// import { persons } from "../../../store/reducers/persons";
// import { useDispatch } from "react-redux/es/exports";

// const SwitchNumberOfCard = () => {
//   const [buttons] = useState([10, 15, 20, 25, 30]);

//   const dispatch = useDispatch();
//   const changeStateLimit = (limit) => {
//     dispatch(persons.actions.setLimit(limit));
//   };

//   let btnElement = buttons.map((item) => {
//     return (
//       <button onClick={() => changeStateLimit(item)} className={style.button}>
//         {item}
//       </button>
//     );
//   });
//   return (
//     <div className={style.container}>
//       <span>Отобразить карточек</span>

//       <div>{btnElement}</div>
//     </div>
//   );
// };

// export default SwitchNumberOfCard;
export { container as default } from "./container";
