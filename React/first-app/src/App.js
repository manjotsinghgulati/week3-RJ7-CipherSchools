import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskScreen from './components/TaskScreen';
import CounterComponent from './components/CouterComponent';

const App = () =>{
  return(
    
    <div className="App">
    <Header />
      <BrowserRouter>
        <Routes>  
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Conatct Page</h1>} />
          <Route path={"/tasks"} element={<TaskScreen />} />
          <Route path={"/counter"} element={<CounterComponent />} />
          {/* <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
