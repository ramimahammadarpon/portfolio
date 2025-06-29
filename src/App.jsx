import './App.css'
import Aboutme from './Components/Aboutme'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

function App() {

  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className='mx-20'>
        <Aboutme></Aboutme>
        <Skills></Skills>
      </main>
    </div>
  )
}

export default App
