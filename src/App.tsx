import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { Activities } from './pages/Activities'
import { Editions } from './pages/Editions'
//import { Info } from './pages/Documents'
import { Contact } from './pages/Contact'
import { FourOhFour } from './pages/404'
import { Construction } from './pages/Construction'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/editions" element={<Editions/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/documents" element={<Construction/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<FourOhFour/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
