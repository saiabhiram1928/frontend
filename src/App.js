import React from 'react'
import Header from './components/Header';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import About from './pages/About';
import Error from './pages/Error';
import { Routes,Route, Switch, NavLink, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Context from './context/Context';

const App = () => {
  let login=true;
 

    return(
      <Context>
      <div class="flex flex-col h-screen">
       
        
       <div> <Header/> </div> 
        
    <main className="flex-grow">
<Routes>
  <Route path="/About" element={<About/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/Notfound"  element={<Error/>}/>
  <Route path="/*"  element={<Error/>}/>
  <Route path="/Login"  element={<Login/>}/>

  </Routes>
</main>
  <div> <Footer/>   </div> 
 
      </div>
      </Context>
    )
  
  }


export default App