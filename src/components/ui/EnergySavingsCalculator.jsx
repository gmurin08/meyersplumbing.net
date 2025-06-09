'use client'
import { useState } from 'react';
import { Calculator, Thermometer, DollarSign, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const EnergySavingsCalculator = () => {
  const [inputs, setInputs] = useState({
    currentType: 'tank',
    fuelType: 'gas',
    unitAge: '5',
    householdSize: '4',
    monthlyUsage: 'average',
    currentBill: ''
  });

  const [results, setResults] = useState(null);

  const heaterTypes = {
    tank: { name: 'Traditional Tank', efficiency: 0.65, lifespan: 10 },
    oldTank: { name: 'Old Tank (10+ years)', efficiency: 0.55, lifespan: 5 },
    tankless: { name: 'Tankless', efficiency: 0.90, lifespan: 20 },
    hybrid: { name: 'Hybrid Heat Pump', efficiency: 2.5, lifespan: 15 }
  };

  const fuelTypes = {
    gas: { name: 'Natural Gas', cost: 0.95, unit: 'therm' }, // Pittsburgh average
    electric: { name: 'Electric', cost: 0.13, unit: 'kWh' }, // Pittsburgh average
    propane: { name: 'Propane', cost: 2.85, unit: 'gallon' }
  };

  const usagePatterns = {
    low: { name: 'Low (1-2 people)', gallons: 40, multiplier: 0.7 },
    average: { name: 'Average (3-4 people)', gallons: 65, multiplier: 1.0 },
    high: { name: 'High (5+ people)', gallons: 85, multiplier: 1.4 },
    peak: { name: 'Peak (Large family)', gallons: 110, multiplier: 1.8 }
  };

  const calculateSavings = () => {
    const usage = usagePatterns[inputs.monthlyUsage];
    const fuel = fuelTypes[inputs.fuelType];
    const currentHeater = heaterTypes[inputs.currentType];
    
    // Pittsburgh-specific calculations
    const dailyGallons = usage.gallons;
    const annualGallons = dailyGallons * 365;
    
    // Energy required to heat water (BTU calculation)
    const tempRise = 70; // Average temp rise (cold water to 120°F)
    const btuPerGallon = tempRise * 8.34; // Water weight * temp rise
    const annualBtuRequired = annualGallons * btuPerGallon;
    
    // Current system costs
    let currentAnnualCost;
    if (inputs.fuelType === 'gas') {
      const thermsNeeded = annualBtuRequired / (100000 * currentHeater.efficiency);
      currentAnnualCost = thermsNeeded * fuel.cost;
    } else {
      const kwhNeeded = annualBtuRequired / (3412 * currentHeater.efficiency);
      currentAnnualCost = kwhNeeded * fuel.cost;
    }
    
    // Calculate costs for different upgrade options
    const upgrades = {};
    
    Object.entries(heaterTypes).forEach(([key, heater]) => {
      if (key !== inputs.currentType) {
        let annualCost;
        if (inputs.fuelType === 'gas') {
          const thermsNeeded = annualBtuRequired / (100000 * heater.efficiency);
          annualCost = thermsNeeded * fuel.cost;
        } else {
          const kwhNeeded = annualBtuRequired / (3412 * heater.efficiency);
          annualCost = kwhNeeded * fuel.cost;
        }
        
        const annualSavings = currentAnnualCost - annualCost;
        const lifetimeSavings = annualSavings * heater.lifespan;
        
        // Equipment costs (Pittsburgh market averages)
        const equipmentCosts = {
          tank: 1200,
          tankless: 2800,
          hybrid: 2200,
          oldTank: 1200
        };
        
        const paybackYears = equipmentCosts[key] / Math.max(annualSavings, 1);
        
        upgrades[key] = {
          name: heater.name,
          annualCost,
          annualSavings,
          lifetimeSavings,
          paybackYears,
          equipmentCost: equipmentCosts[key],
          lifespan: heater.lifespan,
          roi: ((lifetimeSavings / equipmentCosts[key]) * 100)
        };
      }
    });
    
    setResults({
      currentAnnualCost,
      currentType: currentHeater.name,
      fuelType: fuel.name,
      usage: usage.name,
      upgrades,
      annualGallons
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.max(amount, 0));
  };

  const getBestUpgrade = () => {
    if (!results?.upgrades) return null;
    
    return Object.entries(results.upgrades).reduce((best, [key, upgrade]) => {
      if (!best || upgrade.roi > best.roi) {
        return { key, ...upgrade };
      }
      return best;
    }, null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Thermometer className="h-8 w-8 text-orange-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Energy Savings Calculator</h3>
        </div>
        <p className="text-gray-600">Calculate your potential savings with a water heater upgrade</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Water Heater</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={inputs.currentType}
              onChange={(e) => setInputs({...inputs, currentType: e.target.value})}
            >
              <option value="tank">Traditional Tank (Less than 10 years)</option>
              <option value="oldTank">Traditional Tank (10+ years old)</option>
              <option value="tankless">Tankless</option>
              <option value="hybrid">Hybrid Heat Pump</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={inputs.fuelType}
              onChange={(e) => setInputs({...inputs, fuelType: e.target.value})}
            >
              {Object.entries(fuelTypes).map(([key, fuel]) => (
                <option key={key} value={key}>{fuel.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Household Hot Water Usage</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={inputs.monthlyUsage}
              onChange={(e) => setInputs({...inputs, monthlyUsage: e.target.value})}
            >
              {Object.entries(usagePatterns).map(([key, pattern]) => (
                <option key={key} value={key}>{pattern.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Unit Age</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={inputs.unitAge}
              onChange={(e) => setInputs({...inputs, unitAge: e.target.value})}
            >
              <option value="1">1-2 years</option>
              <option value="5">3-7 years</option>
              <option value="10">8-12 years</option>
              <option value="15">13+ years</option>
            </select>
          </div>

          <button 
            onClick={calculateSavings}
            className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Calculate My Savings
          </button>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-lg p-4">
          {results ? (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-900 text-center">Your Savings Potential</h4>
              
              {/* Current Costs */}
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <Thermometer className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Current Annual Cost</p>
                <p className="text-xl font-bold text-orange-600">{formatCurrency(results.currentAnnualCost)}</p>
                <p className="text-xs text-gray-500">{results.currentType} • {results.usage}</p>
              </div>

              {/* Best Upgrade Option */}
              {getBestUpgrade() && (
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="text-center mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="font-bold text-green-800">Best Option: {getBestUpgrade().name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-center">
                      <p className="text-gray-600">Annual Savings</p>
                      <p className="font-bold text-green-600">{formatCurrency(getBestUpgrade().annualSavings)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">Lifetime Savings</p>
                      <p className="font-bold text-green-600">{formatCurrency(getBestUpgrade().lifetimeSavings)}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                    <div className="text-center">
                      <p className="text-gray-600">Payback Period</p>
                      <p className="font-bold text-blue-600">{getBestUpgrade().paybackYears.toFixed(1)} years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">ROI</p>
                      <p className="font-bold text-blue-600">{getBestUpgrade().roi.toFixed(0)}%</p>
                    </div>
                  </div>
                </div>
              )}

              {/* All Options */}
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-gray-700">Compare All Options:</h5>
                {Object.entries(results.upgrades).map(([key, upgrade]) => (
                  <div key={key} className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{upgrade.name}</span>
                      <span className="text-green-600 font-bold text-sm">{formatCurrency(upgrade.annualSavings)}/yr</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {upgrade.paybackYears.toFixed(1)} year payback • {upgrade.lifespan} year lifespan
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600 mb-3">Ready to start saving?</p>
                <a 
                  href="/contact"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  Get Your Free Assessment
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <DollarSign className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Enter your details to see potential energy savings</p>
              <p className="text-xs text-gray-400 mt-2">Based on Pittsburgh area energy costs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnergySavingsCalculator;