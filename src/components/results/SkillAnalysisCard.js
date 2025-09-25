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
`;

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.div`
  background: ${props => props.type === 'strength' ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.type === 'strength' ? '#166534' : '#dc2626'};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Icon = styled.span`
  font-size: 1.25rem;
`;

const SkillAnalysisCard = ({ skillMatch, skillGap }) => {
  return (
    <Card>
      <Title>Skill Analysis</Title>
      
      <Section>
        <SectionTitle>
          <Icon>✅</Icon>
          Your Strengths
        </SectionTitle>
        <SkillsList>
          {skillMatch.map((skill, index) => (
            <SkillTag key={index} type="strength">
              {skill}
            </SkillTag>
          ))}
        </SkillsList>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>🎯</Icon>
          Areas to Develop
        </SectionTitle>
        <SkillsList>
          {skillGap.map((skill, index) => (
            <SkillTag key={index} type="gap">
              {skill}
            </SkillTag>
          ))}
        </SkillsList>
      </Section>
    </Card>
  );
};

export default SkillAnalysisCard;

