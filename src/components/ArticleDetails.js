import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { fetchArticle } from '../redux/actions/newsAction'; 

const ArticleDetails = (props) =>{ 
  
  const { article , isArticleLoaded } = props;
  const articleNumber = props.match.params.id;
  
  useEffect(()=>{
    props.fetchArticle(articleNumber);
  },[]); 
  
  const articleView = (isArticleLoaded) ? (
    <article className="article flex-item">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <small className="author">Author: {article.author ? article.author :"Not Available"}</small>
      </div>
      <div className="article-body">
        <div className="article-description">
          <p className="description">{article.description}</p>
        </div>
        <div className="article-image">
          <img src={article.urlToImage} alt={article.title} className="img-fluid"></img>
        </div>
        <div className="article-content">
          <p className="content">
            {article.content}
          </p>
        </div>
      </div>
    </article>
  ) : (
    <div>
      <p className="text-center">Loading...</p>
    </div>
  ) 
  
  return(
    <div className="article-wrapper flex-container">
      {articleView}
    </div>
  )
}   

const mapStateToProps = (state) => {  
  console.log(state)
  return{
    article: state.article.article,
    isArticleLoaded: state.article.isArticleLoaded
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle : (articleNumber) => {dispatch(fetchArticle(articleNumber))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);