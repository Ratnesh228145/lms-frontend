import HomeLayout from './Layouts/HomeLayout';
import './App.css';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePages';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <> 
         <Routes>  
            <Route path="/" element = {<HomePage />}></Route>
            <Route path="/about" element = {<AboutUs />}></Route> 
          </Routes>
           
    </>
  )
}

export default App;
