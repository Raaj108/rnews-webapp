import React from 'react';
import Headlines from './components/Headlines';
import ArticleDetails from './components/ArticleDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

const App = () => {    
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="container">
          <Route exact path="/" component={Headlines}></Route>
          <Route path="/article/:id" component={ArticleDetails}></Route>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
