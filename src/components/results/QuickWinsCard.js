import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WinsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const WinItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f0f9ff;
  border: 1px solid #e0f2fe;
  border-radius: 8px;
`;

const WinNumber = styled.div`
  background: #3b82f6;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const WinText = styled.div`
  font-size: 0.875rem;
  color: #1e293b;
  line-height: 1.5;
`;

const QuickWinsCard = ({ quickWins }) => {
  return (
    <Card>
      <Title>
        <span>⚡</span>
        Top 3 Quick Wins
      </Title>
      <WinsList>
        {quickWins.map((win, index) => (
          <WinItem key={index}>
            <WinNumber>{index + 1}</WinNumber>
            <WinText>{win}</WinText>
          </WinItem>
        ))}
      </WinsList>
    </Card>
  );
};

export default QuickWinsCard;

