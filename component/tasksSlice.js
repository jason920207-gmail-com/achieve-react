//init state
const initState = [
  { id: 1, color: "#F6416C", times: 20, content: "sleep" },
  { id: 2, color: "#A6B1E1", times: 20, content: "eat" },
  { id: 3, color: "#40BAD5", times: 20, content: "walk my dog" },
  { id: 4, color: "#00B8A9", times: 20, content: "be happy" },
  { id: 5, color: "#FFDE7D", times: 20, content: "write some code" },
];
//reducer
export const tasksReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    //need task object
    case "tasks/ADD_TASK":
      return [...state, payload];
    //need task id
    case "tasks/DELETE_TASK":
      return state.filter((item) => item.id !== payload);
    //need new task object
    case "tasks/EDIT_TASK":
      const index = state.findIndex((element) => element.id == payload.id);
      return [
        ...state.slice(0, index),
        payload,
        ...state.slice(index + 1, state.length),
      ];
    //need task id
    case "tasks/INCREASE_TASK":
      const incState = [];
      state.forEach((element) => {
        if (element.id == payload) {
          element.times += 1;
        }
        incState.push(element);
      });
      return incState;
    //need task id
    case "tasks/DECREASE_TASK":
      const decState = [];
      state.forEach((element) => {
        if (element.id == payload) {
          if (element.times >= 1) {
            element.time -= 1;
          } else {
            alert("Can not reduce anymore.");
          }
        }
        decState.push(element);
      });
      return decState;
    default:
      return state;
  }
};

//action creators
//ADD_TASK
export const addTaskActionCreator = (obj) => {
  return {
    type: "tasks/ADD_TASK",
    payload: obj,
  };
};
//DELETE_TASK
export const deleteTaskActionCreator = (id) => {
  return {
    type: "tasks/DELETE_TASK",
    payload: id,
  };
};
//EDIT_TASK
export const editTaskActionCreator = (obj) => {
  return {
    type: "tasks/EDIT_TASK",
    payload: obj,
  };
};
//INCREASE_TASK
export const increaseTaskActionCreator = (id) => {
  return {
    type: "tasks/INCREASE_TASK",
    payload: id,
  };
};
//DECREASE_TASK
export const decreaseTaskActionCreator = (id) => {
  return {
    type: "tasks/DECREASE_TASK",
    payload: id,
  };
};

//selectors
export const selectTasks = (state) => {
  return state.tasks;
};

export const selectColor = (state) => {
  return (color) => {
    return state.tasks.filter((element) => element.color == color);
  };
};
