import './App.css';
import Home from './Components/Home';
import Category from './Components/Category';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
