import './App.css'
import Aboutme from './Components/Aboutme'
import Banner from './Components/Banner'
import ContactMe from './Components/ContactMe'
import MyProjects from './Components/MyProjects'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='poppins'>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className='md:mx-20'>
        <Aboutme></Aboutme>
        <Skills></Skills>
        <MyProjects></MyProjects>
        <ContactMe></ContactMe>
      </main>
    </div>
  )
}

export default App
