import './App.css';
import Footer from './component/Footer';
import FooterDown from './component/FooterDown';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Patnership from './component/Patnership';
import Phase from './component/Phase';
import Tockenomics from './component/Tockenomics';
import Utility from './component/Utility';

function App() {
  return (
    <div className="App relative">
      <Navbar/>
      <Home />
      <Tockenomics />
      <Phase />
      <Utility />
      <Patnership />
      <Footer />
      <FooterDown className="fixed bottom-0" />
    </div>
  );
}

export default App;
