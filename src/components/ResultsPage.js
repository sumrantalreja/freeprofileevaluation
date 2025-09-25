import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { evaluateProfile } from '../utils/evaluationLogic';
import styled from 'styled-components';
import ProfileStrengthCard from './results/ProfileStrengthCard';
import SkillAnalysisCard from './results/SkillAnalysisCard';
import ToolRecommendationsCard from './results/ToolRecommendationsCard';
import ExperienceBenchmarkCard from './results/ExperienceBenchmarkCard';
import InterviewReadinessCard from './results/InterviewReadinessCard';
import PeerComparisonCard from './results/PeerComparisonCard';
import SuccessLikelihoodCard from './results/SuccessLikelihoodCard';
import QuickWinsCard from './results/QuickWinsCard';
import MissedOpportunitiesCard from './results/MissedOpportunitiesCard';
import BadgesCard from './results/BadgesCard';
import RecommendedRolesCard from './results/RecommendedRolesCard';

const ResultsContainer = styled.div`
  min-height: calc(100vh - 70px);
  background: #f8fafc;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.125rem;
  color: #64748b;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const FullWidthCard = styled.div`
  grid-column: 1 / -1;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`;

const PrimaryButton = styled(ActionButton)`
  background: #3b82f6;
  color: white;

  &:hover {
    background: #2563eb;
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: #f1f5f9;
  color: #475569;

  &:hover {
    background: #e2e8f0;
  }
`;

const ResultsPage = () => {
  const navigate = useNavigate();
  const { quizResponses, goals, background, evaluationResults, setEvaluationResults } = useProfile();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate evaluation processing time
    const timer = setTimeout(() => {
      const results = evaluateProfile(quizResponses, goals, background);
      setEvaluationResults(results);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [quizResponses, goals, background, setEvaluationResults]);

  const handleStartOver = () => {
    navigate('/');
  };

  const handleRetakeQuiz = () => {
    navigate('/quiz');
  };

  if (isLoading) {
    return (
      <ResultsContainer>
        <Container>
          <LoadingContainer>
            Analyzing your profile and generating personalized insights...
          </LoadingContainer>
        </Container>
      </ResultsContainer>
    );
  }

  if (!evaluationResults) {
    return (
      <ResultsContainer>
        <Container>
          <LoadingContainer>
            Unable to generate evaluation results. Please try again.
          </LoadingContainer>
        </Container>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Container>
        <Header>
          <Title>Your Profile Evaluation</Title>
          <Subtitle>
            Comprehensive analysis of your {background === 'non-tech' ? 'career transition' : 'tech career'} readiness
          </Subtitle>
        </Header>

        <ResultsGrid>
          {/* Profile Strength - Full Width */}
          <FullWidthCard>
            <ProfileStrengthCard 
              score={evaluationResults.profileStrengthScore}
              badges={evaluationResults.badges}
            />
          </FullWidthCard>

          {/* Skill Analysis */}
          <SkillAnalysisCard 
            skillMatch={evaluationResults.skillMatch}
            skillGap={evaluationResults.skillGap}
          />

          {/* Tool Recommendations */}
          <ToolRecommendationsCard 
            tools={evaluationResults.toolRecommendations}
          />

          {/* Experience Benchmarking */}
          <ExperienceBenchmarkCard 
            benchmark={evaluationResults.experienceBenchmarking}
          />

          {/* Interview Readiness */}
          <InterviewReadinessCard 
            readiness={evaluationResults.interviewReadiness}
          />

          {/* Peer Comparison */}
          <PeerComparisonCard 
            comparison={evaluationResults.peerComparison}
          />

          {/* Success Likelihood */}
          <SuccessLikelihoodCard 
            likelihood={evaluationResults.likelihoodOfSuccess}
          />

          {/* Quick Wins */}
          <QuickWinsCard 
            quickWins={evaluationResults.quickWins}
          />

          {/* Missed Opportunities */}
          <MissedOpportunitiesCard 
            opportunities={evaluationResults.missedOpportunities}
          />

          {/* Recommended Roles */}
          <RecommendedRolesCard 
            recommendedRoles={evaluationResults.recommendedRoles}
          />

          {/* Badges */}
          <BadgesCard 
            badges={evaluationResults.badges}
          />
        </ResultsGrid>

        <ActionsContainer>
          <SecondaryButton onClick={handleRetakeQuiz}>
            Retake Quiz
          </SecondaryButton>
          <PrimaryButton onClick={handleStartOver}>
            Start New Evaluation
          </PrimaryButton>
        </ActionsContainer>
      </Container>
    </ResultsContainer>
  );
};

export default ResultsPage;
