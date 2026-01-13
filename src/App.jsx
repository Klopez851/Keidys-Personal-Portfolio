// to run program do cd my-react-app, npm run dev;
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Intro from './Intro.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import AboutMe from './AboutMe.jsx'
import FurtureWork from './FutureWork.jsx'
import ContactMe from './ContactMe.jsx'

function App() {

  return(
    <div className='app-container'> 
      <Header/>
      <Intro />
      <Projects/>
      <Skills/>
      {/* <h1>Certifications</h1> */}
      <AboutMe/>
      <FurtureWork/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App
