import './App.css';
import Hero from './Hero';
import Yummy from './Yummy';
import Tummy from './Tummy';
import Footer from './Footer';
import Header from './Header';
import MapSection from './MapSection';
import CommunitySection from './CommunitySection';
import Menu from "./Menu"
import Contact from './Contact';
function App() {
  return (
    <>
    <Header />
    <Hero></Hero>
    <Menu></Menu>
    {/* <CommunitySection/> */}
    <MapSection/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
