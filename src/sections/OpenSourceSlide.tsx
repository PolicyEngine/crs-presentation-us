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

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const BenefitCard = styled.div`
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

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  
  code {
    color: #4fc3f7;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
  }
`;

const OpenSourceSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      name: "Why Open Source",
      content: (
        <Section>
          <h2>The Power of Open-Source Microsimulation</h2>
          
          <BenefitGrid>
            <BenefitCard>
              <h4>🔍 Transparency</h4>
              <p>Every calculation is auditable. Policymakers and researchers can verify exactly how impacts are computed.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>🔄 Reproducibility</h4>
              <p>Results can be independently verified. Version control ensures historical analyses remain reproducible.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>👥 Collaboration</h4>
              <p>Researchers worldwide can contribute improvements, catch errors, and extend capabilities.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>🚀 Rapid Innovation</h4>
              <p>New policies can be modeled within hours of announcement. Community contributions accelerate development.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>💰 Cost-Effective</h4>
              <p>No licensing fees. Resources focus on improvement rather than access costs.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>🎓 Educational</h4>
              <p>Students and new researchers can learn from real implementation. Lowers barriers to policy analysis.</p>
            </BenefitCard>
          </BenefitGrid>
        </Section>
      )
    },
    {
      name: "How It Works",
      content: (
        <Section>
          <h2>PolicyEngine's Open-Source Architecture</h2>
          
          <h3>Core Components</h3>
          <BenefitGrid>
            <BenefitCard>
              <h4>Core Framework</h4>
              <p>OpenFisca-based foundation providing the computational engine, variable system, and simulation infrastructure. Handles time periods, entities, and formula evaluation.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Rules Engine</h4>
              <p>Python-encoded tax and benefit logic with 1,000+ parameters and formulas. Each rule links to legislation, ensuring transparency and maintainability.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Data Layer</h4>
              <p>Enhanced CPS/ACS microdata with calibration weights, imputation models, and validation against administrative benchmarks. Covers 300,000+ households.</p>
            </BenefitCard>
          </BenefitGrid>
          
          <h3>Example: Calculating EITC</h3>
          <CodeBlock>
            <code>{`from policyengine_us import Simulation

def calculate_eitc(employment_income: float, num_children: int = 1) -> float:
    """Calculate EITC for a household.
    
    Args:
        employment_income: Annual employment income in USD
        num_children: Number of qualifying children
        
    Returns:
        EITC amount in USD
    """
    # Create household structure
    people = {
        "parent": {
            "age": 35,
            "employment_income": employment_income
        }
    }
    
    # Add children to household
    for i in range(num_children):
        people[f"child_{i}"] = {"age": 10}
    
    # Configure tax unit
    members = ["parent"] + [f"child_{i}" for i in range(num_children)]
    
    sim = Simulation(
        situation={
            "people": people,
            "tax_units": {
                "unit": {
                    "members": members,
                    "filer_type": "head_of_household"
                }
            }
        }
    )
    
    # Calculate EITC for tax year 2024
    return sim.calculate("earned_income_tax_credit", 2024)

# Example usage
if __name__ == "__main__":
    eitc_amount = calculate_eitc(employment_income=25_000, num_children=1)
    print("EITC amount: $" + "{:,.2f}".format(eitc_amount))`}</code>
          </CodeBlock>
        </Section>
      )
    },
    {
      name: "Governance",
      content: (
        <Section>
          <h2>Transparent Governance & Quality Control</h2>
          
          <BenefitGrid>
            <BenefitCard>
              <h4>Public Repository</h4>
              <p>All code on GitHub with complete history. Every change is tracked and attributed.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Peer Review</h4>
              <p>Pull requests reviewed by multiple contributors. Major changes require extensive testing.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Automated Testing</h4>
              <p>Thousands of unit tests run on every change. Continuous integration prevents regressions.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Documentation Standards</h4>
              <p>Every parameter linked to legislation. Clear documentation of assumptions and limitations.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Version Control</h4>
              <p>Semantic versioning for stability. Can reproduce any historical analysis exactly.</p>
            </BenefitCard>
            
            <BenefitCard>
              <h4>Community Oversight</h4>
              <p>Issues publicly tracked. Users can report bugs, suggest improvements, and contribute fixes.</p>
            </BenefitCard>
          </BenefitGrid>
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
        Open-Source Microsimulation
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

export default OpenSourceSlide;