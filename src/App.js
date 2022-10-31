import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./app/Home";
import Search from "./app/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
