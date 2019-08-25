import React from 'react';
import ArticlesGrid from '../news/ArticlesGrid';
import { connect } from 'react-redux';
import { search } from '../../redux/actions/newsAction';
import { Link } from 'react-router-dom';


const SearchResult = (props) => { 
  const { search, searchResult, isSearchResultLoaded } = props;
  const query = props.match.params.q;
  const grid = (isSearchResultLoaded) ? (
      <ArticlesGrid headlinesArr={searchResult} isHeadlinesLoaded={isSearchResultLoaded}></ArticlesGrid>
  ) : (
      search(query)
  );
 
  return(
    <div className="search-headlines">
      <h3>Search Results for "{query}" </h3>
      <Link to="/">Back</Link>
      {grid}
    </div>   
  )  
}

const mapStateToProps = (state) =>{  
  return {
    searchResult: state.search.searchResult,
    isSearchResultLoaded: state.search.isSearchResultLoaded  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search : (query) => {dispatch(search(query))}   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);