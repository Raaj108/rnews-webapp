import React from 'react';
import { connect } from 'react-redux'; 
import { search } from '../../redux/actions/newsAction';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';

const SearchForm = (props) => {  
  const { search } = props;
  
  //Search
  const handleSubmit = (e) => {   
    e.preventDefault();
    const query = document.getElementById("searchQuery").value;  
    search(query);   
    props.history.push("/search/"+query);
    document.getElementById("searchQuery").value="";
  }
  
  return (
    <form className="form-inline ml-auto mt-2" onSubmit={handleSubmit}>
      <div className="form-group mb-2">             
        <input className="form-control mr-2" type="search" placeholder="Search" id="searchQuery" aria-label="Search"></input>              
      </div>           
      <button type="submit" className="btn btn-primary ml-2 mb-2">Search</button>
    </form>  
  )
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    search : (query) => {dispatch(search(query))}   
  }
}

export default compose(
  connect(null,mapDispatchToProps),
  withRouter
) (SearchForm);