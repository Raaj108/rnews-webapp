import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeadlines } from '../redux/actions/newsAction';
import ArticlesGrid from './ArticlesGrid';

const Headlines = (props) => {

  const {headlinesArr, isHeadlinesLoaded} = props;
  
  useEffect(()=>{
    props.fetchHeadlines();
  },[]);  
  
  return(
    <div className="top-headlines">
      <h1 className="title">Top Headlines</h1>
      <ArticlesGrid headlinesArr={headlinesArr} isHeadlinesLoaded={isHeadlinesLoaded}></ArticlesGrid>
    </div>   
  )  
}

const mapStateToProps = (state) =>{   
  return{
    headlinesArr: state.headlines.headlinesArr,
    isHeadlinesLoaded: state.headlines.isHeadlinesLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeadlines : () => {dispatch(fetchHeadlines())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);