import {  Routes , Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './component/NavigationBar';
import SmartWalet from './pages/SmartWalet';
import SmartCard from './pages/SmartCard';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Download from './pages/Download';
import FormLogin from './FormLogin/FormLogin';
import ChildrenWallet from'./pages/ChildrenWallet';
const  App =() => {
  return (
    <div>
      
      <NavigationBar />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/SmartWalet' element = {<SmartWalet/>}/>
          <Route path='/SmartCard' element = {<SmartCard/>}/>
          <Route path='/Dashboard' element = {<Dashboard/>}/>
          <Route path='/ChildrenWallet' element = {<ChildrenWallet/>}/>
          <Route path='/Download' element = {<Download/>}/>
          <Route path='/SignIn' element = {<FormLogin/>}/>
        </Routes>
    </div>
  );
};

export default App;
