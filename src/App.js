import './App.css';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';
import MapSection from './MapSection';
import Menu from "./Menu"
import Contact from './Contact';
function App() {
  return (
    <>
    <Header />
    <Hero></Hero>
    <Menu></Menu>
    <MapSection/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
