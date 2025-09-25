// Rule-based evaluation logic for profile assessment

export const evaluateProfile = (quizResponses, goals, background) => {
  const results = {
    profileStrengthScore: calculateProfileStrength(quizResponses, goals, background),
    skillMatch: calculateSkillMatch(quizResponses, goals, background),
    skillGap: calculateSkillGap(quizResponses, goals, background),
    toolRecommendations: getToolRecommendations(quizResponses, goals, background),
    experienceBenchmarking: calculateExperienceBenchmark(quizResponses, goals, background),
    salaryReadiness: calculateSalaryReadiness(quizResponses, goals, background),
    interviewReadiness: calculateInterviewReadiness(quizResponses, goals, background),
    peerComparison: calculatePeerComparison(quizResponses, goals, background),
    likelihoodOfSuccess: calculateSuccessLikelihood(quizResponses, goals, background),
    quickWins: getQuickWins(quizResponses, goals, background),
    missedOpportunities: getMissedOpportunities(quizResponses, goals, background),
    learningResource: getLearningResource(quizResponses, goals, background),
    resumeScore: calculateResumeScore(quizResponses, goals, background),
    badges: getBadges(quizResponses, goals, background),
    recommendedRoles: getRecommendedRoles(goals.topicOfInterest, background)
  };

  return results;
};

const calculateProfileStrength = (responses, goals, background) => {
  let score = 0;
  let maxScore = 100;

  if (background === 'non-tech') {
    // Experience weight: 30%
    const experienceScore = getExperienceScore(responses.experience) * 0.3;
    
    // Steps taken weight: 25%
    const stepsScore = getStepsScore(responses.stepsTaken) * 0.25;
    
    // Code comfort weight: 25%
    const codeScore = getCodeComfortScore(responses.codeComfort) * 0.25;
    
    // Time commitment weight: 20%
    const timeScore = getTimeCommitmentScore(responses.timePerWeek) * 0.2;

    score = (experienceScore + stepsScore + codeScore + timeScore) * 100;
  } else {
    // Experience weight: 25%
    const experienceScore = getExperienceScore(responses.experience) * 0.25;
    
    // Problem solving weight: 30%
    const problemScore = getProblemSolvingScore(responses.problemSolving) * 0.3;
    
    // System design weight: 20%
    const systemScore = getSystemDesignScore(responses.systemDesign) * 0.2;
    
    // Portfolio weight: 15%
    const portfolioScore = getPortfolioScore(responses.portfolio) * 0.15;
    
    // Mock interviews weight: 10%
    const mockScore = getMockInterviewScore(responses.mockInterviews) * 0.1;

    score = (experienceScore + problemScore + systemScore + portfolioScore + mockScore) * 100;
  }

  return Math.round(score);
};

const getExperienceScore = (experience) => {
  const scores = {
    '0': 0.2,
    '0-2': 0.4,
    '3-5': 0.7,
    '5+': 1.0
  };
  return scores[experience] || 0.2;
};

const getStepsScore = (steps) => {
  const scores = {
    'just-exploring': 0.2,
    'self-learning': 0.6,
    'completed-course': 1.0
  };
  return scores[steps] || 0.2;
};

const getCodeComfortScore = (comfort) => {
  const scores = {
    'havent-tried': 0.1,
    'follow-tutorials': 0.4,
    'solve-problems': 0.8
  };
  return scores[comfort] || 0.1;
};

const getTimeCommitmentScore = (time) => {
  const scores = {
    '0-2': 0.2,
    '3-5': 0.5,
    '6-10': 0.8,
    '10+': 1.0
  };
  return scores[time] || 0.2;
};

const getProblemSolvingScore = (problems) => {
  const scores = {
    '0-10': 0.2,
    '11-50': 0.5,
    '51-100': 0.8,
    '100+': 1.0
  };
  return scores[problems] || 0.2;
};

const getSystemDesignScore = (design) => {
  const scores = {
    'not-yet': 0.1,
    'once': 0.5,
    'multiple': 1.0
  };
  return scores[design] || 0.1;
};

