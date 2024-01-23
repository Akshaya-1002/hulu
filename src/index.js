import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import App from './App';
import App2 from './App2';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<App2 />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
