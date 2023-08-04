import './App.css';
import AboutSection from './component/About';
import ContactSection from './component/Contact';
import FooterSection from './component/Footer';
import Header from './component/Header';
import HeroSection from './component/Hero';
import ProjectSection from './component/Projects';
import SkillSection from './component/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <hr />
      <FooterSection />
    </div>
  );
}

export default App;
