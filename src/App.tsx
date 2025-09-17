
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Child1 from './component/Child1'
import Navbar from './component/Navbar'
import Child2 from './component/child2'
import Child3 from './component/Child3'

function App() {

  return (
  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='c1' element={<Child1/>}/>
      <Route path='c2' element={<Child2/>}/>
      <Route path='c3' element={<Child3/>}/>
    </Routes>
  </div>
  )
}

export default App
