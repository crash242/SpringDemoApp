import './App.css';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
            <HeaderComponent />    
              <div className='container'>
                <Routes>
                  <Route  path="/" exact element={<ListEmployeesComponent /> } />
                  <Route  path="/employees" exact element={<ListEmployeesComponent /> } />
                  <Route  path="/add-employee" exact element={<CreateEmployeeComponent /> } />                      
                  <Route  path="/edit-employee/:id" exact element={<CreateEmployeeComponent/> } />                        
                  {/* <Route  path="/search" exact element={<ListEmployeesComponent/> } />               */}
                </Routes>
              </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
