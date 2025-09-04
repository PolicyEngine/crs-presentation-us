import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: zoom-out;
  padding: 0;
`;

const FullScreenImage = styled(motion.img)`
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
`;

const CloseHint = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ClickableImage = styled.img`
  cursor: zoom-in;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

interface ImageViewerProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export const ImageWithViewer: React.FC<ImageViewerProps> = ({ 
  src, 
  alt, 
  style, 
  className,
  onError 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <ClickableImage
        src={src}
        alt={alt}
        style={style}
        className={className}
        onClick={() => setIsOpen(true)}
        onError={onError}
      />
      
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          >
            <FullScreenImage
              src={src}
              alt={alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <CloseHint
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Press ESC or click to close
            </CloseHint>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageWithViewer;