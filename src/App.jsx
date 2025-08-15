import './App.css'
import Footer from "./components/navbar & footer/footer"
import Navbar from "./components/navbar & footer/navbar"
import Homepage from "./pages/homepage/Homepage"

function App() {
  

  return (
    <div className="app">
      <Navbar/>
     <main>
       <Homepage/>
     </main>
      <Footer/>
    </div>
  )
}

export default App