const getPortfolioScore = (portfolio) => {
  const scores = {
    'none': 0.0,
    'inactive': 0.2,
    'limited-1-5': 0.5,
    'active-5+': 1.0
  };
  return scores[portfolio] || 0.0;
};

const getMockInterviewScore = (mock) => {
  const scores = {
    'never': 0.1,
    'rarely': 0.3,
    'monthly': 0.6,
    'weekly+': 1.0
  };
  return scores[mock] || 0.1;
};

const calculateSkillMatch = (responses, goals, background) => {
  const skills = [];

  // Add skills based on responses
  if (responses.problemSolving === '100+' || responses.problemSolving === '51-100') {
    skills.push('Problem Solving');
  }
  if (responses.systemDesign === 'multiple') {
    skills.push('System Design');
  }
  if (responses.portfolio === 'active-5+') {
    skills.push('Project Management');
  }
  if (responses.codeComfort === 'solve-problems') {
    skills.push('Programming Fundamentals');
  }
  if (responses.stepsTaken === 'completed-course') {
    skills.push('Structured Learning');
  }
  if (responses.mockInterviews === 'weekly+' || responses.mockInterviews === 'monthly') {
    skills.push('Interview Skills');
  }
  if (responses.timePerWeek === '10+') {
    skills.push('High Commitment');
  }

  // Add skills based on topics of interest
  if (goals.topicOfInterest) {
    goals.topicOfInterest.forEach(topic => {
      switch(topic) {
        case 'ai-ml':
          skills.push('Machine Learning Interest');
          break;
        case 'web-development':
          skills.push('Web Development Interest');
          break;
        case 'data-science':
          skills.push('Data Analysis Interest');
          break;
        case 'cybersecurity':
          skills.push('Security Awareness');
          break;
        case 'cloud-computing':
          skills.push('Cloud Technologies Interest');
          break;
        default:
          skills.push('Technology Interest');
      }
    });
  }

  return skills;
};

const calculateSkillGap = (responses, goals, background) => {
  const gaps = [];

  if (background === 'non-tech') {
    gaps.push('Programming Language Proficiency');
    gaps.push('Technical Interview Skills');
    gaps.push('Industry Knowledge');
    
    if (responses.codeComfort === 'havent-tried') {
      gaps.push('Basic Coding Skills');
    }
    if (responses.stepsTaken === 'just-exploring') {
      gaps.push('Structured Learning');
    }
  } else {
    gaps.push('Advanced System Design');
    gaps.push('Leadership Experience');
    
    if (responses.problemSolving === '0-10') {
      gaps.push('Algorithm Practice');
    }
    if (responses.systemDesign === 'not-yet') {
      gaps.push('System Design Experience');
    }
    if (responses.portfolio === 'none' || responses.portfolio === 'inactive') {
      gaps.push('Portfolio Development');
    }
  }

  return gaps;
};

