const initState = {  
  headlinesArr: [],
  isHeadlinesLoaded:false,
  errorMessages:""
};

const headlineReducer = (state = initState, action) => {
 
  switch(action.type){
    case "FETCH_TOP_HEADLINES" : 
      return {
        ...state, 
        headlinesArr : action.headlinesArr, 
        isHeadlinesLoaded : true
      };      
    default : 
       return state;
  }  
}

export default headlineReducer;
