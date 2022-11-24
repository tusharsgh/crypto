import logo from './logo.svg';
import './App.css';
import LoginUi from './components/login';
import Register from "./components/register";
import Creategroup from "./components/creategroup"
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Creategroup />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<LoginUi />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
