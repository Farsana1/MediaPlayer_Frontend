// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
