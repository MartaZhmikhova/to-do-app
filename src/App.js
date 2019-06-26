import React from 'react';
import {
  Header,
  MainSection,
  Footer
} from "./components";

export default function App() {
  return (
    <div className='wrap'>
      <img className='wrap-bg' src='https://s01.cdn-pegast.net/get/49/0a/c3/ba816b24ac3207b2871e9bc15c30a26f9fbfba22078e8211767850cf44/5bbb812696901.jpg' alt='alt' />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}