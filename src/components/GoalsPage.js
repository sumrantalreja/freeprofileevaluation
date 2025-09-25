import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import styled from 'styled-components';

const GoalsContainer = styled.div`
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

const Form = styled.form`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

const CheckboxOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b82f6;
    background: #f8fafc;
  }

  input[type="checkbox"] {
    margin: 0;
  }

  input[type="checkbox"]:checked + & {
    border-color: #3b82f6;
    background: #eff6ff;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const SubmitButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RequiredNote = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 24px;
  padding: 12px 16px;
  background: #f1f5f9;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
`;

const GoalsPage = () => {
  const navigate = useNavigate();
  const { goals, setGoals, background } = useProfile();
  const [formData, setFormData] = useState(goals);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] || []), value]
        : (prev[field] || []).filter(item => item !== value)
    }));
  };

  const trendingTopics = [
    { value: 'ai-ml', label: 'Artificial Intelligence & Machine Learning', icon: '🤖' },
    { value: 'web-development', label: 'Web Development (Frontend/Backend)', icon: '🌐' },
    { value: 'mobile-development', label: 'Mobile App Development', icon: '📱' },
    { value: 'data-science', label: 'Data Science & Analytics', icon: '📊' },
    { value: 'cybersecurity', label: 'Cybersecurity', icon: '🔒' },
    { value: 'cloud-computing', label: 'Cloud Computing & DevOps', icon: '☁️' },
    { value: 'blockchain', label: 'Blockchain & Web3', icon: '⛓️' },
    { value: 'game-development', label: 'Game Development', icon: '🎮' },
    { value: 'iot', label: 'Internet of Things (IoT)', icon: '🔌' },
    { value: 'ar-vr', label: 'AR/VR Development', icon: '🥽' },
    { value: 'fintech', label: 'Fintech & Digital Banking', icon: '💳' },
    { value: 'healthtech', label: 'Health Tech & MedTech', icon: '🏥' },
    { value: 'edtech', label: 'EdTech & Online Learning', icon: '🎓' },
    { value: 'ecommerce', label: 'E-commerce & Retail Tech', icon: '🛒' },
    { value: 'automation', label: 'Process Automation & RPA', icon: '⚙️' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that at least one field is filled
    const hasContent = formData.requirementType?.length > 0 ||
                      formData.targetCompany ||
                      formData.topicOfInterest?.length > 0;

    if (!hasContent) {
      alert('Please fill in at least one field to continue.');
      return;
    }

    setGoals(formData);
    navigate('/results');
  };

  const handleBack = () => {
    navigate('/quiz');
  };

  const canSubmit = formData.requirementType?.length > 0 ||
                   formData.targetCompany ||
                   formData.topicOfInterest?.length > 0;

  return (
    <GoalsContainer>
      <Container>
        <Header>
          <Title>Goals & Requirements</Title>
          <Subtitle>
            Help us understand what you're looking for (fill at least one field)
          </Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <RequiredNote>
            <strong>Note:</strong> At least one field below is required to proceed. 
            You can fill multiple fields for a more comprehensive evaluation.
          </RequiredNote>

          <Section>
            <SectionTitle>What are you looking for?</SectionTitle>
            <CheckboxGroup>
              {[
                { value: 'upskilling', label: 'Upskilling' },
                { value: 'career-transition', label: 'Career Transition' },
                { value: 'higher-salary', label: 'Higher Salary' }
              ].map(option => (
                <CheckboxOption key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={formData.requirementType?.includes(option.value) || false}
                    onChange={(e) => handleCheckboxChange('requirementType', option.value, e.target.checked)}
                  />
                  {option.label}
                </CheckboxOption>
              ))}
            </CheckboxGroup>
          </Section>

          <Section>
            <InputGroup>
              <Label htmlFor="targetCompany">Target Company or Tier</Label>
              <Input
                id="targetCompany"
                type="text"
                placeholder="e.g., Google, FAANG, Startup, Fortune 500"
                value={formData.targetCompany || ''}
                onChange={(e) => handleInputChange('targetCompany', e.target.value)}
              />
            </InputGroup>

            <SectionTitle>Topics of Interest (Select Multiple)</SectionTitle>
            <CheckboxGroup style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {trendingTopics.map(option => (
                <CheckboxOption key={option.value} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.topicOfInterest?.includes(option.value) || false}
                      onChange={(e) => handleCheckboxChange('topicOfInterest', option.value, e.target.checked)}
                    />
                    <span style={{ fontSize: '1.25rem' }}>{option.icon}</span>
                    <span style={{ fontWeight: '600' }}>{option.label}</span>
                  </div>
                </CheckboxOption>
              ))}
            </CheckboxGroup>
          </Section>

          <Navigation>
            <BackButton type="button" onClick={handleBack}>
              Back to Quiz
            </BackButton>
            <SubmitButton type="submit" disabled={!canSubmit}>
              Get My Evaluation
            </SubmitButton>
          </Navigation>
        </Form>
      </Container>
    </GoalsContainer>
  );
};

export default GoalsPage;
