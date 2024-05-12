import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/homeScreen/HomeScreen';
import './_app.scss'
import { useState } from 'react';
import LoginScreen from './screens/loginScreen/LoginScreen';
function App() {
  const [sidebar,toggleSideBar]=useState(false)
  const handleToggleSidebar=()=>{
    console.log("hola")
    toggleSideBar(prev=>!prev)
  }
  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container border border-info'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
