import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskScreen from './components/TaskScreen';
import CounterComponent from './components/CouterComponent';
import Photos from './components/Photos';
import higherOrderComponent from './components/Hoc';
import SampleRenderProps from './components/SampleRenderComponents';
import I18Component from './components/I18Component';

const App = () =>{
  const TestApp = higherOrderComponent(() => {
    return <h1>Inside HOC</h1>;
  })
  return(
    <div className="App">
    <Header />
      <BrowserRouter>
        <Routes>  
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Conatct Page</h1>} />
          <Route path={"/tasks"} element={<TaskScreen />} />
          <Route path={"/counter"} element={<CounterComponent />} />
          <Route path={"/photos"} element={<Photos />} />
          <Route path={"/hoc"} element={<TestApp />} />
          <Route path={"/sample"} element={<SampleRenderProps />} />
          <Route path={"/international"} element={<I18Component />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