const getToolRecommendations = (responses, goals, background) => {
  const tools = [];

  // Base tools for all users
  tools.push('VS Code', 'Git', 'GitHub');

  if (background === 'non-tech') {
    tools.push('FreeCodeCamp', 'Codecademy', 'MDN Web Docs');
  } else {
    tools.push('Docker', 'AWS/GCP', 'CI/CD Tools');
  }

  // Add tools based on topics of interest
  if (goals.topicOfInterest) {
    goals.topicOfInterest.forEach(topic => {
      switch(topic) {
        case 'ai-ml':
          tools.push('Python', 'TensorFlow', 'PyTorch', 'Jupyter');
          break;
        case 'web-development':
          tools.push('React', 'Node.js', 'HTML/CSS', 'JavaScript');
          break;
        case 'mobile-development':
          tools.push('React Native', 'Flutter', 'Xcode', 'Android Studio');
          break;
        case 'data-science':
          tools.push('Python', 'R', 'Pandas', 'SQL', 'Tableau');
          break;
        case 'cybersecurity':
          tools.push('Wireshark', 'Metasploit', 'Nmap', 'Burp Suite');
          break;
        case 'cloud-computing':
          tools.push('AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes');
          break;
        case 'blockchain':
          tools.push('Solidity', 'Web3.js', 'Ethereum', 'Hardhat');
          break;
        case 'game-development':
          tools.push('Unity', 'Unreal Engine', 'C#', 'Blender');
          break;
        case 'iot':
          tools.push('Arduino', 'Raspberry Pi', 'MQTT', 'Node-RED');
          break;
        case 'ar-vr':
          tools.push('Unity', 'Unreal Engine', 'ARCore', 'ARKit');
          break;
        case 'fintech':
          tools.push('Python', 'React', 'PostgreSQL', 'Docker');
          break;
        case 'healthtech':
          tools.push('Python', 'React', 'HL7', 'FHIR');
          break;
        case 'edtech':
          tools.push('React', 'Node.js', 'MongoDB', 'WebRTC');
          break;
        case 'ecommerce':
          tools.push('Shopify', 'WooCommerce', 'React', 'Node.js');
          break;
        case 'automation':
          tools.push('Python', 'Selenium', 'UiPath', 'Power Automate');
          break;
      }
    });
  }

  // Remove duplicates and limit to 8 tools
  return [...new Set(tools)].slice(0, 8);
};

const calculateExperienceBenchmark = (responses, goals, background) => {
  const experience = responses.experience;

  let benchmark = {
    current: experience,
    typical: '3-5',
    gap: 'moderate'
  };

  if (background === 'non-tech') {
    // For career switchers, typical experience varies by current experience
    if (experience === '5+') {
      benchmark.typical = '3-5';
      benchmark.gap = 'none';
    } else if (experience === '3-5') {
      benchmark.typical = '0-2';
      benchmark.gap = 'none';
    } else {
      benchmark.typical = '0-2';
      benchmark.gap = experience === '0' || experience === '0-2' ? 'none' : 'moderate';
    }
  } else {
    // For tech professionals, experience requirements are generally higher
    if (experience === '5+') {
      benchmark.typical = '5+';
      benchmark.gap = 'none';
    } else if (experience === '3-5') {
      benchmark.typical = '3-5';
      benchmark.gap = 'none';
    } else {
      benchmark.typical = '3-5';
      benchmark.gap = 'moderate';
    }
  }

  return benchmark;
};

const calculateSalaryReadiness = (responses, goals, background) => {
  const targetSalary = goals.targetSalary;
  const experience = responses.experience;
  const profileStrength = calculateProfileStrength(responses, goals, background);

  let readiness = {
    current: 'below-market',
    target: targetSalary,
    gap: 'significant'
  };

  if (profileStrength >= 80) {
    readiness.current = 'above-market';
    readiness.gap = 'ready';
  } else if (profileStrength >= 60) {
    readiness.current = 'market-rate';
    readiness.gap = 'moderate';
  }

  return readiness;
};

const calculateInterviewReadiness = (responses, goals, background) => {
  return {
    technical: responses.problemSolving === '100+' ? 90 : 
              responses.problemSolving === '51-100' ? 75 : 50,
    hr: responses.experience === '5+' ? 80 : 65
  };
};

const calculatePeerComparison = (responses, goals, background) => {
  const profileStrength = calculateProfileStrength(responses, goals, background);
  
  return {
    percentile: Math.round(profileStrength),
    betterThan: Math.round(profileStrength),
    description: profileStrength >= 80 ? 'Top 20%' : 
                 profileStrength >= 60 ? 'Above Average' : 'Below Average'
  };
};

const calculateSuccessLikelihood = (responses, goals, background) => {
  const profileStrength = calculateProfileStrength(responses, goals, background);
  const timeCommitment = responses.timePerWeek || responses.mockInterviews;
  
  let likelihood = profileStrength;
  
  if (timeCommitment === '10+' || timeCommitment === 'weekly+') {
    likelihood += 10;
  } else if (timeCommitment === '6-10' || timeCommitment === 'monthly') {
    likelihood += 5;
  }

  return Math.min(Math.round(likelihood), 95);
};

