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
  border: 2px solid ${props => props.active ? '#6dd5ed' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.active ? 'rgba(44, 82, 130, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: 'Roboto Serif', serif;
  
  &:hover {
    background: rgba(44, 82, 130, 0.3);
    border-color: #6dd5ed;
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
    color: #6dd5ed;
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
  border-left: 3px solid #6dd5ed;
  
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

const StateTable = styled.table`
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
    font-size: 0.9rem;
  }
  
  td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

const HealthcareSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      name: "ACA Premium Tax Credits",
      content: (
        <Section>
          <h2>ACA Premium Tax Credits (PTC) Modeling</h2>
          
          <p>
            PolicyEngine models the complex ACA premium subsidy system, accounting for household income, 
            family size, and geographic variation in healthcare costs.
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Income-Based Subsidies</h4>
              <p>Calculates premium contributions as percentage of income from 0% to 8.5% based on FPL</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Second Lowest Cost Silver Plan</h4>
              <p>Uses county-level benchmark premiums to determine subsidy amounts</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Family Coverage</h4>
              <p>Models coverage for all household members including children and dependents</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Cliff Smoothing</h4>
              <p>Accounts for American Rescue Plan changes eliminating the 400% FPL cliff</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Example: 2024 Premium Contributions by Income</h3>
          <StateTable>
            <thead>
              <tr>
                <th>Income (% of FPL)</th>
                <th>Max Premium (% of Income)</th>
                <th>Annual Premium Cap (Family of 4)</th>
                <th>Monthly Subsidy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>150% FPL ($45,000)</td>
                <td>0%</td>
                <td>$0</td>
                <td>$1,584</td>
              </tr>
              <tr>
                <td>200% FPL ($60,000)</td>
                <td>2.0%</td>
                <td>$1,200</td>
                <td>$1,484</td>
              </tr>
              <tr>
                <td>300% FPL ($90,000)</td>
                <td>6.0%</td>
                <td>$5,400</td>
                <td>$1,134</td>
              </tr>
              <tr>
                <td>400% FPL ($120,000)</td>
                <td>8.5%</td>
                <td>$10,200</td>
                <td>$734</td>
              </tr>
            </tbody>
          </StateTable>
        </Section>
      )
    },
    {
      name: "Medicaid by State",
      content: (
        <Section>
          <h2>State-Specific Medicaid Rules</h2>
          
          <p>
            PolicyEngine captures the complex variation in Medicaid eligibility across all 50 states, 
            including expansion status, income thresholds, and categorical eligibility.
          </p>
          
          <h3>Expansion vs Non-Expansion States</h3>
          <StateTable>
            <thead>
              <tr>
                <th>State Type</th>
                <th>Adult Eligibility</th>
                <th>Children (CHIP)</th>
                <th>Pregnant Women</th>
                <th>Parents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>California (Expansion)</td>
                <td>138% FPL</td>
                <td>266% FPL</td>
                <td>213% FPL</td>
                <td>138% FPL</td>
              </tr>
              <tr>
                <td>New York (Expansion)</td>
                <td>138% FPL</td>
                <td>405% FPL</td>
                <td>223% FPL</td>
                <td>138% FPL</td>
              </tr>
              <tr>
                <td>Texas (Non-Expansion)</td>
                <td>Not eligible</td>
                <td>201% FPL</td>
                <td>198% FPL</td>
                <td>17% FPL</td>
              </tr>
              <tr>
                <td>Florida (Non-Expansion)</td>
                <td>Not eligible</td>
                <td>210% FPL</td>
                <td>191% FPL</td>
                <td>32% FPL</td>
              </tr>
            </tbody>
          </StateTable>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Categorical Eligibility</h4>
              <p>Models SSI recipients, foster care youth, and other automatic qualifications</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Medically Needy</h4>
              <p>Accounts for spend-down programs in 32 states with varying income thresholds</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>1115 Waivers</h4>
              <p>Incorporates state-specific demonstration waivers like work requirements</p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      )
    },
    {
      name: "Coverage Gap",
      content: (
        <Section>
          <h2>The Coverage Gap Analysis</h2>
          
          <p>
            PolicyEngine models the "coverage gap" affecting 2.2 million adults in non-expansion states 
            who earn too much for Medicaid but too little for ACA subsidies.
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <h4>Gap Population</h4>
              <p>Adults between ~50% and 100% FPL in non-expansion states with no affordable coverage option</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Geographic Distribution</h4>
              <p>Concentrated in Texas (771,000), Florida (415,000), Georgia (269,000), and North Carolina (213,000)</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Demographic Impact</h4>
              <p>Disproportionately affects working adults, particularly in retail, construction, and food service</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Policy Solutions Modeled</h3>
          <StateTable>
            <thead>
              <tr>
                <th>Policy Option</th>
                <th>Coverage Gain</th>
                <th>Federal Cost (10yr)</th>
                <th>State Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Medicaid Expansion (12 states)</td>
                <td>3.7 million</td>
                <td>$350 billion</td>
                <td>$35 billion</td>
              </tr>
              <tr>
                <td>Federal Public Option</td>
                <td>2.2 million</td>
                <td>$200 billion</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Lower ACA Threshold to 50% FPL</td>
                <td>2.0 million</td>
                <td>$180 billion</td>
                <td>$0</td>
              </tr>
            </tbody>
          </StateTable>
          
          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
            Note: PolicyEngine can model any combination of state expansions, federal subsidies, 
            and eligibility changes to analyze coverage and fiscal impacts.
          </p>
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
        Healthcare Policy Modeling
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

export default HealthcareSlide;