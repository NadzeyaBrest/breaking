import { createSlice } from "@reduxjs/toolkit";
// import man from "../../assets/images/man.jpg";
// import man2 from "../../assets/images/man2.jpg";
// import man3 from "../../assets/images/man3.jpg";
// import man4 from "../../assets/images/man4.jpg";
// import man5 from "../../assets/images/man5.jpg";
// import man6 from "../../assets/images/man6.jpg";
// import man7 from "../../assets/images/man7.jpg";
// import man8 from "../../assets/images/man8.jpg";
// import man9 from "../../assets/images/man9.jpg";

const initialState = {
  persons: [
    // {
    //   id: 1,
    //   img: man,
    //   status: "живой",
    //   name: "Андрей Панасюк",
    //   date: "11.11.2011",
    //   nick: "Aндрей Завоеватель",
    //   quote: "Все дело в мгновении. Оно определяет жизнь.",
    // },
    // {
    //   id: 2,
    //   img: man2,
    //   status: "живой",
    //   name: "Евгений Молотый",
    //   date: "09.11.2043",
    //   nick: "Евгений",
    //   quote: "Самый короткий путь к сердцу — это искренность…",
    // },
    // {
    //   id: 3,
    //   img: man3,
    //   status: "живой",
    //   name: "Семен Марьянов",
    //   date: "16.11.2014",
    //   nick: "Ласточка",
    //   quote: "Не понимаю, почему люди боятся новых идей. Я боюсь старых.",
    // },
    // {
    //   id: 4,
    //   img: man4,
    //   status: "живой",
    //   name: "Аркадий Ломов",
    //   date: "12.11.2011",
    //   nick: "Клоун",
    //   quote: "Живи и ошибайся. В этом жизнь",
    // },
    // {
    //   id: 5,
    //   img: man5,
    //   status: "живой",
    //   name: "Георгий Курочкин",
    //   date: "03.11.2043",
    //   nick: "Клоун",
    //   quote: "— И если придется упасть — упади красиво.",
    // },
    // {
    //   id: 6,
    //   img: man6,
    //   status: "живой",
    //   name: "Петр Степанов",
    //   date: "25.11.2014",
    //   nick: "Клоун",
    //   quote: "Чем дольше будешь ждать, тем больше дней ты потеряешь навсегда.",
    // },
    // {
    //   id: 7,
    //   img: man7,
    //   status: "живой",
    //   name: "Роман Суровый",
    //   date: "20.11.2011",
    //   nick: "Воробей",
    //   quote: "Чижик-пыжик, где ты был",
    // },
    // {
    //   id: 8,
    //   img: man8,
    //   status: "живой",
    //   name: "Евгений Молотый",
    //   date: "17.11.2043",
    //   nick: "Солнце",
    //   quote:
    //     "Счастье охотнее заходит в тот дом, где всегда царит хорошее настроение. ",
    // },
    // {
    //   id: 9,
    //   img: man9,
    //   status: "живой",
    //   name: "Алексей Ягодка",
    //   date: "18.11.2014",
    //   nick: "Синица",
    //   quote: "Виноваты, конечно, всегда другие…",
    // },
  ],
};

export const persons = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setPersons(state, { payload }) {
      state.persons = payload;
    },
  },
});
export default persons.reducer;
