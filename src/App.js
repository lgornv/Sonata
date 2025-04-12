import React, { useState } from 'react';
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./ScrollToTop";
import ModalContact from './components/ModalWindow/ModalContact';
import ModalOverlay from './components/ModalWindow/ModalOverlay';


function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  return (
    <div >
      <ScrollToTop />
      <Header />
      <AppRouter />
      <Footer openContactModal={openContactModal} />

      {showContactModal && (
        <>
          <ModalOverlay onClose={closeContactModal} />
          <ModalContact onClose={closeContactModal} />
        </>
      )}
    </div>
  );
}

export default App;