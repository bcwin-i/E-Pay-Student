import React, {useState} from 'react'
import { Footer, Header, IntroSection, ServicesSection, AccountAccessForm } from '../../components'

const Welcome = () => {
  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScreen = (screen) => {
    setIsOpen(true);
    setScreen(screen);
  };

  const closeAccess = () => {
    setIsOpen(false);
  };

  return <>
      <Header page={"welcome"}/>
      <IntroSection />
      <ServicesSection handleScreen={handleScreen}/>
      <AccountAccessForm screen={screen}
        handleScreen={handleScreen}
        isOpen={isOpen}
        closeAccess={closeAccess}/>
      <Footer />
  </>
}

export default Welcome