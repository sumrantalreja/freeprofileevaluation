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

const ReadinessItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

const ReadinessLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Score = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => {
    if (props.score >= 80) return '#059669';
    if (props.score >= 60) return '#d97706';
    return '#dc2626';
  }};
`;

const ProgressBar = styled.div`
  width: 60px;
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${props => {
    if (props.score >= 80) return '#10b981';
    if (props.score >= 60) return '#f59e0b';
    return '#ef4444';
  }};
  transition: width 0.3s ease;
  width: ${props => props.score}%;
`;

const InterviewReadinessCard = ({ readiness }) => {
  const getReadinessIcon = (type) => {
    switch(type) {
      case 'technical': return '💻';
      case 'hr': return '🤝';
      default: return '📋';
    }
  };

  const getReadinessLabel = (type) => {
    switch(type) {
      case 'technical': return 'Technical Interview';
      case 'hr': return 'HR/Behavioral';
      default: return 'Interview';
    }
  };

  return (
    <Card>
      <Title>
        <span>🎯</span>
        Interview Readiness
      </Title>
      
      {Object.entries(readiness).map(([type, score]) => (
        <ReadinessItem key={type}>
          <ReadinessLabel>
            <span>{getReadinessIcon(type)}</span>
            {getReadinessLabel(type)}
          </ReadinessLabel>
          <ScoreContainer>
            <Score score={score}>{score}%</Score>
            <ProgressBar>
              <ProgressFill score={score} />
            </ProgressBar>
          </ScoreContainer>
        </ReadinessItem>
      ))}
    </Card>
  );
};

export default InterviewReadinessCard;
