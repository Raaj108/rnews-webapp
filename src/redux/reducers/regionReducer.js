const initState = {  
  selectedRegion: "in"
};

const regionReducer = (state = initState, action) => {
  switch(action.type){
    case "SET_REGION": 
      return{
        ...state,
        selectedRegion: action.selectedRegion
      }
    default:
      return state;
  }
  
}

export default regionReducer;