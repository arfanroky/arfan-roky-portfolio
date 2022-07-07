import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import HeroPage from "./components/HeroPage";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <div className='md:container md:mx-auto'>
      <ToastContainer></ToastContainer>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/' element={<HeroPage/>}/>
        <Route path="/aboutMe" element={<About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path='/details/:id' element={<ProjectDetails/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
