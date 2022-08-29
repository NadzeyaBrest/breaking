// import React, { useState } from "react";
// import style from "./style.module.scss";
// import squares2Grey from "../../../assets/images/squares2Grey.svg";
// import squares2Yellow from "../../../assets/images/squares2Yellow.svg";
// import squares4Grey from "../../../assets/images/squares4Grey.svg";
// import squares4Yellow from "../../../assets/images/squares4Yellow.svg";

// import { useDispatch } from "react-redux";
// import { persons } from "../../../store/reducers/persons";

// const CatalogLook = () => {
//   let [toggled, setToggled] = useState(true);
//   console.log(toggled);
//   let dispatch = useDispatch();
//   let setToggledIntoState = (value) => {
//     setToggled(value);
//     dispatch(persons.actions.setToggledIntoState(value));
//   };

//   let firstButton = !toggled ? squares2Yellow : squares2Grey;
//   let secondButton = toggled ? squares4Yellow : squares4Grey;
//   let opacity = toggled ? style.opacityForButton : "";
//   return (
//     <div className={style.container}>
//       <span className={style.catalog}>Каталог</span>
//       <div className={style.buttonsContainer}>
//         <button className={opacity} onClick={() => setToggledIntoState(false)}>
//           <img src={firstButton} alt="button" />
//         </button>
//         <button onClick={() => setToggledIntoState(true)}>
//           <img src={secondButton} alt="button" />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default CatalogLook;
export { container as default } from "./container";
