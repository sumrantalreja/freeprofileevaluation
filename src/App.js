import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import GoalsPage from './components/GoalsPage';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
