import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './LogInPg/LogIn';
import AboutMe from './Pages/AboutMe';
import Blog from './Pages/Blog';
import Home from './Home/Home';
import Services from './Pages/Services';
import Navber from './Shared/Navber';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
