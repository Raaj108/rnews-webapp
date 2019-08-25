import React from 'react';
import { connect } from 'react-redux'; 
import { setRegion } from '../../redux/actions/newsAction';

const SelectRegion = (props) => {
  
  const { setRegion } = props;    
  
  const countries = [ 
    {name :"The United Arab Emirates", value : "ae"}, 
    {name :"Argentina", value : "ar"}, 
    {name :"Austria", value : "at"}, 
    {name :"Australia", value : "au"},   
    {name :"Brazil", value : "br"}, 
    {name :"Canada", value : "ca"}, 
    {name :"China", value : "cn"}, 
    {name :"Germany", value : "de"}, 
    {name :"France", value : "fr"}, 
    {name :"Hong Kong", value : "hk"}, 
    {name :"Indonesia", value : "id"}, 
    {name :"Israel", value : "il"},    
    {name :"India", value : "in"}, 
    {name :"Italy" , value: "it"}, 
    {name :"Japan", value : "jp"}, 
    {name :"South Korea", value : "kr"}, 
    {name :"Mexico", value : "mx"}, 
    {name :"Malaysia", value : "my"}, 
    {name :"Portugal", value : "pt"}, 
    {name :"Russia", value : "ru"}, 
    {name :"Saudi Arabia", value : "sa"},
    {name :"Singapore", value : "sg"}, 
    {name :"Thailand", value: "th"}, 
    {name :"United Kingdom", value : "gb"}, 
    {name :"United States", value : "us"}, 
    {name :"South Africa", value : "za"} 
  ];
  
  //Select Country
  const handleChange = (e) => {   
    const region = e.target.options[e.target.selectedIndex].value;
    setRegion(region);
  }  
  
  const regionOptions = countries.map((country, index) => {
    return (
      <option key={index} value={country.value}>{country.name}</option>
    ) 
  })
  
  return (
    <ul className="navbar-nav mr-auto">             
      <li className="nav-item mt-3">
        <div className="form-group">
        <select className="custom-select form-control" onChange={handleChange} defaultValue="in">
          {regionOptions}
        </select>
        </div>
      </li>           
    </ul>
  )  
}

const mapDispatchToProps = (dispatch) => {
  return {
      setRegion : (region) => {dispatch(setRegion(region))}
  }
}

export default connect(null,mapDispatchToProps)(SelectRegion);