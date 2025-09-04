import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 50px;
  z-index: 100;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavButton = styled(motion.button)<{ $active: boolean }>`
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
  border: 2px solid ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Roboto Serif', serif;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: -10px;
  left: 30px;
  right: 30px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: white;
  border-radius: 3px;
`;

interface NavigationProps {
  slides: Array<{ path: string; name: string }>;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ slides, currentSlide, onNavigate }) => {
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <>
      <NavContainer>
        {slides.map((slide, index) => (
          <NavButton
            key={slide.path}
            $active={index === currentSlide}
            onClick={() => onNavigate(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {slide.name}
          </NavButton>
        ))}
        <ProgressBar>
          <Progress 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </ProgressBar>
      </NavContainer>
    </>
  );
};

export default Navigation;