import HomeLayout from './Layouts/HomeLayout';
import './App.css';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePages';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <> 
         <Routes>  
            <Route path="/" element = {<HomePage />}></Route> 
          </Routes>
           
    </>
  )
}

export default App;
