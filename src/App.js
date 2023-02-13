import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Spacer from './components/spacer/Spacer';
import FirstSection from './components/sections/first-section/FirstSection';
import SecondSection from './components/sections/second-section/SecondSection';
import ThirdSection from './components/sections/third-section/ThirdSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="easyhives__bg navbar__border">
        <Navbar />
      </div>
      <Header />
      <Spacer />
      <FirstSection />
      <Spacer />
      <SecondSection />
      <Spacer />
      <ThirdSection />
      <div className="easyhives__bg footer__border">
        <Footer />
      </div>
    </div>
  );
}

export default App;
