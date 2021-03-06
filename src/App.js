import{
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
 
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";

function App() {
  return (
   <Router>
     <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
   </Router>
  );
}

export default App;
