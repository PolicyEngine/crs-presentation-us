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

const SubTitle = styled(motion.h2)`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #6dd5ed;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const PillarTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #6dd5ed;
`;

const PillarContent = styled.div`
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
    text-align: left;
    
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

const InnovationsSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const InnovationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InnovationItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 3px solid #6dd5ed;
  
  h4 {
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.9;
    line-height: 1.5;
    font-size: 0.95rem;
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
        Microsimulation Rests on Three Pillars
      </Title>
      
      <SubTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        PolicyEngine Innovates on Each Pillar
      </SubTitle>
      
      <PillarsGrid>
        <PillarCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <PillarTitle>Rules</PillarTitle>
          <PillarContent>
            <p>Comprehensive tax-benefit logic</p>
            <ul>
              <li>Federal income & payroll tax</li>
              <li>State income tax (all 50 states + DC)</li>
              <li>SNAP, Medicaid, CHIP, ACA subsidies</li>
              <li>SSI, WIC, school meals, TANF, CCDF</li>
              <li>Legislative references & thousands of unit tests</li>
            </ul>
          </PillarContent>
        </PillarCard>

        <PillarCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <PillarTitle>Dynamics</PillarTitle>
          <PillarContent>
            <p>Behavioral response modeling</p>
            <ul>
              <li>Labor supply elasticities</li>
              <li>Extensive margin (participation)</li>
              <li>Intensive margin (hours worked)</li>
              <li>Income effects on consumption</li>
              <li>Adjustable parameters with CBO presets</li>
            </ul>
          </PillarContent>
        </PillarCard>

        <PillarCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <PillarTitle>Data</PillarTitle>
          <PillarContent>
            <p>Multi-source integration</p>
            <ul>
              <li>CPS ASEC foundation</li>
              <li>Integrates IRS PUF, ACS, SCF, SIPP</li>
              <li>Calibrates to national aggregates</li>
              <li>CBO-based aging projections</li>
              <li>Machine learning (QRF) accuracy boost</li>
            </ul>
          </PillarContent>
        </PillarCard>
      </PillarsGrid>

      <InnovationsSection>
        <SubTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          PolicyEngine's Key Innovations
        </SubTitle>
        
        <InnovationGrid>
          <InnovationItem>
            <h4>Geographic Granularity</h4>
            <p>State and district calibration, metropolitan area cost adjustments, local TANF and Medicaid variations</p>
          </InnovationItem>
          
          <InnovationItem>
            <h4>Open Source Architecture</h4>
            <p>18,000+ GitHub commits, transparent methodology, community-driven development, automated testing</p>
          </InnovationItem>
          
          <InnovationItem>
            <h4>Comprehensive Coverage</h4>
            <p>All major federal programs and state variations, with continuous updates to match current law</p>
          </InnovationItem>
          
          <InnovationItem>
            <h4>API-First Design</h4>
            <p>RESTful APIs allow any application to access microsimulation capabilities</p>
          </InnovationItem>
        </InnovationGrid>
      </InnovationsSection>
    </Container>
  );
};

export default ModelInnovationsSlide;