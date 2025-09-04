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

const SubTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubTab = styled(motion.button)<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? '#0a4f4f' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.active ? 'rgba(44, 82, 130, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: 'Roboto Serif', serif;
  
  &:hover {
    background: rgba(44, 82, 130, 0.3);
    border-color: #0a4f4f;
  }
`;

const TabContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.8rem;
    color: #0a4f4f;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 0.8rem;
    margin-top: 1.5rem;
  }
  
  p {
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 1.2rem;
  border-radius: 8px;
  border-left: 3px solid #0a4f4f;
  
  h4 {
    color: white;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    opacity: 0.9;
    line-height: 1.5;
    font-size: 0.95rem;
  }
`;

const ComparisonTable = styled.table`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
  
  th {
    background: rgba(44, 82, 130, 0.3);
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

const BehavioralResponsesSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      name: "Labor Supply",
      content: (
        <Section>
          <h2>Labor Supply Responses in PolicyEngine US</h2>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Income Effect</h4>
              <p><strong>-0.05 elasticity:</strong> When disposable income increases by 10%, hours worked decrease by 0.5%</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Substitution Effect</h4>
              <p><strong>0.25 elasticity:</strong> When the net-of-tax wage rate increases by 10%, hours worked increase by 2.5%</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Extensive Margin</h4>
              <p><strong>0.25 participation elasticity:</strong> Labor force participation responds to changes in work incentives</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Evidence Base</h3>
          <p>
            Our elasticities are calibrated to Congressional Budget Office (CBO) estimates, which synthesize 
            decades of empirical research. These parameters can be customized for sensitivity analysis.
          </p>
          
          <ComparisonTable>
            <thead>
              <tr>
                <th>Group</th>
                <th>Substitution Elasticity</th>
                <th>Income Elasticity</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary earners</td>
                <td>0.25</td>
                <td>-0.05</td>
                <td>CBO (2012)</td>
              </tr>
              <tr>
                <td>Secondary earners</td>
                <td>0.32</td>
                <td>-0.10</td>
                <td>CBO (2012)</td>
              </tr>
              <tr>
                <td>Low-income workers</td>
                <td>0.30</td>
                <td>-0.05</td>
                <td>Saez et al. (2012)</td>
              </tr>
            </tbody>
          </ComparisonTable>
        </Section>
      )
    },
    {
      name: "Capital Responses",
      content: (
        <Section>
          <h2>Capital Income Behavioral Responses</h2>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Capital Gains Realizations</h4>
              <p><strong>-0.7 elasticity:</strong> A 1pp increase in capital gains tax rate reduces realizations by 0.7%</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Timing Effects</h4>
              <p>Short-run elasticities are larger (-1.0) as taxpayers can time realizations around rate changes</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Lock-in Effect</h4>
              <p>Higher rates discourage asset sales, leading to inefficient capital allocation</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Recent Analysis: 2024 Capital Gains Rate Changes</h3>
          <ComparisonTable>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Rate Change</th>
                <th>Static Revenue</th>
                <th>Dynamic Revenue</th>
                <th>Behavioral Offset</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Increase top rate to 28%</td>
                <td>23.8% → 28%</td>
                <td>$12.3B</td>
                <td>$7.4B</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Equalize with ordinary income</td>
                <td>23.8% → 37%</td>
                <td>$28.5B</td>
                <td>$11.2B</td>
                <td>61%</td>
              </tr>
            </tbody>
          </ComparisonTable>
        </Section>
      )
    },
    {
      name: "Implementation",
      content: (
        <Section>
          <h2>How PolicyEngine Models Behavioral Responses</h2>
          
          <h3>Two-Stage Process</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Stage 1: Static Analysis</h4>
              <p>Calculate mechanical effects assuming no behavioral change. This shows the direct policy impact.</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Stage 2: Dynamic Response</h4>
              <p>Apply behavioral elasticities to adjust labor supply, capital realizations, and other margins.</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Customizable Parameters</h3>
          <p>
            PolicyEngine allows users to adjust behavioral parameters or turn them off entirely. 
            This enables sensitivity analysis and comparison with static estimates from other sources.
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Default Settings</h4>
              <p>CBO/JCT consensus elasticities based on empirical literature</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Custom Scenarios</h4>
              <p>Test alternative assumptions about behavioral responses</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Static Mode</h4>
              <p>Disable all behavioral responses for comparison with conventional scoring</p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      )
    }
  ];
  
  const currentTab = tabs[activeTab];
  
  return (
    <Container>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Behavioral Responses & Dynamic Scoring
      </Title>
      
      <SubTabs>
        {tabs.map((tab, index) => (
          <SubTab
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.name}
          </SubTab>
        ))}
      </SubTabs>
      
      <TabContent
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {currentTab.content}
      </TabContent>
    </Container>
  );
};

export default BehavioralResponsesSlide;