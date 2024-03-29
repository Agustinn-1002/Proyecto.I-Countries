import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage'
import {Routes,Route} from 'react-router-dom'
import CreateActivity from './components/CreateActivity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home/*' element={<Home/>}/>
        <Route path='/createActivity/*' exact element={<CreateActivity/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
