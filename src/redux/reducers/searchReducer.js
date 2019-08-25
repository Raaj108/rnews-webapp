const initState = {
  searchResult: {},
  isSearchResultLoaded: false
}

const searchReducer = (state = initState, action) => {

  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchResult: action.searchResult,
          isSearchResultLoaded: true
      }
      default:
        return state;
  }
}

export default searchReducer;
