import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import HeroPage from "./components/HeroPage";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <div className='md:container md:mx-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/' element={<HeroPage/>}/>
        <Route path="/aboutMe" element={<About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path='/details/:id' element={<ProjectDetails/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
