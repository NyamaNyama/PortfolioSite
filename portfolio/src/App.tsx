import {Header} from "./components/Header"
import { Footer } from "./components/Footer"
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { socialLinks } from "./data/SocialLinks"
import { useTheme } from './context/ThemeContext'




export function App() {
  
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header/>
        <AnimatedRoutes />
      <Footer socialLinks={socialLinks} email ="tihonshkarin31012004@gmail.com"/>
    </div>
    
  )
}


