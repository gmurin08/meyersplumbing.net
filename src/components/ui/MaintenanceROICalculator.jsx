'use client'
import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const MaintenanceROICalculator = () => {
  const [inputs, setInputs] = useState({
    businessType: 'office',
    squareFootage: '',
    employees: '',
    operatingHours: '8',
    currentIssues: 'moderate'
  });

  const [results, setResults] = useState(null);

  const businessTypes = {
    office: { name: 'Office Building', multiplier: 1.0, baseMaintenanceCost: 2.5 },
    restaurant: { name: 'Restaurant/Food Service', multiplier: 2.2, baseMaintenanceCost: 4.5 },
    retail: { name: 'Retail Store', multiplier: 1.3, baseMaintenanceCost: 2.8 },
    healthcare: { name: 'Healthcare Facility', multiplier: 2.8, baseMaintenanceCost: 5.2 },
    manufacturing: { name: 'Manufacturing/Industrial', multiplier: 3.5, baseMaintenanceCost: 6.0 },
    warehouse: { name: 'Warehouse/Distribution', multiplier: 1.8, baseMaintenanceCost: 3.2 }
  };

  const issueFrequency = {
    low: { name: 'Minimal Issues', emergencyMultiplier: 0.5, downtimeHours: 2 },
    moderate: { name: 'Occasional Issues', emergencyMultiplier: 1.0, downtimeHours: 8 },
    high: { name: 'Frequent Issues', emergencyMultiplier: 2.0, downtimeHours: 16 }
  };

  const calculateROI = () => {
    const sqft = parseInt(inputs.squareFootage) || 0;
    const empCount = parseInt(inputs.employees) || 0;
    const hours = parseInt(inputs.operatingHours) || 8;
    
    if (sqft < 1000 || empCount < 1) {
      alert('Please enter valid square footage (min 1,000) and employee count');
      return;
    }

    const businessData = businessTypes[inputs.businessType];
    const issueData = issueFrequency[inputs.currentIssues];
    
    // Pittsburgh market data calculations
    const avgRevenuePerEmployee = 85000; // Pittsburgh average
    const avgCostPerSqft = 25; // Annual operating cost per sqft
    const emergencyCallCost = 450; // Average emergency service call
    const downtimeCostPerHour = (empCount * (avgRevenuePerEmployee / 2080)) + (sqft * 0.05); // Hourly downtime cost
    
    // Current situation (without maintenance program)
    const currentAnnualCosts = {
      emergencyRepairs: emergencyCallCost * 6 * businessData.multiplier * issueData.emergencyMultiplier,
      downtime: downtimeCostPerHour * issueData.downtimeHours * 3 * businessData.multiplier,
      inefficiency: sqft * avgCostPerSqft * 0.15 * businessData.multiplier, // 15% waste due to poor maintenance
      waterWaste: Math.min(sqft * 0.8, 2400) * businessData.multiplier // Water waste costs
    };
    
    const totalCurrentCosts = Object.values(currentAnnualCosts).reduce((a, b) => a + b, 0);
    
    // With maintenance program
    const maintenanceProgramCost = sqft * businessData.baseMaintenanceCost;
    const withMaintenanceCosts = {
      emergencyRepairs: currentAnnualCosts.emergencyRepairs * 0.25, // 75% reduction
      downtime: currentAnnualCosts.downtime * 0.10, // 90% reduction
      inefficiency: currentAnnualCosts.inefficiency * 0.70, // 30% reduction
      waterWaste: currentAnnualCosts.waterWaste * 0.60, // 40% reduction
      maintenanceProgram: maintenanceProgramCost
    };
    
    const totalWithMaintenance = Object.values(withMaintenanceCosts).reduce((a, b) => a + b, 0);
    
    // ROI Calculations
    const annualSavings = totalCurrentCosts - totalWithMaintenance;
    const roi = ((annualSavings / maintenanceProgramCost) * 100);
    const paybackMonths = maintenanceProgramCost / (annualSavings / 12);
    
    setResults({
      currentCosts: currentAnnualCosts,
      totalCurrentCosts,
      withMaintenanceCosts,
      totalWithMaintenance,
      maintenanceProgramCost,
      annualSavings,
      roi,
      paybackMonths,
      fiveYearSavings: annualSavings * 5 - maintenanceProgramCost,
      businessType: businessData.name
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Maintenance ROI Calculator</h3>
        </div>
        <p className="text-gray-600">Discover how much your business could save with a preventive maintenance program</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.businessType}
              onChange={(e) => setInputs({...inputs, businessType: e.target.value})}
            >
              {Object.entries(businessTypes).map(([key, type]) => (
                <option key={key} value={key}>{type.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
            <input 
              type="number"
              placeholder="e.g., 5000"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.squareFootage}
              onChange={(e) => setInputs({...inputs, squareFootage: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Employees</label>
            <input 
              type="number"
              placeholder="e.g., 25"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.employees}
              onChange={(e) => setInputs({...inputs, employees: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Daily Operating Hours</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.operatingHours}
              onChange={(e) => setInputs({...inputs, operatingHours: e.target.value})}
            >
              <option value="8">8 hours (Standard Business)</option>
              <option value="12">12 hours (Extended Hours)</option>
              <option value="16">16 hours (Extended Operations)</option>
              <option value="24">24 hours (24/7 Operations)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Plumbing Issues</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.currentIssues}
              onChange={(e) => setInputs({...inputs, currentIssues: e.target.value})}
            >
              {Object.entries(issueFrequency).map(([key, issue]) => (
                <option key={key} value={key}>{issue.name}</option>
              ))}
            </select>
          </div>

          <button 
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Calculate My Savings
          </button>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-lg p-4">
          {results ? (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-900 text-center">Your Potential Savings</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded-lg text-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Current Annual Costs</p>
                  <p className="text-xl font-bold text-red-600">{formatCurrency(results.totalCurrentCosts)}</p>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg text-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">With Maintenance Program</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(results.totalWithMaintenance)}</p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.annualSavings)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600">ROI</p>
                  <p className="text-lg font-bold text-green-600">{results.roi.toFixed(0)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payback Period</p>
                  <p className="text-lg font-bold text-blue-600">{results.paybackMonths.toFixed(1)} months</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <TrendingUp className="h-5 w-5 text-yellow-600 mb-2" />
                <p className="text-sm text-gray-700">
                  <strong>5-Year Total Savings:</strong> {formatCurrency(results.fiveYearSavings)}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Based on Pittsburgh market averages for {results.businessType.toLowerCase()}s
                </p>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600 mb-3">Ready to start saving?</p>
                <a 
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Your Custom Quote
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Enter your business details to see potential savings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceROICalculator;