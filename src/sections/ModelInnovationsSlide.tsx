import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  color: white;
  max-width: 1200px;
  padding: 2rem;
  padding-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InnovationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #6dd5ed;
`;

const CardContent = styled.div`
  h4 {
    color: white;
    margin: 1rem 0 0.5rem 0;
    font-size: 1.1rem;
  }
  
  p {
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.4rem 0;
      padding-left: 1.5rem;
      position: relative;
      
      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: #6dd5ed;
        font-weight: bold;
      }
    }
  }
`;

const ModelInnovationsSlide: React.FC = () => {
  return (
    <Container>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Model Innovations for US Applications
      </Title>
      
      <Grid>
        <InnovationCard
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <CardTitle>Advanced Data Integration</CardTitle>
          <CardContent>
            <h4>Multi-Survey Fusion</h4>
            <p>Combines CPS, ACS, and SCF data using machine learning imputation techniques.</p>
            <ul>
              <li>Quantile regression forests for distributional accuracy</li>
              <li>Administrative data calibration at federal and state levels</li>
              <li>Real-time data updates from Bureau of Labor Statistics</li>
            </ul>
          </CardContent>
        </InnovationCard>

        <InnovationCard
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <CardTitle>Behavioral Responses</CardTitle>
          <CardContent>
            <h4>Built-in Labor Supply Effects</h4>
            <p>Incorporates how policy changes affect work incentives and earnings.</p>
            <ul>
              <li>Extensive margin: labor force participation decisions</li>
              <li>Intensive margin: hours worked adjustments</li>
              <li>Income effects: consumption and saving responses</li>
            </ul>
          </CardContent>
        </InnovationCard>

        <InnovationCard
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <CardTitle>Geographic Granularity</CardTitle>
          <CardContent>
            <h4>State and Local Precision</h4>
            <p>Captures variation in taxes, benefits, and cost of living across regions.</p>
            <ul>
              <li>All 50 states plus DC income tax systems</li>
              <li>Metropolitan area cost-of-living adjustments</li>
              <li>Local TANF and Medicaid program variations</li>
            </ul>
          </CardContent>
        </InnovationCard>

        <InnovationCard
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <CardTitle>Open Source Architecture</CardTitle>
          <CardContent>
            <h4>Transparent and Extensible</h4>
            <p>Community-driven development ensuring accuracy and continuous improvement.</p>
            <ul>
              <li>GitHub-based development with public code review</li>
              <li>Automated testing for all tax-benefit calculations</li>
              <li>API-first design for integration with external systems</li>
            </ul>
          </CardContent>
        </InnovationCard>
      </Grid>
    </Container>
  );
};

export default ModelInnovationsSlide;