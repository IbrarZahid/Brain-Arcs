import './App.css';
import Footer from './Footer';
import IntrestingFect from './IntrestingFect';
import Main from './Main';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Projects from './Projects';
import Providing from './Providing';
import Sponserd from './Sponserd';

function App() {
  return (
    <>
    <div>
    <Navbar />
      <Main />
      <Providing />
      <IntrestingFect />
      <Projects />
      <Pricing />
      <Sponserd />
      <Footer />
    </div>
    </>
  );
}

export default App;
