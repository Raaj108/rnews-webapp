import React from 'react';
import { connect } from 'react-redux';
import { updateCategory } from '../../redux/actions/newsAction';

const Categories = (props) => {
 
  const { category, updateCategory } = props;
 
  const handleClick = (e) => {
    let badge = e.currentTarget;
    let cate = badge.id;
    let activeBadge = document.getElementsByClassName('active')[0];
    updateCategory(cate);
    activeBadge.classList.remove('active');
    badge.classList.add('active');
  }
 
  return(
      <div className="col-lg-12 col-sm-12" id="categories">
        <span className="badge badge-secondary active" id="all" onClick={handleClick}>All</span>
        <span className="badge badge-secondary" id="business" onClick={handleClick}>Business</span>
        <span className="badge badge-secondary" id="entertainment" onClick={handleClick}>Entertainment</span>
        <span className="badge badge-secondary" id="general" onClick={handleClick}>General</span>
        <span className="badge badge-secondary" id="health" onClick={handleClick}>Health</span>
        <span className="badge badge-secondary" id="science" onClick={handleClick}>Science</span>
        <span className="badge badge-secondary" id="sports" onClick={handleClick}>Sports</span>
        <span className="badge badge-secondary" id="technology" onClick={handleClick}>Technology</span>
      </div>
  );
}

const mapStateToProps = (state) => {  
  return {
    category: state.categories.category
  }
}

const mapDispatchToProps = (dispatch) => {   
  return {
    updateCategory : (category) => {dispatch(updateCategory(category))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);