import { Routes, Route } from "react-router-dom"
import {Header} from "./components/Header"
import {Home} from "./pages/Homepage"
import {About} from "./pages/Aboutpage"
import {Contact} from "./pages/Contactpage"
import {Projects} from "./pages/Projectspage"
import {Skills} from "./pages/Skillspage"
import { Footer } from "./components/Footer"
import { socialLinks } from "./data/SocialLinks"
export function App() {
  

  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer socialLinks={socialLinks} email ="tihonshkarin31012004@gmail.com"/>
    </div>
    
  )
}


