// import { Routes, Route } from "react-router-dom";
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Userslist from "./components/Userslist";
import Userdetails from "./components/Userdetails";
import Login from "./components/Login";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}></Route>
        <Route path="/users" element={<Userslist />}></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <Userdetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
