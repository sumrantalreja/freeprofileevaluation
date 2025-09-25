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

const BenchmarkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const Value = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e293b;
`;

const GapIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch(props.gap) {
      case 'none': return '#dcfce7';
      case 'moderate': return '#fef3c7';
      case 'significant': return '#fee2e2';
      default: return '#f1f5f9';
    }
  }};
  color: ${props => {
    switch(props.gap) {
      case 'none': return '#166534';
      case 'moderate': return '#92400e';
      case 'significant': return '#dc2626';
      default: return '#64748b';
    }
  }};
`;

const ExperienceBenchmarkCard = ({ benchmark }) => {
  const getGapIcon = (gap) => {
    switch(gap) {
      case 'none': return '✅';
      case 'moderate': return '⚠️';
      case 'significant': return '❌';
      default: return 'ℹ️';
    }
  };

  const getGapText = (gap) => {
    switch(gap) {
      case 'none': return 'On Track';
      case 'moderate': return 'Minor Gap';
      case 'significant': return 'Major Gap';
      default: return 'Unknown';
    }
  };

  return (
    <Card>
      <Title>
        <span>📊</span>
        Experience Benchmark
      </Title>
      
      <BenchmarkItem>
        <Label>Your Experience</Label>
        <Value>{benchmark.current}</Value>
      </BenchmarkItem>

      <BenchmarkItem>
        <Label>Typical for Target Role</Label>
        <Value>{benchmark.typical}</Value>
      </BenchmarkItem>

      <BenchmarkItem>
        <Label>Gap Analysis</Label>
        <GapIndicator gap={benchmark.gap}>
          <span>{getGapIcon(benchmark.gap)}</span>
          {getGapText(benchmark.gap)}
        </GapIndicator>
      </BenchmarkItem>
    </Card>
  );
};

export default ExperienceBenchmarkCard;

