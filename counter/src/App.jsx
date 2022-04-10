// import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter"
var counters=0
function App() {
  return (
    <div>
    <Counter count={counters}/>
    </div>
  );
}

export default App;
