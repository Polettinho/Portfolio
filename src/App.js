import './App.css';
import Siderbar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Siderbar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
