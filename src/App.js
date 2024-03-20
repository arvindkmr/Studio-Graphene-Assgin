import './App.css';
import Dummy from './Dummy';
import Yummy from './Yummy';
import Tummy from './Tummy';
import Footer from './Footer';
import Header from './Header';
import MapSection from './MapSection';

function App() {
  return (
    <>
      <Header />

    <Dummy></Dummy>
    <MapSection/>
    <Tummy></Tummy>
    <Yummy></Yummy>
      <Footer />

    </>
  );
}

export default App;
