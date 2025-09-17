
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Child1 from './component/Child1'
import Navbar from './component/Navbar'
import Child2 from './component/child2'

function App() {

  return (
  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='c1' element={<Child1/>}/>
      <Route path='c2' element={<Child2/>}/>
    </Routes>
  </div>
  )
}

export default App
