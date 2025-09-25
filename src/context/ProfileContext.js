import React, { createContext, useContext, useReducer } from 'react';

const ProfileContext = createContext();

const initialState = {
  // Quiz responses
  background: null, // 'non-tech' or 'tech'
  quizResponses: {},
  
  // Goals and requirements
  goals: {
    requirementType: [],
    targetCompany: '',
    topicOfInterest: []
  },
  
  // Evaluation results
  evaluationResults: null
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND':
      return {
        ...state,
        background: action.payload
      };
    
    case 'SET_QUIZ_RESPONSE':
      return {
        ...state,
        quizResponses: {
          ...state.quizResponses,
          [action.payload.question]: action.payload.answer
        }
      };
    
    case 'SET_GOALS':
      return {
        ...state,
        goals: {
          ...state.goals,
          ...action.payload
        }
      };
    
    case 'SET_EVALUATION_RESULTS':
      return {
        ...state,
        evaluationResults: action.payload
      };
    
    case 'RESET_PROFILE':
      return initialState;
    
    default:
      return state;
  }
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const setBackground = (background) => {
    dispatch({ type: 'SET_BACKGROUND', payload: background });
  };

  const setQuizResponse = (question, answer) => {
    dispatch({ type: 'SET_QUIZ_RESPONSE', payload: { question, answer } });
  };

  const setGoals = (goals) => {
    dispatch({ type: 'SET_GOALS', payload: goals });
  };

  const setEvaluationResults = (results) => {
    dispatch({ type: 'SET_EVALUATION_RESULTS', payload: results });
  };

  const resetProfile = () => {
    dispatch({ type: 'RESET_PROFILE' });
  };

  const value = {
    ...state,
    setBackground,
    setQuizResponse,
    setGoals,
    setEvaluationResults,
    resetProfile
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
