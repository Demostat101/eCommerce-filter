
import './App.css'
import Nav from './components/Navigation/Nav'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'
import SideBar from './components/SideBar/LeftBar/SideBar'

function App() {

  return (
    <>
    <SideBar/>
    <Nav/>
    <Recommended/>
    <Products/>
    
    </>
  )
}

export default App
