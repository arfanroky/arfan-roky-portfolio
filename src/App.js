import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import HeroPage from "./components/HeroPage";
import Projects from "./components/Projects";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className='md:container md:mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroPage/>}/>
        <Route path="/aboutMe" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
