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

const OpportunitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OpportunityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 8px;
`;

const OpportunityIcon = styled.div`
  font-size: 1.25rem;
`;

const OpportunityText = styled.div`
  font-size: 0.875rem;
  color: #92400e;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #64748b;
  font-size: 0.875rem;
`;

const MissedOpportunitiesCard = ({ opportunities }) => {
  return (
    <Card>
      <Title>
        <span>🎯</span>
        Opportunities You Qualify For
      </Title>
      
      {opportunities && opportunities.length > 0 ? (
        <OpportunitiesList>
          {opportunities.map((opportunity, index) => (
            <OpportunityItem key={index}>
              <OpportunityIcon>💼</OpportunityIcon>
              <OpportunityText>{opportunity}</OpportunityText>
            </OpportunityItem>
          ))}
        </OpportunitiesList>
      ) : (
        <EmptyState>
          <div>🎯</div>
          <div style={{ marginTop: '8px' }}>
            Keep building your skills to unlock more opportunities!
          </div>
        </EmptyState>
      )}
    </Card>
  );
};

export default MissedOpportunitiesCard;

