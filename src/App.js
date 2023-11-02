import logo from './logo.svg';
import './CSS/App.css';
import Registration from './RegistrationForm';
import Login from './Login';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ProfileNew from './ProfileNew';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
       
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ProfileNew' element={<ProfileNew/>}/>
       
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
