const initState = {  
  article: {},
  isArticleLoaded : false,
  errorMessages:""
};

const articleReducer = (state = initState, action) => {  
  switch(action.type){
    case "FETCH_ARTICLE" : 
      return {
        ...state, 
        article: action.article, 
        isArticleLoaded : true
      };      
    default : 
       return state;
  }  
}

export default articleReducer;
