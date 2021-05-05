
import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <h1 className="d-inline-flex p-3" style={{color:"#007bff" ,backgroundColor:"black" }}>TODO LIST</h1>
      <Addtodo />
      <Todolist />
      
    </div>
  );
}

export default App;
