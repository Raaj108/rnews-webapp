import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesGrid = (props) =>{    
  console.log(props)
  const {headlinesArr, isHeadlinesLoaded} = props;
  
  const grid = ( isHeadlinesLoaded && headlinesArr.length > 0) ? (    
    headlinesArr.map((headlines, index) =>{
      return (       
        <div className="card flex-item m-2" id={"card"+index} key={index}>
          <Link to={"/article/"+index} className="headlines-article-card">
            <div className="card-body">
              <small className="source">{headlines.source.name}</small>
              <h5 className="card-title">              
                  {headlines.title.substr(0,80) + "..."}              
              </h5>
            </div>
            <img className="card-img" src={headlines.urlToImage} alt={headlines.title}></img>
          </Link>
        </div> 
      )
    })
  ) : (
    <div>
      <p className="text-center">Loading...</p>
    </div>
  )  
  
  return(
    <div className="headlines-grid flex-container">      
      {grid}
    </div>
  )
}

export default ArticlesGrid;