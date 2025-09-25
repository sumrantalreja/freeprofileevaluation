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

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
`;

const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  border-radius: 8px;
  background: ${props => {
    switch(props.type) {
      case 'success': return '#dcfce7';
      case 'warning': return '#fef3c7';
      case 'error': return '#fee2e2';
      case 'info': return '#dbeafe';
      default: return '#f1f5f9';
    }
  }};
  border: 1px solid ${props => {
    switch(props.type) {
      case 'success': return '#bbf7d0';
      case 'warning': return '#fde68a';
      case 'error': return '#fecaca';
      case 'info': return '#bfdbfe';
      default: return '#e2e8f0';
    }
  }};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const BadgeIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const BadgeName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => {
    switch(props.type) {
      case 'success': return '#166534';
      case 'warning': return '#92400e';
      case 'error': return '#dc2626';
      case 'info': return '#1e40af';
      default: return '#64748b';
    }
  }};
  text-align: center;
  line-height: 1.3;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #64748b;
  font-size: 0.875rem;
`;

const BadgesCard = ({ badges }) => {
  const getBadgeIcon = (type) => {
    switch(type) {
      case 'success': return '🏆';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      default: return '🏅';
    }
  };

  return (
    <Card>
      <Title>
        <span>🏅</span>
        Your Badges
      </Title>
      
      {badges && badges.length > 0 ? (
        <BadgesGrid>
          {badges.map((badge, index) => (
            <Badge key={index} type={badge.type}>
              <BadgeIcon>{getBadgeIcon(badge.type)}</BadgeIcon>
              <BadgeName type={badge.type}>{badge.name}</BadgeName>
            </Badge>
          ))}
        </BadgesGrid>
      ) : (
        <EmptyState>
          <div>🏅</div>
          <div style={{ marginTop: '8px' }}>
            Complete your profile to earn badges!
          </div>
        </EmptyState>
      )}
    </Card>
  );
};

export default BadgesCard;

