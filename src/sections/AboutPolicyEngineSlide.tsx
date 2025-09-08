import React, { useState } from 'react';
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #6dd5ed;
`;

const CardContent = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #6dd5ed;
    }
  }
`;

const Highlight = styled(motion.div)`
  background: linear-gradient(135deg, #6dd5ed, #4fb3d4);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.9;
    font-size: 1.1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled(motion.button)<{ active: boolean }>`
  padding: 0.8rem 2rem;
  border: none;
  background: ${props => props.active ? 'rgba(44, 82, 130, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Roboto Serif', serif;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(44, 82, 130, 0.4);
  }
`;

const TrustLogos = styled.div`
  text-align: center;
  
  h3 {
    color: white;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
  
  .logos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .org-box {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    font-size: 0.95rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const AboutPolicyEngineSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <Container>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About PolicyEngine US
      </Title>
      
      <Highlight
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3>Fast, accurate tax-benefit microsimulation</h3>
        <p>Open source platform • Python package • Web app • Since 2021</p>
      </Highlight>
      
      <TabContainer>
        <Tab
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Overview
        </Tab>
        <Tab
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Presenters
        </Tab>
        <Tab
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Trusted by
        </Tab>
      </TabContainer>

      {activeTab === 0 && (
        <Grid>
          <Card
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <CardTitle>Our approach</CardTitle>
            <CardContent>
              <li>Web-first: accessible to all users</li>
              <li>API-driven: integrate anywhere</li>
              <li>Open-source: transparent methodology</li>
              <li>Fast iteration: continuous improvements</li>
            </CardContent>
          </Card>

          <Card
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <CardTitle>Key strengths</CardTitle>
            <CardContent>
              <li>Comprehensive federal & state coverage</li>
              <li>Enhanced CPS with ACS integration</li>
              <li>State and local area calibration (LA County, NYC)</li>
              <li>Behavioral responses built-in</li>
            </CardContent>
          </Card>

          <Card
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <CardTitle>Use cases</CardTitle>
            <CardContent>
              <li>Policy costings & distributional analysis</li>
              <li>Personal tax calculators</li>
              <li>Research & academic studies</li>
              <li>Legislative impact analysis</li>
            </CardContent>
          </Card>
        </Grid>
      )}
      
      {activeTab === 2 && (
        <TrustLogos>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Trusted by US Organizations</h3>
            <div className="logos-grid">
              <div className="org-box">Congressional Research Service</div>
              <div className="org-box">Center on Budget and Policy Priorities</div>
              <div className="org-box">Tax Policy Center</div>
              <div className="org-box">American Enterprise Institute</div>
              <div className="org-box">Brookings Institution</div>
              <div className="org-box">Economic Policy Institute</div>
            </div>
          </motion.div>
        </TrustLogos>
      )}
      
      {activeTab === 1 && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <Card
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ 
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/max-ghenis.png`} 
              alt="Max Ghenis"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #6dd5ed'
              }}
            />
            <div>
              <CardTitle>Max Ghenis</CardTitle>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '0.5rem' }}>Co-founder and CEO</p>
              <CardContent style={{ listStyle: 'none', padding: 0 }}>
                <p style={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                  Max previously founded and served as president of the UBI Center, a think tank researching universal basic
                  income policies, and worked at Google as a data scientist. He earned a bachelor's degree in operations 
                  research from UC Berkeley and a master's degree in Data, Economics, and Development Policy from MIT.
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>max@policyengine.org</p>
              </CardContent>
            </div>
          </Card>
          
          <Card
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/pavel-makarchuk.jpeg`} 
              alt="Pavel Makarchuk"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #6dd5ed'
              }}
            />
            <div>
              <CardTitle>Pavel Makarchuk</CardTitle>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '0.5rem' }}>Economist</p>
              <CardContent style={{ listStyle: 'none', padding: 0 }}>
                <p style={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                  Pavel is an economist specializing in tax policy analysis and microsimulation modeling. 
                  He focuses on evaluating the distributional and revenue impacts of federal and state tax reforms.
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>pavel@policyengine.org</p>
              </CardContent>
            </div>
          </Card>
          
          <Card
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ 
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/daphne-hansell.jpeg`} 
              alt="Daphne Hansell"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #6dd5ed'
              }}
            />
            <div>
              <CardTitle>Daphne Hansell</CardTitle>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '0.5rem' }}>Healthcare Analyst</p>
              <CardContent style={{ listStyle: 'none', padding: 0 }}>
                <p style={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                  Daphne specializes in healthcare policy analysis, focusing on Medicaid, Medicare, and ACA subsidy programs. 
                  She models the impacts of healthcare reforms on coverage, costs, and household budgets.
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>daphne@policyengine.org</p>
              </CardContent>
            </div>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default AboutPolicyEngineSlide;