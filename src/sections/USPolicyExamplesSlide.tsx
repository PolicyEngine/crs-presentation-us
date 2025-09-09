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

const ExampleTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tab = styled(motion.button)<{ active: boolean }>`
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

const ExampleContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContentGrid = styled.div<{ $hasImage: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$hasImage ? '1fr 1fr' : '1fr'};
  gap: 2rem;
  align-items: start;
`;

const TextContent = styled.div`
  h2 {
    font-size: 1.8rem;
    color: #6dd5ed;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.8rem 0;
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
      
      ul {
        li {
          padding-left: 0;
          
          &:before {
            content: "";
          }
        }
      }
    }
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1.5rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    
    th, td {
      padding: 0.8rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    th {
      background: rgba(44, 82, 130, 0.2);
      font-weight: bold;
      color: white;
      font-size: 0.9rem;
    }
    
    td {
      font-size: 0.95rem;
      
      a {
        color: white;
        text-decoration: underline;
      }
    }
    
    tr:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

const USPolicyExamplesSlide: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);
  
  const examples = [
    {
      name: "Child Tax Credit",
      title: "Child Tax Credit Enhancement Analysis",
      content: (
        <ContentGrid $hasImage={false}>
          <TextContent>
            <h2>CTC Enhancement: $3,000/$3,600 per child</h2>
            <div className="subtitle">
              PolicyEngine US analysis of expanding the Child Tax Credit to 2021 American Rescue Plan levels
            </div>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Current CTC</th>
                    <th>Enhanced CTC</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'rgba(44, 82, 130, 0.2)' }}>
                    <td><strong>Annual Cost</strong></td>
                    <td>$110B</td>
                    <td><strong><a href="https://policyengine.org/us/policy?reform=1" target="_blank" rel="noreferrer">$220B</a></strong></td>
                    <td><strong>+$110B</strong></td>
                  </tr>
                  <tr>
                    <td>Families Affected</td>
                    <td>36.7M</td>
                    <td>39.6M</td>
                    <td>+2.9M</td>
                  </tr>
                  <tr>
                    <td>Child Poverty Rate</td>
                    <td>10.5%</td>
                    <td>8.4%</td>
                    <td>-2.1pp</td>
                  </tr>
                  <tr>
                    <td>Average Benefit per Family</td>
                    <td>$2,995</td>
                    <td>$5,555</td>
                    <td>+$2,560</td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.9 }}>
              <strong>Key Features:</strong> Full refundability, monthly payments, expanded age eligibility (through age 17), 
              and increased credit amounts ($3,600 for children under 6, $3,000 for ages 6-17).
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9 }}>
              <strong>Data Sources:</strong> Current Population Survey (CPS) March Supplement, calibrated to Treasury and 
              IRS administrative data for accuracy.
            </p>
          </TextContent>
        </ContentGrid>
      )
    },
    {
      name: "EITC Expansion",
      title: "Earned Income Tax Credit Expansion",
      content: (
        <ContentGrid $hasImage={false}>
          <TextContent>
            <h2>EITC Enhancement: Childless Workers & Higher Benefits</h2>
            <div className="subtitle">
              Analysis of expanding EITC for childless workers and increasing benefits across all family sizes
            </div>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Family Type</th>
                    <th>Current Max EITC</th>
                    <th>Proposed Max EITC</th>
                    <th>Increase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No children</td>
                    <td>$560</td>
                    <td><strong>$1,500</strong></td>
                    <td>+$940</td>
                  </tr>
                  <tr>
                    <td>1 child</td>
                    <td>$3,733</td>
                    <td><strong>$4,500</strong></td>
                    <td>+$767</td>
                  </tr>
                  <tr>
                    <td>2 children</td>
                    <td>$6,164</td>
                    <td><strong>$7,000</strong></td>
                    <td>+$836</td>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(44, 82, 130, 0.2)' }}>
                    <td><strong>3+ children</strong></td>
                    <td><strong>$6,935</strong></td>
                    <td><strong><a href="https://policyengine.org/us/policy?reform=2" target="_blank" rel="noreferrer">$8,000</a></strong></td>
                    <td><strong>+$1,065</strong></td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <ul style={{ marginTop: '1.5rem' }}>
              <li><strong>Cost:</strong> Additional $45B annually</li>
              <li><strong>Beneficiaries:</strong> 19M additional workers, particularly childless adults aged 19-64</li>
              <li><strong>Poverty Reduction:</strong> 1.3 million people lifted above poverty line</li>
              <li><strong>Work Incentives:</strong> Strengthens incentives to work for low-income individuals</li>
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9 }}>
              <strong>Validation:</strong> Our estimates are designed to align with CBO projections and Treasury analyses.
            </p>
          </TextContent>
        </ContentGrid>
      )
    },
    {
      name: "SNAP Enhancement",
      title: "SNAP Benefit Enhancement Analysis",
      content: (
        <ContentGrid $hasImage={false}>
          <TextContent>
            <h2>SNAP Benefits: 15% Across-the-Board Increase</h2>
            <div className="subtitle">
              Analysis of permanently increasing Supplemental Nutrition Assistance Program benefits
            </div>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Household Size</th>
                    <th>Current Max Benefit</th>
                    <th>Enhanced Benefit</th>
                    <th>Monthly Increase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 person</td>
                    <td>$291</td>
                    <td>$335</td>
                    <td>+$44</td>
                  </tr>
                  <tr>
                    <td>2 people</td>
                    <td>$535</td>
                    <td>$615</td>
                    <td>+$80</td>
                  </tr>
                  <tr>
                    <td>3 people</td>
                    <td>$766</td>
                    <td>$881</td>
                    <td>+$115</td>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(44, 82, 130, 0.2)' }}>
                    <td><strong>4 people</strong></td>
                    <td><strong>$973</strong></td>
                    <td><strong><a href="https://policyengine.org/us/policy?reform=3" target="_blank" rel="noreferrer">$1,119</a></strong></td>
                    <td><strong>+$146</strong></td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <ul style={{ marginTop: '1.5rem' }}>
              <li><strong>Annual Cost:</strong> $12.8B increase (15% of current SNAP spending)</li>
              <li><strong>Participants Affected:</strong> All 41.2M current SNAP recipients benefit</li>
              <li><strong>Food Security:</strong> Significant reduction in food insecurity rates</li>
              <li><strong>Economic Multiplier:</strong> $1.50-$1.80 in economic activity per $1 of SNAP benefits</li>
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9 }}>
              <strong>Data Integration:</strong> Uses American Community Survey (ACS) and administrative SNAP participation 
              data from USDA Food and Nutrition Service, calibrated for accurate geographic and demographic distribution.
            </p>
          </TextContent>
        </ContentGrid>
      )
    }
  ];
  
  const currentExample = examples[activeExample];
  
  return (
    <Container>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Validation: US Federal Programs Analysis
      </Title>
      
      <ExampleTabs>
        {examples.map((example, index) => (
          <Tab
            key={index}
            active={activeExample === index}
            onClick={() => setActiveExample(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {example.name}
          </Tab>
        ))}
      </ExampleTabs>
      
      <ExampleContent
        key={activeExample}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {currentExample.content}
      </ExampleContent>
    </Container>
  );
};

export default USPolicyExamplesSlide;