const getQuickWins = (responses, goals, background) => {
  const wins = [];

  if (background === 'non-tech') {
    if (responses.codeComfort === 'havent-tried') {
      wins.push('Start with basic coding tutorials');
    }
    if (responses.portfolio === 'none') {
      wins.push('Create your first GitHub repository');
    }
    wins.push('Build a simple portfolio project');
  } else {
    if (responses.problemSolving === '0-10') {
      wins.push('Solve 5 coding problems daily');
    }
    if (responses.systemDesign === 'not-yet') {
      wins.push('Study one system design case per week');
    }
    if (responses.mockInterviews === 'never') {
      wins.push('Schedule your first mock interview');
    }
  }

  return wins.slice(0, 3);
};

const getMissedOpportunities = (responses, goals, background) => {
  const opportunities = [];

  if (background === 'non-tech') {
    if (responses.experience === '5+') {
      opportunities.push('Senior roles in your current domain');
      opportunities.push('Technical consulting positions');
    }
  } else {
    if (responses.experience === '3-5' && responses.problemSolving === '100+') {
      opportunities.push('Senior Developer positions');
      opportunities.push('Tech Lead opportunities');
    }
  }

  return opportunities;
};

const getLearningResource = (responses, goals, background) => {
  // Determine resource based on topics of interest
  if (goals.topicOfInterest && goals.topicOfInterest.length > 0) {
    const primaryTopic = goals.topicOfInterest[0];
    
    switch(primaryTopic) {
      case 'ai-ml':
        return {
          type: 'masterclass',
          title: 'Machine Learning Fundamentals',
          description: 'Complete guide to AI and ML career paths',
          url: '#'
        };
      case 'web-development':
        return {
          type: 'masterclass',
          title: 'Full-Stack Web Development',
          description: 'Learn modern web development technologies',
          url: '#'
        };
      case 'data-science':
        return {
          type: 'blog',
          title: 'Data Science Career Guide',
          description: 'Complete roadmap for data science transition',
          url: '#'
        };
      case 'cybersecurity':
        return {
          type: 'masterclass',
          title: 'Cybersecurity Fundamentals',
          description: 'Essential skills for security professionals',
          url: '#'
        };
      case 'cloud-computing':
        return {
          type: 'masterclass',
          title: 'Cloud Computing & DevOps',
          description: 'Master AWS, Azure, and containerization',
          url: '#'
        };
      case 'mobile-development':
        return {
          type: 'masterclass',
          title: 'Mobile App Development',
          description: 'Build iOS and Android applications',
          url: '#'
        };
      case 'blockchain':
        return {
          type: 'blog',
          title: 'Blockchain Development Guide',
          description: 'Introduction to Web3 and smart contracts',
          url: '#'
        };
      default:
        return {
          type: 'blog',
          title: 'Tech Career Growth Guide',
          description: 'Essential strategies for career advancement',
          url: '#'
        };
    }
  }

  // Default resource based on background
  if (background === 'non-tech') {
    return {
      type: 'masterclass',
      title: 'Career Transition to Tech',
      description: 'Complete guide for non-tech professionals',
      url: '#'
    };
  } else {
    return {
      type: 'blog',
      title: 'Advanced Tech Career Strategies',
      description: 'Level up your existing tech career',
      url: '#'
    };
  }
};

const calculateResumeScore = (responses, goals, background) => {
  let score = 50; // Base score

  if (responses.portfolio === 'active-5+') score += 30;
  else if (responses.portfolio === 'limited-1-5') score += 15;

  if (responses.experience === '5+') score += 15;
  else if (responses.experience === '3-5') score += 10;

  if (background === 'tech' && responses.problemSolving === '100+') score += 5;

  return Math.min(score, 100);
};

