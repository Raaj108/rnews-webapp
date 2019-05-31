import axios from 'axios';

export const fetchHeadlines = ( country = "us" ) => {
  return (dispatch, getState) => {
    const apiKey = "fbf114c0e40846989b0275d6e892ae1c";
    const url = "https://newsapi.org/v2/top-headlines?country="+ country +"&apiKey=" + apiKey;   
    axios.get(url)
      .then(res => {
        dispatch({ type: 'FETCH_TOP_HEADLINES', headlinesArr: res.data.articles });        
      })
      .catch(err => {
        dispatch({ type: 'FETCH_TOP_HEADLINES_ERROR', err });
      })
  }
}

export const fetchArticle = (articleNumber, country = "us") => {  
  return (dispatch, getState) => {
    const apiKey = "fbf114c0e40846989b0275d6e892ae1c";
    const url = "https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=" + apiKey;   
    axios.get(url)
      .then(res => {        
        dispatch({ type: 'FETCH_ARTICLE', article: res.data.articles[articleNumber]});        
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ARTICLE_ERROR', err });
      })
  }
}