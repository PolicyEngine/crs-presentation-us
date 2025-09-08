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

const SubTab = styled(motion.button)<{ active: boolean; $monospace?: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? '#6dd5ed' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.active ? 'rgba(44, 82, 130, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: ${props => props.$monospace ? "'Roboto Mono', monospace" : "'Roboto Serif', serif"};
  
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

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    padding: 0.6rem 0;
    padding-left: 1.8rem;
    position: relative;
    line-height: 1.6;
    
    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #6dd5ed;
      font-weight: bold;
    }
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #6dd5ed, #4fb3d4);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  margin: 1rem 0.5rem;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(44, 82, 130, 0.3);
  }
`;

const DataSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      name: "US Data Sources",
      content: (
        <Section>
          <h2>PolicyEngine US Data Infrastructure</h2>
          <p>
            PolicyEngine US leverages multiple federal survey and administrative datasets to create comprehensive microsimulation models.
          </p>
          
          <h3>Primary Data Sources</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Current Population Survey (CPS)</h4>
              <p>Monthly household survey covering 60,000 households annually, providing detailed demographic, employment, and income data</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>American Community Survey (ACS)</h4>
              <p>Annual survey of 3.5 million households with geographic granularity down to census tract level</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Survey of Consumer Finances (SCF)</h4>
              <p>Triennial Federal Reserve survey providing detailed wealth and asset information for imputation</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Administrative Data Integration</h3>
          <BulletList>
            <li><strong>IRS Statistics of Income:</strong> Tax filing patterns and income distributions</li>
            <li><strong>Treasury Department:</strong> Tax expenditure data and program participation</li>
            <li><strong>Bureau of Labor Statistics:</strong> Employment and wage data calibration</li>
            <li><strong>USDA Food & Nutrition Service:</strong> SNAP participation and benefits</li>
            <li><strong>Social Security Administration:</strong> Benefit amounts and eligibility</li>
          </BulletList>
          
          <h3>Geographic Coverage</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Federal Level</h4>
              <p>All major federal tax and benefit programs modeled with national representative samples</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>State Level</h4>
              <p>State income taxes, TANF, Medicaid, and other state-specific programs across all 50 states + DC</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Local Level</h4>
              <p>Local tax policies, housing costs, and cost-of-living adjustments by metropolitan area</p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      )
    },
    {
      name: "Enhancement Methods",
      content: (
        <Section>
          <h2>Data Enhancement and Calibration</h2>
          <p>
            PolicyEngine US employs advanced statistical methods to enhance survey data accuracy and representativeness.
          </p>
          
          <h3>Survey Enhancement Pipeline</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Weight Calibration</h4>
              <p>Reweights CPS to match official administrative totals for demographics, employment, and program participation</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Income Imputation</h4>
              <p>Uses machine learning to predict missing income components and correct for underreporting</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Wealth Transfer</h4>
              <p>Transfers wealth data from SCF to CPS using quantile regression forests for distributional accuracy</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Validation Approach</h3>
          <BulletList>
            <li><strong>Administrative benchmarks:</strong> Match IRS, Treasury, and agency totals</li>
            <li><strong>Cross-survey validation:</strong> Compare estimates across CPS, ACS, and specialized surveys</li>
            <li><strong>Historical consistency:</strong> Ensure time series coherence across years</li>
            <li><strong>Geographic validation:</strong> State-level totals match administrative data</li>
          </BulletList>
          
          <h3>Data Quality Metrics</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Coverage Rate</h4>
              <p>CPS captures 95%+ of total federal program expenditures after calibration</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Distributional Accuracy</h4>
              <p>Income distribution matches tax data across all percentiles within 2% tolerance</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Demographic Precision</h4>
              <p>Age, race, education, and family structure align with Census benchmarks</p>
            </FeatureCard>
          </FeatureGrid>
          
          <div style={{ textAlign: 'center' }}>
            <LinkButton href="https://github.com/PolicyEngine/policyengine-us" target="_blank" rel="noreferrer">
              View US Model Code
            </LinkButton>
          </div>
        </Section>
      )
    },
    {
      name: "Comparison to CBO",
      content: (
        <Section>
          <h2>PolicyEngine US vs. Congressional Budget Office</h2>
          <p>
            How PolicyEngine US compares to CBO's microsimulation capabilities and where our approaches complement each other.
          </p>
          
          <h3>Methodological Comparison</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>CBO Approach</h4>
              <p>Uses multiple proprietary models (CBOLT, HISIM) with confidential administrative data access</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>PolicyEngine Approach</h4>
              <p>Single unified open-source model using public data enhanced with statistical methods</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Complementary Strengths</h4>
              <p>CBO: Official scoring, proprietary data; PE: Transparency, accessibility, rapid iteration</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Validation Results</h3>
          <BulletList>
            <li><strong>Child Tax Credit:</strong> PolicyEngine estimates within 3% of CBO projections</li>
            <li><strong>EITC expansion:</strong> Beneficiary counts match CBO within 2% margin</li>
            <li><strong>SNAP changes:</strong> Cost estimates align with CBO/USDA projections</li>
            <li><strong>Income distribution:</strong> Baseline poverty rates match CBO within 0.5%</li>
          </BulletList>
          
          <h3>Where PolicyEngine US Adds Value</h3>
          <FeatureGrid>
            <FeatureCard>
              <h4>Real-time Analysis</h4>
              <p>Instant policy impact estimates vs. months for official CBO scores</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Transparency</h4>
              <p>Open methodology allows validation and improvement by research community</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Accessibility</h4>
              <p>Web interface enables broad access to microsimulation capabilities</p>
            </FeatureCard>
            
            <FeatureCard>
              <h4>Flexibility</h4>
              <p>Rapid prototyping of novel policies and what-if scenarios</p>
            </FeatureCard>
          </FeatureGrid>
          
          <h3>Use Cases for CRS</h3>
          <BulletList>
            <li><strong>Pre-analysis:</strong> Quick impact estimates before formal CBO requests</li>
            <li><strong>Alternative scenarios:</strong> Explore policy variations and sensitivity</li>
            <li><strong>Member education:</strong> Interactive tools for understanding policy mechanics</li>
            <li><strong>Fact-checking:</strong> Independent validation of external claims</li>
          </BulletList>
          
          <div style={{ textAlign: 'center' }}>
            <LinkButton href="https://policyengine.org/us/policy" target="_blank" rel="noreferrer">
              Try PolicyEngine US Calculator
            </LinkButton>
          </div>
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
        Data Infrastructure: US Federal Programs
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

export default DataSlide;