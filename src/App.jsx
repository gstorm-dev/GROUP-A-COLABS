import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './page/Home'
import HomeFK from './component/HomeFK'
import Contact from './page/contact'
import Service from './page/service'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path='/' element={<HomeFK />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Service' element={<Service />} />
      </Routes>
      
    </Router>
  )
}

export default App