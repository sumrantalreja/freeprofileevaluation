import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 32px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Option = styled.button`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const OptionIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
`;

const OptionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`;

const OptionDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
`;

const BackgroundSelection = ({ onSelect }) => {
  const handleBackgroundSelect = (background) => {
    onSelect(background);
  };

  return (
    <Container>
      <Title>What's your current background?</Title>
      <Subtitle>This helps us personalize your evaluation</Subtitle>
      
      <OptionsContainer>
        <Option onClick={() => handleBackgroundSelect('non-tech')}>
          <OptionIcon>🔄</OptionIcon>
          <OptionTitle>Non-Tech / Career Switcher</OptionTitle>
          <OptionDescription>
            I'm looking to transition into tech from a non-technical background 
            or switching careers within tech
          </OptionDescription>
        </Option>
        
        <Option onClick={() => handleBackgroundSelect('tech')}>
          <OptionIcon>💻</OptionIcon>
          <OptionTitle>Tech Professional</OptionTitle>
          <OptionDescription>
            I'm already working in tech and want to advance my career 
            or explore new opportunities
          </OptionDescription>
        </Option>
      </OptionsContainer>
    </Container>
  );
};

export default BackgroundSelection;
