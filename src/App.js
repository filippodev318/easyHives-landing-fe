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
import { ref, set, push, onChildAdded } from "firebase/database";
import { db } from './services/db';
import { isIOS, isMobile } from 'react-device-detect';
import DownloadInfo from './components/downloadInfo/DownloadInfo';
import ModalSuccess from './components/modal-success/ModalSuccess';

function App() {

  const [showModalSub, setShowModalSub] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(true)

  const getUserAgent = () => {
    return isMobile ? (isIOS ? 'iOS' : 'Android') : 'PC'
  }

  const handleButtonClick = () => {
    setShowModalSub(true)
  }

  const submitData = (data) => {
    const userAgent = getUserAgent()
    const subscribeRef = ref(db, 'subscribers');
    const newRegister = push(subscribeRef);
    set(newRegister, {
      email: data.email,
      userAgent: userAgent,
      numHives: data.hives
    })
    onChildAdded(newRegister, (data) => {
      console.log('ADDED', data)
      setShowModalSub(false)
      setShowModalSuccess(true)
    });
  }

  const handleCloseModalSub = () => {
    setShowModalSub(false)
  }

  const handlecloseModalSuccess = () => {
    setShowModalSuccess(false)
  }

  return (
    <div className="App">
      <div className="easyhives__bg navbar__border">
        <Navbar />
      </div>
      <ModalSubscribe show={showModalSub}
        handleClose={handleCloseModalSub}
        submitData={submitData}
      />
      <ModalSuccess show={showModalSuccess}
        handleClose={handlecloseModalSuccess}
      />
      <Header handleButtonClick={handleButtonClick} />
      <Spacer />
      <FirstSection handleButtonClick={handleButtonClick} />
      <Spacer />
      <SecondSection />
      <Spacer />
      <ThirdSection handleButtonClick={handleButtonClick} />
      <div className="easyhives__bg footer__border">
        <Footer handleButtonClick={handleButtonClick} />
      </div>
      <DownloadInfo />
    </div>
  );
}

export default App;
