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

const GaugeContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Gauge = styled.div`
  width: 120px;
  height: 60px;
  border-radius: 60px 60px 0 0;
  background: conic-gradient(from 0deg, #ef4444 0deg, #f59e0b 90deg, #10b981 180deg);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 auto 16px;
  position: relative;
  overflow: hidden;
`;

const GaugeNeedle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotate(${props => (props.likelihood * 1.8) - 90}deg);
  width: 2px;
  height: 50px;
  background: #1e293b;
  transform-origin: bottom center;
  border-radius: 1px;
`;

const GaugeCenter = styled.div`
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #1e293b;
  border-radius: 50%;
`;

const LikelihoodNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => {
    if (props.likelihood >= 80) return '#059669';
    if (props.likelihood >= 60) return '#d97706';
    return '#dc2626';
  }};
  margin-bottom: 8px;
`;

const LikelihoodLabel = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`;

const LikelihoodDescription = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const getLikelihoodDescription = (likelihood) => {
  if (likelihood >= 90) return 'Excellent chances of success';
  if (likelihood >= 80) return 'Very good chances of success';
  if (likelihood >= 70) return 'Good chances of success';
  if (likelihood >= 60) return 'Fair chances of success';
  if (likelihood >= 50) return 'Moderate chances of success';
  return 'Needs significant improvement';
};

const SuccessLikelihoodCard = ({ likelihood }) => {
  return (
    <Card>
      <Title>
        <span>🎯</span>
        Success Likelihood
      </Title>
      
      <GaugeContainer>
        <Gauge>
          <GaugeNeedle likelihood={likelihood} />
          <GaugeCenter />
        </Gauge>
        
        <LikelihoodNumber likelihood={likelihood}>{likelihood}%</LikelihoodNumber>
        <LikelihoodLabel>Likelihood of Success</LikelihoodLabel>
        <LikelihoodDescription>{getLikelihoodDescription(likelihood)}</LikelihoodDescription>
      </GaugeContainer>
    </Card>
  );
};

export default SuccessLikelihoodCard;

