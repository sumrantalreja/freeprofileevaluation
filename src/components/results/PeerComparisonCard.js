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

const ComparisonContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const PercentileCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
`;

const PercentileNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const PercentileLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const Description = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 8px;
`;

const SubDescription = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 4px;
`;

const PeerComparisonCard = ({ comparison }) => {
  return (
    <Card>
      <Title>
        <span>👥</span>
        Peer Comparison
      </Title>
      
      <ComparisonContainer>
        <PercentileCircle>
          <div>
            <PercentileNumber>{comparison.percentile}</PercentileNumber>
            <PercentileLabel>th percentile</PercentileLabel>
          </div>
        </PercentileCircle>
        
        <Description>{comparison.description}</Description>
        <SubDescription>
          You rank better than {comparison.betterThan}% of similar profiles
        </SubDescription>
      </ComparisonContainer>

      <StatsContainer>
        <StatItem>
          <StatNumber>{comparison.percentile}%</StatNumber>
          <StatLabel>Profile Strength</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{comparison.betterThan}%</StatNumber>
          <StatLabel>Better Than Peers</StatLabel>
        </StatItem>
      </StatsContainer>
    </Card>
  );
};

export default PeerComparisonCard;

