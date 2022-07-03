import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactMePage from './pages/contactMe/ContactMePage'
import { AboutMePage, HomePage, ProjectsPage, SkillsPage } from './pages/pages'
const App = () => {
  return (

    <div>
      <HomePage />
      <AboutMePage  />
      <SkillsPage />
      <ProjectsPage />
      <ContactMePage />
    </div>
  
    
  )
}

export default App