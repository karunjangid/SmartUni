export const optimizeResources = (energy, water) => {
  // Constants
  const energyCostPerKWh = 0.12;
  const waterCostPerLiter = 0.003;
  const carbonEmissionPerKWh = 0.43;

  // Calculations
  const energyCost = energy * energyCostPerKWh;
  const waterCost = water * waterCostPerLiter;
  const carbonFootprint = energy * carbonEmissionPerKWh;

  // Create suggestions based on thresholds
  const suggestions = [];
  if (energy > 100) {
    suggestions.push("Install energy-efficient appliances.");
  } else {
    suggestions.push("Your energy usage is optimal.");
  }

  if (water > 500) {
    suggestions.push("Fix leaks or use low-flow fixtures.");
  } else {
    suggestions.push("Your water usage is optimal.");
  }

  // Debugging: Log the suggestions
  console.log("Suggestions Generated:", suggestions);

  // Return results
  return {
    energyCost: energyCost.toFixed(2),
    waterCost: waterCost.toFixed(2),
    carbonFootprint: carbonFootprint.toFixed(2),
    suggestions,
  };
};
