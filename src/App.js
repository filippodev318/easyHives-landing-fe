import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Spacer from './components/spacer/Spacer';
import FirstSection from './components/sections/first-section/FirstSection';
import SecondSection from './components/sections/second-section/SecondSection';
import ThirdSection from './components/sections/third-section/ThirdSection';
import Footer from './components/footer/Footer';
import ModalSubscribe from './components/modal-subscribe/ModalSubscribe';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [hives, setHives] = useState(0)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeHive = (event) => {
    setHives(event.target.value)
  }

  const handleButtonClick = () => {
    setShow(true)
  }

  const handleSubmit = (event) => {
    console.log('submit', event)
    event.preventDefault()
  }

  const handleClose = () => {
    setEmail('')
    setHives(0)
    setShow(false)
  }


  return (
    <div className="App">
      <div className="easyhives__bg navbar__border">
        <Navbar />
      </div>
      <ModalSubscribe show={show}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        email={email}
        handleEmailChange={handleEmailChange}
        hives={hives}
        handleChangeHive={handleChangeHive} />
      <Header handleButtonClick={handleButtonClick} />
      <Spacer />
      <FirstSection handleButtonClick={handleButtonClick} />
      <Spacer />
      <SecondSection />
      <Spacer />
      <ThirdSection handleButtonClick={handleButtonClick} />
      <div className="easyhives__bg footer__border">
        <Footer />
      </div>
    </div>
  );
}

export default App;
