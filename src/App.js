import './App.css';
import Background from './components/Background.js';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='display'>
      <Background/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
