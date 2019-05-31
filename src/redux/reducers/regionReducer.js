const initState = {  
  counrty: ""
};

const regionReducer = (state = initState, action) => {
  console.log(state);
  return state;
}

export default regionReducer;