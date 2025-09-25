import React from 'react';
import styled from 'styled-components';
import QuizQuestion from './QuizQuestion';

const Container = styled.div``;

const NonTechQuiz = ({ currentStep, onResponse, responses }) => {
  const questions = [
    {
      id: 'currentBackground',
      question: 'What is your current background?',
      options: [
        { value: 'non-tech', label: 'Non-tech (Marketing, Sales, Finance, etc.)' },
        { value: 'it-services', label: 'IT Services (Support, QA, Project Management)' },
        { value: 'technical', label: 'Other Technical (Engineering, Design, etc.)' },
        { value: 'fresh-graduate', label: 'Fresh Graduate (Non-CS)' }
      ]
    },
    {
      id: 'experience',
      question: 'How many years of professional experience do you have?',
      options: [
        { value: '0', label: '0 years (Student/Recent Graduate)' },
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '5+', label: '5+ years' }
      ]
    },
    {
      id: 'targetRole',
      question: 'What type of role are you targeting?',
      options: [
        { value: 'backend', label: 'Backend Developer' },
        { value: 'fullstack', label: 'Full-Stack Developer' },
        { value: 'data-ml', label: 'Data/ML Engineer' },
        { value: 'data-analyst', label: 'Data Analyst' },
        { value: 'not-sure', label: 'Not sure yet' }
      ]
    },
    {
      id: 'stepsTaken',
      question: 'What steps have you already taken toward this transition?',
      options: [
        { value: 'completed-course', label: 'Completed a bootcamp/course' },
        { value: 'self-learning', label: 'Self-learning (online tutorials, books)' },
        { value: 'just-exploring', label: 'Just exploring and researching' }
      ]
    },
    {
      id: 'codeComfort',
      question: 'How comfortable are you with writing basic code?',
      options: [
        { value: 'havent-tried', label: "Haven't tried yet" },
        { value: 'follow-tutorials', label: 'Can follow tutorials' },
        { value: 'solve-problems', label: 'Can solve simple problems independently' }
      ]
    },
    {
      id: 'timePerWeek',
      question: 'How much time can you dedicate to upskilling per week?',
      options: [
        { value: '0-2', label: '0-2 hours' },
        { value: '3-5', label: '3-5 hours' },
        { value: '6-10', label: '6-10 hours' },
        { value: '10+', label: '10+ hours' }
      ]
    },
    {
      id: 'motivation',
      question: 'What is your primary motivation for this transition?',
      options: [
        { value: 'salary', label: 'Higher salary potential' },
        { value: 'interest', label: 'Genuine interest in technology' },
        { value: 'stability', label: 'Job stability and growth' },
        { value: 'peer-influence', label: 'Peer influence and market trends' }
      ]
    }
  ];

  const currentQuestion = questions[currentStep - 1];

  if (!currentQuestion) {
    return null;
  }

  return (
    <Container>
      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedValue={responses[currentQuestion.id]}
        onSelect={(value) => onResponse(currentQuestion.id, value)}
      />
    </Container>
  );
};

export default NonTechQuiz;
