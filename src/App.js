import './App.css';
import IntrestingFect from './IntrestingFect';
import Main from './Main';
import Navbar from './Navbar';
import Projects from './Projects';
import Providing from './Providing';

function App() {
  return (
    <>
    <div>
    <Navbar />
      <Main />
      <Providing />
      <IntrestingFect />
      <Projects />
    </div>
    </>
  );
}

export default App;
