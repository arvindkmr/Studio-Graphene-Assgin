import './App.css';
import Hero from './Hero';
import Yummy from './Yummy';
import Tummy from './Tummy';
import Footer from './Footer';
import Header from './Header';
import MapSection from './MapSection';
import CommunitySection from './CommunitySection';
import Contact from './Contact';

function App() {
  return (
    <>
    <Header />
    <Hero></Hero>
    <CommunitySection/>
    <MapSection/>
    <Tummy></Tummy>
    <Yummy></Yummy>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
