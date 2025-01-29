import { pageTransition } from "../animations/animations";
import { AnimatePresence, motion } from "framer-motion";
import {Home} from "../pages/Homepage"
import {About} from "../pages/Aboutpage"
import {Contact} from "../pages/Contactpage"
import {Projects} from "../pages/Projectspage"
import {Skills} from "../pages/Skillspage"
import { Routes, Route, useLocation } from "react-router-dom"


export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" 
        element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route path="/about" 
        element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <About />
          </motion.div>
        } 
        />
        <Route path="/skills" 
        element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Skills />
          </motion.div>
        } 
        />
        <Route path="/projects" 
        element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Projects />
          </motion.div>
        } 
        />
        <Route path="/contact" 
        element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Contact />
          </motion.div>
        } 
        />
      </Routes>
      </AnimatePresence>
      

    );
};