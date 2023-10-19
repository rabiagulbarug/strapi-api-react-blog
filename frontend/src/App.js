import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Details from './pages/details';
import AddBlog from './pages/add-blog';
import Category from './pages/category';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element = {"Homepage"} />
          <Route path='/details/:id' element = { <Details/>} />
          <Route path='/addblog' element = { <AddBlog/> } />
          <Route path='/category/:id' element = {  <Category/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
