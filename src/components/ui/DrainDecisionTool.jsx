'use client'
import { useState } from 'react';
import { RefreshCw, AlertTriangle, CheckCircle, Clock, DollarSign, Phone, Wrench, Home } from 'lucide-react';

const DrainDecisionTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'drainType',
      question: 'Which drain is having problems?',
      options: [
        { value: 'kitchen', label: 'Kitchen Sink', risk: 2 },
        { value: 'bathroom', label: 'Bathroom Sink/Tub', risk: 1 },
        { value: 'toilet', label: 'Toilet', risk: 3 },
        { value: 'main', label: 'Main Sewer Line/Multiple Drains', risk: 5 },
        { value: 'floor', label: 'Floor Drain/Basement', risk: 4 }
      ]
    },
    {
      id: 'severity',
      question: 'How severe is the problem?',
      options: [
        { value: 'slow', label: 'Draining slowly but still working', risk: 1 },
        { value: 'very-slow', label: 'Very slow, almost backing up', risk: 2 },
        { value: 'blocked', label: 'Completely blocked', risk: 3 },
        { value: 'backup', label: 'Water/sewage backing up', risk: 5 },
        { value: 'overflow', label: 'Overflowing onto floor', risk: 5 }
      ]
    },
    {
      id: 'symptoms',
      question: 'What other symptoms do you notice?',
      options: [
        { value: 'none', label: 'No other symptoms', risk: 0 },
        { value: 'odor', label: 'Bad smells', risk: 2 },
        { value: 'gurgling', label: 'Gurgling sounds', risk: 1 },
        { value: 'multiple', label: 'Multiple drains affected', risk: 4 },
        { value: 'sewage', label: 'Sewage smell or visible waste', risk: 5 }
      ]
    },
    {
      id: 'experience',
      question: 'What\'s your DIY experience level?',
      options: [
        { value: 'none', label: 'No plumbing experience', risk: 1 },
        { value: 'basic', label: 'Basic home repairs', risk: 0 },
        { value: 'intermediate', label: 'Comfortable with tools', risk: -1 },
        { value: 'advanced', label: 'Experienced DIYer', risk: -2 }
      ]
    },
    {
      id: 'urgency',
      question: 'How urgent is this situation?',
      options: [
        { value: 'convenience', label: 'Just inconvenient', risk: 0 },
        { value: 'daily', label: 'Affecting daily routine', risk: 1 },
        { value: 'guests', label: 'Have guests coming soon', risk: 2 },
        { value: 'emergency', label: 'Emergency situation', risk: 4 },
        { value: 'health', label: 'Health/safety concern', risk: 5 }
      ]
    }
  ];

  const calculateRecommendation = () => {
    const baseRisks = {
      kitchen: 2,
      bathroom: 1,
      toilet: 3,
      main: 5,
      floor: 4
    };

    let totalRisk = 0;
    let factors = [];

    // Calculate risk score from all answers
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === questionId);
      const option = question.options.find(o => o.value === answerValue);
      totalRisk += option.risk;
    });

    // Pittsburgh-specific cost estimates
    const costs = {
      diy: {
        low: 15,
        medium: 45,
        high: 85
      },
      professional: {
        service: 150,
        cleaning: 250,
        emergency: 400,
        major: 800
      }
    };

    // Determine recommendation based on risk score
    let recommendation;
    let reasoning = [];
    let diyCost = costs.diy.medium;
    let proCost = costs.professional.cleaning;

    if (totalRisk <= 3) {
      recommendation = 'diy';
      reasoning = [
        'Low risk situation',
        'Good learning opportunity',
        'Can save money with DIY approach'
      ];
      diyCost = answers.severity === 'slow' ? costs.diy.low : costs.diy.medium;
      proCost = costs.professional.service;
    } else if (totalRisk <= 6) {
      recommendation = 'consider-pro';
      reasoning = [
        'Moderate complexity',
        'Risk of making problem worse',
        'Professional tools may be needed'
      ];
      diyCost = costs.diy.high;
      proCost = costs.professional.cleaning;
    } else if (totalRisk <= 9) {
      recommendation = 'call-pro';
      reasoning = [
        'High risk of complications',
        'Potential health hazards',
        'Specialized equipment required'
      ];
      proCost = costs.professional.emergency;
    } else {
      recommendation = 'emergency';
      reasoning = [
        'Emergency situation',
        'Health and safety risk',
        'Immediate professional attention needed'
      ];
      proCost = costs.professional.major;
    }

    // Add specific factors based on answers
    if (answers.drainType === 'main') {
      reasoning.push('Main line issues require professional expertise');
    }
    if (answers.symptoms === 'sewage' || answers.symptoms === 'multiple') {
      reasoning.push('Health hazard - professional sanitization needed');
    }
    if (answers.urgency === 'emergency' || answers.urgency === 'health') {
      reasoning.push('Time-sensitive situation');
    }
    if (answers.experience === 'none') {
      reasoning.push('Limited DIY experience increases risk');
    }

    setResult({
      recommendation,
      riskScore: totalRisk,
      reasoning,
      costs: {
        diy: diyCost,
        professional: proCost
      },
      timeEstimate: recommendation === 'diy' ? '1-3 hours' : 
                   recommendation === 'emergency' ? 'Within 2 hours' : 'Same day'
    });
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setAnswers(newAnswers);
      // Calculate result after a brief delay for better UX
      setTimeout(() => calculateRecommendation(), 100);
    }
  };

  const resetTool = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const getRecommendationColor = (rec) => {
    switch (rec) {
      case 'diy': return 'blue';
      case 'consider-pro': return 'yellow';
      case 'call-pro': return 'orange';
      case 'emergency': return 'red';
      default: return 'gray';
    }
  };

  const getRecommendationTitle = (rec) => {
    switch (rec) {
      case 'diy': return 'DIY Approach Recommended';
      case 'consider-pro': return 'Consider Professional Service';
      case 'call-pro': return 'Call Professional Today';
      case 'emergency': return 'Emergency - Call Immediately';
      default: return 'Assessment Complete';
    }
  };

  if (result) {
    const color = getRecommendationColor(result.recommendation);
    const bgColor = `bg-${color}-50`;
    const borderColor = `border-${color}-500`;
    const textColor = `text-${color}-700`;
    const buttonColor = `bg-${color}-600 hover:bg-${color}-700`;

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className={`h-8 w-8 text-${color}-600 mr-3`} />
            <h3 className="text-2xl font-bold text-gray-900">Assessment Complete</h3>
          </div>
        </div>

        <div className={`${bgColor} border-l-4 ${borderColor} p-6 rounded-lg mb-6`}>
          <h4 className={`text-xl font-bold ${textColor} mb-4`}>
            {getRecommendationTitle(result.recommendation)}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Why this recommendation:</h5>
              <ul className="space-y-1">
                {result.reasoning.map((reason, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Estimated Cost:</span>
                  <span className="font-bold text-lg">
                    {result.recommendation === 'diy' 
                      ? `$${result.costs.diy} (DIY)`
                      : `$${result.costs.professional} (Professional)`
                    }
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 rounded border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Time Estimate:</span>
                  <span className="font-medium">{result.timeEstimate}</span>
                </div>
              </div>
            </div>
          </div>

          {result.recommendation === 'diy' && (
            <div className="bg-blue-100 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">DIY Steps to Try:</h5>
              <ol className="text-sm text-blue-700 space-y-1">
                <li>1. Start with hot water flush and dish soap</li>
                <li>2. Try a plunger (for appropriate drains)</li>
                <li>3. Use a drain snake if available</li>
                <li>4. If unsuccessful, call professional</li>
              </ol>
            </div>
          )}

          {(result.recommendation === 'call-pro' || result.recommendation === 'emergency') && (
            <div className="bg-red-100 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Immediate Actions:</h5>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Stop using affected drains</li>
                <li>• Ventilate area if there are odors</li>
                <li>• Keep children/pets away from backup areas</li>
                <li>• Document the problem with photos if safe</li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {(result.recommendation === 'call-pro' || result.recommendation === 'emergency') && (
            <a 
              href="tel:4123048880"
              className={`${buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center`}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (412) 304-8880
            </a>
          )}
          
          <button 
            onClick={resetTool}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Take Assessment Again
          </button>

          {result.recommendation !== 'emergency' && (
            <a 
              href="/contact"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Schedule Service
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Drain Problem Decision Tool</h3>
        </div>
        <p className="text-gray-600">Answer a few questions to get personalized advice</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Question {currentStep + 1} of {questions.length}</span>
          <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Question */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-900 mb-6">
          {questions[currentStep].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(questions[currentStep].id, option.value)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Home className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-900 font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Back Button */}
      {currentStep > 0 && (
        <div className="text-center">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default DrainDecisionTool;