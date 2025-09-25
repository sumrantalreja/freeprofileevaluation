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

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const RoleCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }
`;

const RoleTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`;

const RoleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Level = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Salary = styled.span`
  color: #059669;
  font-weight: 600;
  font-size: 0.875rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #64748b;
  font-size: 0.875rem;
`;

const RecommendedRolesCard = ({ recommendedRoles }) => {
  return (
    <Card>
      <Title>
        <span>🎯</span>
        Recommended Roles Based on Your Interests
      </Title>
      
      {recommendedRoles && recommendedRoles.length > 0 ? (
        <RolesGrid>
          {recommendedRoles.map((role, index) => (
            <RoleCard key={index}>
              <RoleTitle>{role.role}</RoleTitle>
              <RoleDetails>
                <Level>{role.level}</Level>
                <Salary>{role.salary}</Salary>
              </RoleDetails>
            </RoleCard>
          ))}
        </RolesGrid>
      ) : (
        <EmptyState>
          <div>🎯</div>
          <div style={{ marginTop: '8px' }}>
            Select topics of interest to see recommended roles!
          </div>
        </EmptyState>
      )}
    </Card>
  );
};

export default RecommendedRolesCard;

