import './app.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Programs from './components/programs';
import Stats from './components/states';
import Campus from './components/campus';
import News from './components/news';
import Footer from './components/footer';

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Programs />
    <Stats />
    <Campus />
    <News />
    <Footer />
    </>
  )
}