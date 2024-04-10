const initState = {
  users: [
    { id: 1, name: "Khoa" },
    { id: 2, name: "Hoi Dan IT" },
  ],
};

const rootReducer = (state = initState, action) => {
  //state noi luu tru data cua redux, action hanh dong tu react

  return state; //tra ra data
};

export default rootReducer;
