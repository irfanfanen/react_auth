import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Prefences/Preferences';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';

function App() {
  // const [token, setToken] = useState();
  // const token = getToken();
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={<Login setToken={setToken}/>} /> */}
        <Route path="prefences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;