const getBadges = (responses, goals, background) => {
  const badges = [];

  if (responses.portfolio === 'active-5+') {
    badges.push({ name: 'Active Developer', type: 'success' });
  }

  if (background === 'tech' && responses.problemSolving === '100+') {
    badges.push({ name: 'Problem Solver', type: 'success' });
  }

  if (background === 'non-tech' && responses.stepsTaken === 'completed-course') {
    badges.push({ name: 'Committed Learner', type: 'info' });
  }

  if (responses.mockInterviews === 'weekly+') {
    badges.push({ name: 'Interview Ready', type: 'success' });
  }

  if (responses.timePerWeek === '10+' || responses.mockInterviews === 'weekly+') {
    badges.push({ name: 'Highly Motivated', type: 'warning' });
  }

  // Check for areas needing improvement
  if (responses.portfolio === 'none' || responses.portfolio === 'inactive') {
    badges.push({ name: 'Needs Portfolio', type: 'error' });
  }

  if (responses.codeComfort === 'havent-tried') {
    badges.push({ name: 'Needs Coding Practice', type: 'error' });
  }

  return badges;
};

const getRecommendedRoles = (topicOfInterest, background) => {
  if (!topicOfInterest || topicOfInterest.length === 0) {
    return [];
  }

  const roleMapping = {
    'ai-ml': [
      { role: 'Machine Learning Engineer', level: 'Mid-Senior', salary: '$120k-$180k' },
      { role: 'Data Scientist', level: 'Entry-Senior', salary: '$90k-$150k' },
      { role: 'AI Research Scientist', level: 'Senior', salary: '$150k-$250k' },
      { role: 'MLOps Engineer', level: 'Mid-Senior', salary: '$110k-$170k' }
    ],
    'web-development': [
      { role: 'Frontend Developer', level: 'Entry-Senior', salary: '$70k-$140k' },
      { role: 'Backend Developer', level: 'Entry-Senior', salary: '$80k-$150k' },
      { role: 'Full-Stack Developer', level: 'Mid-Senior', salary: '$90k-$160k' },
      { role: 'Web Development Lead', level: 'Senior', salary: '$120k-$200k' }
    ],
    'mobile-development': [
      { role: 'iOS Developer', level: 'Entry-Senior', salary: '$80k-$150k' },
      { role: 'Android Developer', level: 'Entry-Senior', salary: '$75k-$140k' },
      { role: 'React Native Developer', level: 'Mid-Senior', salary: '$85k-$155k' },
      { role: 'Flutter Developer', level: 'Mid-Senior', salary: '$80k-$145k' }
    ],
    'data-science': [
      { role: 'Data Scientist', level: 'Entry-Senior', salary: '$90k-$150k' },
      { role: 'Data Analyst', level: 'Entry-Mid', salary: '$60k-$100k' },
      { role: 'Data Engineer', level: 'Mid-Senior', salary: '$100k-$160k' },
      { role: 'Business Intelligence Analyst', level: 'Entry-Mid', salary: '$65k-$110k' }
    ],
    'cybersecurity': [
      { role: 'Cybersecurity Analyst', level: 'Entry-Mid', salary: '$70k-$120k' },
      { role: 'Penetration Tester', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: 'Security Engineer', level: 'Mid-Senior', salary: '$100k-$160k' },
      { role: 'Cybersecurity Consultant', level: 'Senior', salary: '$120k-$200k' }
    ],
    'cloud-computing': [
      { role: 'Cloud Engineer', level: 'Mid-Senior', salary: '$90k-$150k' },
      { role: 'DevOps Engineer', level: 'Mid-Senior', salary: '$100k-$160k' },
      { role: 'Site Reliability Engineer', level: 'Senior', salary: '$120k-$180k' },
      { role: 'Cloud Architect', level: 'Senior', salary: '$130k-$200k' }
    ],
    'blockchain': [
      { role: 'Blockchain Developer', level: 'Mid-Senior', salary: '$100k-$180k' },
      { role: 'Smart Contract Developer', level: 'Mid-Senior', salary: '$110k-$190k' },
      { role: 'Web3 Developer', level: 'Mid-Senior', salary: '$90k-$160k' },
      { role: 'Blockchain Architect', level: 'Senior', salary: '$140k-$220k' }
    ],
    'game-development': [
      { role: 'Game Developer', level: 'Entry-Senior', salary: '$60k-$130k' },
      { role: 'Game Designer', level: 'Entry-Mid', salary: '$50k-$100k' },
      { role: 'Unity Developer', level: 'Mid-Senior', salary: '$70k-$120k' },
      { role: 'Game Engine Developer', level: 'Senior', salary: '$100k-$160k' }
    ],
    'iot': [
      { role: 'IoT Developer', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: 'Embedded Systems Engineer', level: 'Mid-Senior', salary: '$85k-$145k' },
      { role: 'IoT Solutions Architect', level: 'Senior', salary: '$120k-$180k' },
      { role: 'Hardware Engineer', level: 'Mid-Senior', salary: '$90k-$150k' }
    ],
    'ar-vr': [
      { role: 'AR/VR Developer', level: 'Mid-Senior', salary: '$90k-$150k' },
      { role: 'Unity AR/VR Developer', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: '3D Graphics Programmer', level: 'Senior', salary: '$100k-$160k' },
      { role: 'XR Designer', level: 'Mid-Senior', salary: '$70k-$120k' }
    ],
    'fintech': [
      { role: 'Fintech Developer', level: 'Mid-Senior', salary: '$100k-$170k' },
      { role: 'Payment Systems Engineer', level: 'Mid-Senior', salary: '$110k-$180k' },
      { role: 'Financial Software Engineer', level: 'Senior', salary: '$120k-$190k' },
      { role: 'Quantitative Developer', level: 'Senior', salary: '$130k-$220k' }
    ],
    'healthtech': [
      { role: 'Health Tech Developer', level: 'Mid-Senior', salary: '$90k-$150k' },
      { role: 'Medical Software Engineer', level: 'Senior', salary: '$100k-$160k' },
      { role: 'Digital Health Developer', level: 'Mid-Senior', salary: '$85k-$145k' },
      { role: 'Telemedicine Engineer', level: 'Mid-Senior', salary: '$95k-$155k' }
    ],
    'edtech': [
      { role: 'EdTech Developer', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: 'Learning Platform Engineer', level: 'Mid-Senior', salary: '$85k-$145k' },
      { role: 'Educational Software Developer', level: 'Senior', salary: '$95k-$155k' },
      { role: 'LMS Developer', level: 'Mid-Senior', salary: '$75k-$135k' }
    ],
    'ecommerce': [
      { role: 'E-commerce Developer', level: 'Mid-Senior', salary: '$85k-$145k' },
      { role: 'Shopify Developer', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: 'E-commerce Solutions Architect', level: 'Senior', salary: '$110k-$170k' },
      { role: 'Digital Commerce Engineer', level: 'Mid-Senior', salary: '$90k-$150k' }
    ],
    'automation': [
      { role: 'Automation Engineer', level: 'Mid-Senior', salary: '$80k-$140k' },
      { role: 'RPA Developer', level: 'Mid-Senior', salary: '$75k-$135k' },
      { role: 'Process Automation Specialist', level: 'Senior', salary: '$95k-$155k' },
      { role: 'Workflow Automation Engineer', level: 'Mid-Senior', salary: '$85k-$145k' }
    ]
  };

  const allRoles = [];
  
  topicOfInterest.forEach(topic => {
    if (roleMapping[topic]) {
      allRoles.push(...roleMapping[topic]);
    }
  });

  // Remove duplicates and limit to top 5 roles
  const uniqueRoles = allRoles.filter((role, index, self) => 
    index === self.findIndex(r => r.role === role.role)
  ).slice(0, 5);

  return uniqueRoles;
};
