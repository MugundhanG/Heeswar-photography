import './styles/global.css';
import Cursor       from './components/Cursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Ticker       from './components/Ticker';
import About        from './components/About';
import GalleryStrip from './components/GalleryStrip';
import Services     from './components/Services';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <GalleryStrip />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
