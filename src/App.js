import logo from './logo.svg';
import './App.css';
import Navbar from './componenents/Navbar';
import Home from './pages/home';
import Post from './pages/Post';
import Login    from './pages/Login';
import{BrowserRouter, Routes, Route, Navigate} from "React-router-dom"
import React from 'react'

function App() {
  const user=true;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;