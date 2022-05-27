import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './LogInPg/LogIn';
import AboutMe from './Pages/AboutMe';
import Blog from './Pages/Blog';
import Home from './Home/Home';
import Services from './Pages/Services/Services';
import Navber from './Shared/Navber';
import Footer from './Shared/Footer';
import NotFound from './Pages/NotFound';
import SignUp from './LogInPg/SignUp';
import RequirAuth from "./LogInPg/RequirAuth";
import AddmissonInfo from './Pages/Services/AddmissonInfo';
import Service from './Pages/Services/Service';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services'element={<RequirAuth><Services></Services></RequirAuth>}></Route>
        <Route path='services/:classId' element={<RequirAuth> <Service></Service> </RequirAuth>} ></Route>
        <Route path='/addmissioncheckout/:_id' element={<AddmissonInfo></AddmissonInfo>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
