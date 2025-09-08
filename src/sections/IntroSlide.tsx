import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ImageWithViewer } from '../components/ImageViewer';

const Container = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  font-weight: 300;
`;

const Name = styled(motion.h3)`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
`;

const TimeFrame = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  margin-top: -0.5rem;
  opacity: 0.7;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
`;

const LogoContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
  }
`;

const DateText = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.7;
  margin-top: 2rem;
`;

const IntroSlide: React.FC = () => {
  const presentationDate = 'September 2025';
  
  return (
    <Container>
      <LogoContainer
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2 
        }}
      >
        <ImageWithViewer 
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="PolicyEngine logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = '<div style="color: rgba(255,255,255,0.5); text-align: center;">Add logo.png<br/>to public/images/</div>';
          }}
        />
      </LogoContainer>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        PolicyEngine
      </Title>
      <TimeFrame
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Fast, Accurate, Accessible Tax-Benefit Simulation
      </TimeFrame>
      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Presentation for the Congressional Research Service
      </Subtitle>
      <Name
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Max Ghenis (CEO), Pavel Makarchuk (Economist), Daphne Hansell (Healthcare Analyst)
      </Name>
      <DateText
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {presentationDate}
      </DateText>
    </Container>
  );
};

export default IntroSlide;