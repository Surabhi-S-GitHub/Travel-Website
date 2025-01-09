import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs";
import Explore from "./Components/Explore";
import SignIn from "./Components/SigIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <nav className="bg-rose-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-center flex-1 italic">Wizard World</div>
          <div className="flex space-x-6">
            <Link to="/" className="bg-rose-500 px-4 py-2 rounded hover:bg-rose-400">Home</Link>
            <Link to="/AboutUs" className="bg-rose-500 px-4 py-2 rounded hover:bg-rose-400">About Us</Link>
            <Link to="/Explore" className="bg-rose-500 px-4 py-2 rounded hover:bg-rose-400">Explore</Link>
            <Link to="/SignIn" className="bg-rose-500 px-4 py-2 rounded hover:bg-rose-400">Sign In</Link>
            <Link to="/SignUp" className="bg-rose-500 px-4 py-2 rounded hover:bg-rose-400">Sign Up</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
