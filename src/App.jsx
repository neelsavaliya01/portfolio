import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componet/Home'
import About from './componet/About'
import Skill from './componet/Skill'
import Project from './componet/Project'
import Contect from './componet/Contect'
import Layout from './componet/Layout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>}  />
      <Route path='/about' element={<Layout><About /></Layout>} />
      <Route path='/skill' element={<Layout><Skill /></Layout>} />
      <Route path='/project' element={<Layout><Project /></Layout>} />
      <Route path='/contect' element={<Layout><Contect /></Layout>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
