// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Joblist from './components/Joblist';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';


function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>}></Route>
      <Route path="/Joblist" element={<PrivateRoutes><Joblist /></PrivateRoutes>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
