import axios from 'axios';

export const updateCategory = (category) => {
  console.log(category)
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      category
    });
  }
}

export const fetchHeadlines = (country = "us", category = "all") => {
  return (dispatch, getState) => {
    const apiKey = "fbf114c0e40846989b0275d6e892ae1c";
    let cate = (category == "all") ? "" : category;
    const url = "https://newsapi.org/v2/top-headlines?apiKey=" + apiKey + "&country=" + country + "&category=" + cate;
    axios.get(url)
      .then(res => {
        dispatch({
          type: 'FETCH_TOP_HEADLINES',
          headlinesArr: res.data.articles
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_TOP_HEADLINES_ERROR',
          err
        });
      })
  }
}

export const fetchArticle = (articleNumber, country = "us") => {
  return (dispatch, getState) => {
    const apiKey = "fbf114c0e40846989b0275d6e892ae1c";
    const url = "https://newsapi.org/v2/top-headlines?country=" + country + "&sortBy=publishedAt&apiKey=" + apiKey;
    axios.get(url)
      .then(res => {
        dispatch({
          type: 'FETCH_ARTICLE',
          article: res.data.articles[articleNumber]
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_ARTICLE_ERROR',
          err
        });
      })
  }
}

export const search = (query) => {
  return (dispatch, getState) => {
    const apiKey = "fbf114c0e40846989b0275d6e892ae1c";
    const url = "https://newsapi.org/v2/everything?q=" + query + "&sortBy=publishedAt&apiKey=" + apiKey;
    axios.get(url)
      .then(res => {
        dispatch({
          type: 'SEARCH',
          searchResult: res.data.articles
        });
      })
      .catch(err => {
        dispatch({
          type: 'SEARCH_ERROR',
          err
        });
      })
  }
}

export const setRegion = (region) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_REGION',
      selectedRegion: region
    })
  }
}
