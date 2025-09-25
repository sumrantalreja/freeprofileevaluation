import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Question = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
  line-height: 1.4;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Option = styled.button`
  background: ${props => props.selected ? '#eff6ff' : 'white'};
  border: 2px solid ${props => props.selected ? '#3b82f6' : '#e2e8f0'};
  border-radius: 8px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  position: relative;

  &:hover {
    border-color: #3b82f6;
    background: #f8fafc;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const OptionText = styled.div`
  font-size: 1rem;
  color: #1e293b;
  font-weight: 500;
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #3b82f6;
  font-size: 1.25rem;
  opacity: ${props => props.selected ? 1 : 0};
  transition: opacity 0.2s ease;
`;

const QuizQuestion = ({ question, options, selectedValue, onSelect }) => {
  const handleOptionClick = (value) => {
    onSelect(value);
  };

  return (
    <Container>
      <Question>{question}</Question>
      <OptionsList>
        {options.map((option) => (
          <Option
            key={option.value}
            selected={selectedValue === option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            <OptionText>{option.label}</OptionText>
            <CheckIcon selected={selectedValue === option.value}>✓</CheckIcon>
          </Option>
        ))}
      </OptionsList>
    </Container>
  );
};

export default QuizQuestion;
