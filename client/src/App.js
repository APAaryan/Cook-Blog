import DataProvider from "./constants/DataProvider.jsx";
import { BrowserRouter, Routes, Route, Outlet,Navigate } from "react-router-dom";
import { useState } from "react";
//components
import Loginpage from "./Components/Folder/Loginpage";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/navbar/Navbar.jsx";
import Createpost from "./Components/Create/Createpost.jsx";
import ShowDetails from"./Components/Details/ShowDetails";
import Updatepost from "./Components/Create/update.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/contact/Contact.jsx";

const CheckPrivateRoute = ({isLogin, ...props}) =>{

  return isLogin ?
  <>
  <Navbar/>
  <Outlet/>
  </>
  : <Navigate replace to='/login'/>
}
function App() {

  const [isLogin,isUserLogin] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
      <div>
          <Routes>
            <Route path="/login" element={<Loginpage isUserLogin={isUserLogin}/>} />
            <Route path='/' element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/" element={<Homepage />} />
            </Route>
            <Route path='/about' element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/about" element={<About />} />
            </Route>
            <Route path='/contact' element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path='/create' element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/create" element={<Createpost />} />
            </Route>
            <Route path="/details/:id" element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/details/:id" element={<ShowDetails />} />
            </Route>
            <Route path="/update/:id" element={<CheckPrivateRoute isLogin={isLogin}/> }>
             <Route path="/update/:id" element={<Updatepost />} />
            </Route>
          </Routes>
      </div>    
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
