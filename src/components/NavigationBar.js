import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

const ProgramsButton = styled.button`
  background: #e11d48;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #be185d;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoginButton = styled.button`
  background: white;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
  }
`;

const ApplyButton = styled.button`
  background: #e11d48;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #be185d;
  }
`;

const DarkModeToggle = styled.button`
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #3b82f6;
  }
`;

const NavigationBar = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <LogoIcon>S</LogoIcon>
            SCALER
          </Logo>
        </Link>

        <NavLinks>
          <NavLink to="/programs">PROGRAMS</NavLink>
          <NavLink to="/masterclass">MASTERCLASS</NavLink>
          <NavLink to="/alumni">ALUMNI</NavLink>
          <NavLink to="/resources">RESOURCES</NavLink>
        </NavLinks>

        <ActionButtons>
          <DarkModeToggle>🌙</DarkModeToggle>
          <LoginButton>LOGIN</LoginButton>
          <ApplyButton>APPLY NOW</ApplyButton>
        </ActionButtons>
      </NavContent>
    </NavContainer>
  );
};

export default NavigationBar;

