import './App.css';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <>
      
           <Navbar />
           <Home /> 
           <About />
           <Services />
           <Portfolio />
           <Blog />
           <Contact />
           <Footer />
        
    </>
  );
}

export default App;
