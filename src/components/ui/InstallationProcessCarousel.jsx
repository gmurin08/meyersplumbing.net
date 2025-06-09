'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Play, Pause } from 'lucide-react';

const InstallationProcessCarousel = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-advance every 5 seconds when auto-playing
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextStep();
      setIsAutoPlaying(false);
    } else if (isRightSwipe) {
      prevStep();
      setIsAutoPlaying(false);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Step Counter and Auto-play Control */}
      <div className="bg-red-600 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Installation Process</h3>
            <p className="text-red-200 text-sm">Step {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-red-700 hover:bg-red-800 p-2 rounded-full transition-colors"
              title={isAutoPlaying ? 'Pause auto-advance' : 'Resume auto-advance'}
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-1">
        <div 
          className="bg-red-600 h-1 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Content Area */}
      <div 
        className="relative min-h-[20rem] md:h-96 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Step Content */}
        <div className="p-4 md:p-6 overflow-y-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
            {/* Step Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                {currentStepData.image ? (
                  <img 
                    src={currentStepData.image} 
                    alt={`Step ${currentStepData.step}: ${currentStepData.title}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-100">
                    <span className="text-red-600 font-bold text-2xl md:text-4xl">{currentStepData.step}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:col-span-2">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{currentStepData.title}</h4>
              <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg">{currentStepData.description}</p>
              
              {/* Step Details List */}
              <div className="space-y-1 md:space-y-2">
                {currentStepData.details.slice(0, 4).map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">{detail}</span>
                  </div>
                ))}
                {currentStepData.details.length > 4 && (
                  <p className="text-gray-500 text-xs italic ml-5 md:ml-7">
                    + {currentStepData.details.length - 4} more activities...
                  </p>
                )}
              </div>

              {/* Duration Badge */}
              <div className="mt-3 md:mt-4 inline-flex items-center bg-red-50 border border-red-200 rounded-full px-3 md:px-4 py-1 md:py-2">
                <Clock className="h-3 w-3 md:h-4 md:w-4 text-red-600 mr-1 md:mr-2" />
                <span className="text-red-700 font-medium text-xs md:text-sm">{currentStepData.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-50 p-4">
        <div className="flex justify-between items-center">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="bg-white border border-gray-300 hover:bg-gray-100 p-2 rounded-full transition-colors"
            disabled={currentStep === 0}
          >
            <ChevronLeft className={`h-5 w-5 ${currentStep === 0 ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>

          {/* Step Dots */}
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep
                    ? 'bg-red-600 transform scale-125'
                    : index < currentStep
                    ? 'bg-red-300'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={`Step ${index + 1}: ${steps[index].title}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="bg-white border border-gray-300 hover:bg-gray-100 p-2 rounded-full transition-colors"
            disabled={currentStep === steps.length - 1}
          >
            <ChevronRight className={`h-5 w-5 ${currentStep === steps.length - 1 ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-3 lg:hidden">
          <p className="text-xs text-gray-500">
            Swipe left or right to navigate • Tap dots to jump to step
          </p>
        </div>

        {/* Desktop Navigation Hint */}
        <div className="text-center mt-3 hidden lg:block">
          <p className="text-xs text-gray-500">
            Click arrows or dots to navigate • Auto-advances every 5 seconds
          </p>
        </div>
      </div>

    </div>
  );
};

export default InstallationProcessCarousel;