import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/page';
import SignUp from './app/signup/page';
import './App.css';

export const AudioContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <AudioContext.Provider value={{ user, setUser }}>
 <BrowserRouter>
 <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/" element={user ? <h1>Todo</h1> : <Login} />
 </Routes>
 </BrowserRouter>
 </AudioContext.Provider>
  );
}

export default App;
