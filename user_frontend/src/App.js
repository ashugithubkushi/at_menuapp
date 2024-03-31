
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './Component/Sidebar';
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword';
import Resetpassword from './Pages/Resetpassword/Resetpassword';
// import MainLayout from './Component/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Listscomponents from './Pages/Listscomponents/Listscomponents';
import Ticket from './Pages/Ticket/Ticket';
import Register from './Pages/Register/Register';
import Menu from './Pages/Menu/Menu';
import Login from './Pages/Login/Login';
import MainLayout from './Component/MainLayout';
import Orders from './Pages/Orders/Orders';
// import Orders from './Pages/Orders';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/ticket" element={<Ticket/>} />
    <Route path="/forgotpassword" element={<Forgotpassword/>} />
    <Route path="/resetpassword" element={<Resetpassword/>} />
    <Route path="/listscomponents" element={<Listscomponents/>} />
    <Route path="/orders" element={<Orders/>} />
    <Route path="/admin" element={<MainLayout/>}/>
    <Route path="/menu" element={<Menu/>}>
    
    <Route index element={<Dashboard/>} />
    
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
