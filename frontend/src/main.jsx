import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearcherData from './components/searchDashboard'
import Dashboard from "./components/Dashboard"
import Maps from "./components/maps"
import Test from "./components/test.jsx"




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route path='/app' element={<SearcherData />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/:id' element={<Maps />} />
        <Route path='/test' element={<Test />} />



      </Routes>
    </Router>
  </>
)
