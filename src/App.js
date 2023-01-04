import logo from './logo.svg';
import './App.css';
import Todolist from './Pages/Todolist';
import {Routes,Route} from 'react-router-dom'
import TaskReport from './Pages/TaskReport';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Todolist/>}/>
        <Route path='/task' element={<TaskReport/>}/>
      </Routes>
    </div>
  );
}

export default App;
