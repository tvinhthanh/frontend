import './App.css'
import Donate from './conponents/Donate';
import Footer from './conponents/Footer';
import FunctionSection from './conponents/Function';
import Header from './conponents/Header';
import HeroSection from './conponents/HeroSection';
import Protection from './conponents/Protection';
import Review from './conponents/Review';
import Section from './conponents/Section';
import Social from './conponents/Social';

export default function App() {
  return (
    <>
          <Header/>
          <HeroSection/>
          <Section/>
          <Social/>
          <FunctionSection/>
          <Donate/>
          <Review/>
          <Protection/>
          <Footer/>
    </>
  );
}