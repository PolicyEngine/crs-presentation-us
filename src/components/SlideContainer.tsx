import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 100px 40px;
  min-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const slideVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  return (
    <Container
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </Container>
  );
};

export default SlideContainer;