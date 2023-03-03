import '.././App.css';
import IntrestingFect from '../IntrestingFect';
import Main from '../Main';
import Navbar from '../Navbar';
import Pricing from '../Pricing';
import Projects from '../Projects';
import Sponserd from '../Sponserd';
import Providing from '../Providing';


function Home() {
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
      </div>
    </>
  );
}

export default Home;
