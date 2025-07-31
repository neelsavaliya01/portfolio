import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componet/Home'
import About from './componet/About'
import Skill from './componet/Skill'
import Project from './componet/Project'
import Contect from './componet/Contect'
import Header from './componet/Header'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/about' element={<About />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contect' element={<Contect />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
