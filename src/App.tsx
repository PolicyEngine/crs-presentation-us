import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import useKeypress from 'react-use-keypress';
import SlideContainer from './components/SlideContainer';
import Navigation from './components/Navigation';

// Import slides
import IntroSlide from './sections/IntroSlide';
import AboutPolicyEngineSlide from './sections/AboutPolicyEngineSlide';
import OpenSourceSlide from './sections/OpenSourceSlide';
import ModelInnovationsSlide from './sections/ModelInnovationsSlide';
import DataSlide from './sections/DataSlide';
import BehavioralResponsesSlide from './sections/BehavioralResponsesSlide';
import HealthcareSlide from './sections/HealthcareSlide';
import USPolicyExamplesSlide from './sections/USPolicyExamplesSlide';

const AppContainer = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Mono', monospace;
`;

const slides = [
  { component: IntroSlide, name: 'Introduction' },
  { component: AboutPolicyEngineSlide, name: 'About PolicyEngine' },
  { component: OpenSourceSlide, name: 'Open Source' },
  { component: ModelInnovationsSlide, name: 'Model Innovations' },
  { component: DataSlide, name: 'Data & Calibration' },
  { component: BehavioralResponsesSlide, name: 'Behavioral Responses' },
  { component: HealthcareSlide, name: 'Healthcare' },
  { component: USPolicyExamplesSlide, name: 'Policy Examples' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useKeypress('ArrowRight', nextSlide);
  useKeypress('ArrowLeft', prevSlide);
  useKeypress('Escape', () => setCurrentSlide(0));
  
  // Number key navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= slides.length) {
        setCurrentSlide(num - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <AppContainer>
      <AnimatePresence mode="wait">
        <SlideContainer key={currentSlide}>
          <CurrentSlideComponent />
        </SlideContainer>
      </AnimatePresence>
      <Navigation 
        slides={slides.map((s, i) => ({ path: `slide-${i}`, name: s.name }))}
        currentSlide={currentSlide}
        onNavigate={goToSlide}
      />
    </AppContainer>
  );
}

export default App;