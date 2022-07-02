import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactMePage from '../pages/contactMe/ContactMePage'
import { AboutMePage, HomePage, ProjectsPage, SkillsPage } from '../pages/pages'
const App = () => {
  return (

    <div>
      <HomePage />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactMePage />
    </div>
   /* <BrowserRouter>
  //   <Routes>
  //   <Route path="/" element={<HomePage />}/>
  //   <Route path="/aboutMePage" element={<AboutMePage />}/>
  //   <Route path="/skillsPage" element={<SkillsPage />}/>
  //   <Route path="/projectPage" element={<ProjectsPage />}/>
  //   <Route path="/contactMePage" element={<ContactMePage />}/>
  //   </Routes>
  // </BrowserRouter> */
    
  )
}

export default App