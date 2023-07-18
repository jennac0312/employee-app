import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';

function App() {

  let { test } = useContext(AppContext)

  
  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
