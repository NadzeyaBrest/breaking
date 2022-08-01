import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../atoms/Burger";
import style from "./style.module.scss";

// class Button extends Component {
//   constructor() {
//     super();
//     this.state = {
//       flag: false,
//     };
//   }

//   render() {
//     return (
//       <NavLink to="/catalog" className={style.button}>
//         <Burger />
//         <NavLink to="/catalog" className={style.text}>
//           Каталог
//         </NavLink>
//       </NavLink>
//     );
//   }
// }
const Button = () => {
  // let buttonElement = React.createRef();
  // function handleClick() {
  //   {
  //     let element = buttonElement.current;
  //     console.log(style);
  //   }
  // }
  return (
    <NavLink
      to="/catalog"
      // ref={buttonElement}
      // onClick={handleClick}
      className={style.button}
    >
      <Burger />
      <NavLink to="/catalog" className={style.text}>
        Каталог
      </NavLink>
    </NavLink>
  );
};
export default Button;
