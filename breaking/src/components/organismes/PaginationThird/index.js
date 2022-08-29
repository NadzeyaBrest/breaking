// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAmount } from "../../../store/actions/persons";
// import style from "./style.module.scss";
// import arrow from "../../../assets/images/arrow.svg";
// import { persons } from "../../../store/reducers/persons";
// import { useState } from "react";
// import { getTotalQuote } from "../../../store/actions/persons";

// const PaginationThird = () => {
//   let dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAmount());
//   }, []);

//   let totalPersons = useSelector((state) => state.persons.totalAmountPersons);
//   let limit = useSelector((state) => state.persons.limit);

//   let totalPersonAmount = totalPersons.length;
//   let buttonAmount = Math.ceil(totalPersonAmount / limit) || 5;
//   let arrayOfButtons = [];

//   for (let i = 1; i <= buttonAmount; i++) {
//     arrayOfButtons.push(i);
//   }
//   let setCurrentButtonPagination = (e, page) => {
//     if (e.target.innerHTML === "...") return;
//     dispatch(persons.actions.setCurrentButton(page));
//     let offset = page * limit - limit;
//     dispatch(persons.actions.setOffset(offset));
//   };
//   let setCurrentButtonPaginationViaArrayRight = () => {
//     currentButton =
//       currentButton === arrayOfButtons.length
//         ? arrayOfButtons.length
//         : currentButton + 1;
//     dispatch(persons.actions.setCurrentButton(currentButton));
//     let offset = currentButton * limit - limit;
//     dispatch(persons.actions.setOffset(offset));
//   };
//   let setCurrentButtonPaginationViaArrayLeft = () => {
//     currentButton = currentButton === 1 ? 1 : currentButton - 1;
//     dispatch(persons.actions.setCurrentButton(currentButton));
//     let offset = currentButton * limit - limit;
//     dispatch(persons.actions.setOffset(offset));
//   };
//   let currentButton = useSelector(
//     (state) => state.persons.currentButtonPagination
//   );

//   const [PaginationArray, setPaginationArray] = useState([]);
//   useEffect(() => {
//     let dotsInitial = "...";
//     let dotsRight = "... ";
//     let dotsLeft = " ...";
//     let tempArrayOfButtons = [...arrayOfButtons];
//     if (currentButton > arrayOfButtons.length) {
//       currentButton = arrayOfButtons.length;
//     } else if (arrayOfButtons.length < 5) {
//       tempArrayOfButtons = arrayOfButtons;
//     } else if (currentButton >= 1 && currentButton <= 2) {
//       tempArrayOfButtons = [1, 2, 3, dotsInitial, arrayOfButtons.length];
//     } else if (currentButton === 3) {
//       let sliced = arrayOfButtons.slice(0, 4);
//       tempArrayOfButtons = [...sliced, dotsInitial, arrayOfButtons.length];
//     } else if (
//       currentButton >= 4 &&
//       currentButton <= arrayOfButtons.length - 2
//     ) {
//       let sliced1 = arrayOfButtons.slice(currentButton - 2, currentButton);
//       let sliced2 = arrayOfButtons.slice(currentButton, currentButton + 1);
//       tempArrayOfButtons = [
//         1,

//         dotsLeft,
//         ...sliced1,
//         ...sliced2,
//         dotsRight,
//         arrayOfButtons.length,
//       ];
//     } else if (currentButton > arrayOfButtons.length - 3) {
//       let sliced1 = arrayOfButtons.slice(arrayOfButtons.length - 4);

//       tempArrayOfButtons = [1, dotsInitial, ...sliced1];
//     }

//     setPaginationArray(tempArrayOfButtons);
//   }, [currentButton, limit]);

//   let buttonElement = PaginationArray.map((number) => {
//     let btnStyle =
//       number === currentButton
//         ? style.button + " " + style.colored
//         : style.button;

//     return (
//       <button
//         key={number}
//         onClick={(e) => {
//           setCurrentButtonPagination(e, number);
//         }}
//         className={btnStyle}
//       >
//         {number}
//       </button>
//     );
//   });
//   let arrowStyleLeft =
//     currentButton === 1
//       ? style.arrowLeft + " " + style.disabled
//       : style.arrowLeft;
//   let arrowStyleRight =
//     currentButton === arrayOfButtons.length
//       ? style.arrowRight + " " + style.disabled
//       : style.arrowRight;

//   return (
//     <div className={style.buttonContainer}>
//       {buttonElement}
//       <span>
//         <img
//           src={arrow}
//           className={arrowStyleLeft}
//           alt="arrowLeft"
//           onClick={setCurrentButtonPaginationViaArrayLeft}
//         />
//       </span>
//       <span>
//         <img
//           src={arrow}
//           className={arrowStyleRight}
//           alt="arrowRight"
//           onClick={setCurrentButtonPaginationViaArrayRight}
//         />
//       </span>
//     </div>
//   );
// };

// export default PaginationThird;
export { container as default } from "./container";
