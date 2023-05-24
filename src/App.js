
import logo from './logo.svg';
import './App.css';
import First from './components/First';
import StateBasic from './components/StateBasic';
import Navi from './components/Navi';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      <Navi/>
<Routes>
  <Route path='/'element={<StateBasic/>}/>
  <Route path='/First'element={<First/>}/>
  <Route path='/Table1' element={<Table1/>}/>
  <Route path='/Navi'element={<Navi/>}/>
  <Route path='/Axios'element={<ApiGet/>}/>
</Routes>
     </div>
  );
}

export default App;
