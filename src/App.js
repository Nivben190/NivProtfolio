import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import file from '/Users/nivbenaviv/Desktop/NivBenAvivProtfolio/myprotfolio/src/Niv_Ben Aviv_Resume..pdf'
import ContactMePage from './pages/contactMe/ContactMePage'
import { AboutMePage, HomePage, ProjectsPage, SkillsPage } from './pages/pages'
const App = () => {
  return (

    <div>
      <HomePage />
      <AboutMePage 
          pdf ={file}
      />
      <SkillsPage />
      <ProjectsPage 
     

      />
      <ContactMePage />
    </div>
  
    
  )
}

export default App