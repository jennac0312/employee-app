import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';

function App() {

  let { test } = useContext(AppContext)

  
  return (
    <div className="App">
      
      <HomePage />
      <EmployeePage />

    </div>
  );
}

export default App;
