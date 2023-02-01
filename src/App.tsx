import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/main/Home';
import Login from './pages/Login';
import Navbars from './components/Navbar';
import CreatePost from './pages/create-post/CreatePost';


function App() {


  return (
    <div className="App">
            
      <Router>
        <Navbars />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
