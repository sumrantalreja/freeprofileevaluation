import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import styled from 'styled-components';
import BackgroundSelection from './quiz/BackgroundSelection';
import NonTechQuiz from './quiz/NonTechQuiz';
import TechQuiz from './quiz/TechQuiz';

const QuizContainer = styled.div`
  min-height: calc(100vh - 70px);
  background: #f8fafc;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 800px;
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

const ProgressContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #e11d48, #be185d);
  transition: width 0.3s ease;
  width: ${props => props.width}%;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
`;

const QuizContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  min-height: 400px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const BackButton = styled.button`
  background: #f1f5f9;
  color: #475569;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const NextButton = styled.button`
  background: #e11d48;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #be185d;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function QuizPage() {
  const navigate = useNavigate();
  const { background, setBackground, setQuizResponse, quizResponses } = useProfile();
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 8; // background + 7 questions

  const getProgress = () => {
    if (!background) return (1 / totalSteps) * 100;
    return ((currentStep + 1) / totalSteps) * 100;
  };

  const getCurrentStepNumber = () => {
    return currentStep + 1;
  };

  const handleBackgroundSelect = (selectedBackground) => {
    setBackground(selectedBackground);
    setCurrentStep(1);
  };

  const handleQuizResponse = (question, answer) => {
    setQuizResponse(question, answer);
  };

  const handleNext = () => {
    if (!background) return;
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/goals');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/');
    }
  };

  const canProceed = () => {
    if (!background) return false;
    if (currentStep === 0) return !!background;

    if (background === 'non-tech') {
      const requiredQuestions = [
        'currentBackground', 'experience', 'targetRole', 'stepsTaken',
        'codeComfort', 'timePerWeek', 'motivation'
      ];
      const idx = currentStep - 1;
      const questionId = requiredQuestions[idx];
      return !!quizResponses[questionId];
    } else {
      const requiredQuestions = [
        'currentRole', 'experience', 'targetRole', 'problemSolving',
        'systemDesign', 'portfolio', 'mockInterviews'
      ];
      const idx = currentStep - 1;
      const questionId = requiredQuestions[idx];
      return !!quizResponses[questionId];
    }
  };

  const renderContent = () => {
    if (!background) {
      return <BackgroundSelection onSelect={handleBackgroundSelect} />;
    }

    if (background === 'non-tech') {
      return (
        <NonTechQuiz
          currentStep={currentStep}
          onResponse={handleQuizResponse}
          responses={quizResponses}
        />
      );
    }

    return (
      <TechQuiz
        currentStep={currentStep}
        onResponse={handleQuizResponse}
        responses={quizResponses}
      />
    );
  };

  return (
    <QuizContainer>
      <Container>
        <Header>
          <Title>Profile Assessment</Title>
          <Subtitle>
            {!background 
              ? "Let's start by understanding your background"
              : `Answer the questions about your ${background === 'non-tech' ? 'career transition' : 'tech'} journey`}
          </Subtitle>
        </Header>

        <ProgressContainer>
          <ProgressBar>
            <ProgressFill width={getProgress()} />
          </ProgressBar>
          <ProgressText>
            <span>Step {getCurrentStepNumber()} of {totalSteps}</span>
            <span>{Math.round(getProgress())}% Complete</span>
          </ProgressText>
        </ProgressContainer>

        <QuizContent>
          {renderContent()}
        </QuizContent>

        <Navigation>
          <BackButton onClick={handleBack}>
            {currentStep === 0 ? 'Back to Home' : 'Previous'}
          </BackButton>
          <NextButton 
            type="button"
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep >= 7 ? 'Continue to Goals' : 'Next'}
          </NextButton>
        </Navigation>
      </Container>
    </QuizContainer>
  );
}

export default QuizPage;
