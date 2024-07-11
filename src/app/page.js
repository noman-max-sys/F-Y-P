// app/page.js

import MainPage from './components/MainPage';
import Countries from './components/Countries';
import School from './components/Schools';
import TestComponent from './components/Test';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FactsAboutUK from './components/Facts';



export default function HomePage() {
  return (
    <div>
      <MainPage />
        <Countries />
        <FactsAboutUK/>
          <School/>
        
          <Contact/>
          <Footer/>
        
     
      
      
      
    </div>
  );
}
