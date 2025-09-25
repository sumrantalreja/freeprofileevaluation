import React from 'react';
import styled from 'styled-components';
import QuizQuestion from './QuizQuestion';

const Container = styled.div``;

const TechQuiz = ({ currentStep, onResponse, responses }) => {
  const questions = [
    {
      id: 'currentRole',
      question: 'What is your current role?',
      options: [
        { value: 'student', label: 'Student (CS/Engineering)' },
        { value: 'swe-product', label: 'Software Engineer (Product Company)' },
        { value: 'swe-service', label: 'Software Engineer (Service Company)' },
        { value: 'career-switcher', label: 'Career Switcher (Other to Tech)' }
      ]
    },
    {
      id: 'experience',
      question: 'How many years of experience do you have?',
      options: [
        { value: '0', label: '0 years (Student/Intern)' },
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '5+', label: '5+ years' }
      ]
    },
    {
      id: 'targetRole',
      question: 'What role are you targeting?',
      options: [
        { value: 'faang-sde', label: 'FAANG SDE' },
        { value: 'backend', label: 'Senior Backend Developer' },
        { value: 'data-ml', label: 'Data/ML Engineer' },
        { value: 'fullstack', label: 'Full-Stack Developer' },
        { value: 'tech-lead', label: 'Tech Lead/Architect' }
      ]
    },
    {
      id: 'problemSolving',
      question: 'How many coding problems have you solved recently?',
      options: [
        { value: '0-10', label: '0-10 problems' },
        { value: '11-50', label: '11-50 problems' },
        { value: '51-100', label: '51-100 problems' },
        { value: '100+', label: '100+ problems' }
      ]
    },
    {
      id: 'systemDesign',
      question: 'What is your exposure to system design?',
      options: [
        { value: 'multiple', label: 'Multiple system design projects' },
        { value: 'once', label: 'Worked on system design once' },
        { value: 'not-yet', label: 'Not yet, but interested' }
      ]
    },
    {
      id: 'portfolio',
      question: 'How active is your GitHub portfolio?',
      options: [
        { value: 'active-5+', label: 'Active with 5+ repositories' },
        { value: 'limited-1-5', label: 'Limited with 1-5 repositories' },
        { value: 'inactive', label: 'Inactive or outdated' },
        { value: 'none', label: 'No GitHub presence' }
      ]
    },
    {
      id: 'mockInterviews',
      question: 'How often do you practice mock interviews?',
      options: [
        { value: 'weekly+', label: 'Weekly or more' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'never', label: 'Never' }
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

export default TechQuiz;
