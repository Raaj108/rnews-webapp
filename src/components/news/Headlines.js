import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeadlines } from '../../redux/actions/newsAction';
import ArticlesGrid from './ArticlesGrid';
import SelectRegion from '../countries/SelectRegion';
import Categories from '../categories/Categories';


const Headlines = (props) => {

  const { headlinesArr, isHeadlinesLoaded, region, category } = props;
  
  useEffect(()=>{   
    props.fetchHeadlines(region, category);
  },[region, category]);  
  
  window.addEventListener('scroll',()=>{
    
   if(window.pageYOffset > 600){
     document.getElementById("scrollTop").setAttribute("style" ,"display:inline");
   }else{
     document.getElementById("scrollTop").setAttribute("style" ,"display:none");
   }
  })
  
  const handleClick = (e) => {
    if(e.currentTarget.id === "scrollTop"){
      window.scrollTo(0,0)
    }
  }
  
  return(
    <div className="top-headlines">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h3 className="title mt-3">Top Headlines</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <SelectRegion></SelectRegion>
        </div>
      </div> 
      <div className="row">
        <Categories></Categories>
      </div>
      <ArticlesGrid headlinesArr={headlinesArr} isHeadlinesLoaded={isHeadlinesLoaded}></ArticlesGrid>
      <span id="scrollTop" onClick={handleClick}>Top</span>
    </div>   
  )  
}

const mapStateToProps = (state) =>{   
  return {
    headlinesArr: state.headlines.headlinesArr,
    isHeadlinesLoaded: state.headlines.isHeadlinesLoaded,    
    region:state.region.selectedRegion,
    category : state.categories.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeadlines : (region, category) => {dispatch(fetchHeadlines(region, category))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);