import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist//js/bootstrap.bundle.js'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes> 
    </AuthContextProvider>
        
    </>
  )
}

export default App
