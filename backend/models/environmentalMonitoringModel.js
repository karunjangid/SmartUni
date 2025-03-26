export const monitorEnvironment = (sensorData) => {
  // Extract sensor values
  const airQuality = sensorData.airQuality || 0; // Default value is 0 if undefined
  const temperature = sensorData.temperature || 0; // Default value is 0 if undefined
  const humidity = sensorData.humidity || 0; // Default value is 0 if undefined

  // Initialize results
  const insights = [];
  const recommendations = [];

  // Analyze air quality
  if (airQuality < 50) {
    insights.push("Air quality is good.");
  } else if (airQuality <= 100) {
    insights.push("Air quality is moderate.");
  } else if (airQuality <= 150) {
    insights.push("Air quality is unhealthy for sensitive groups.");
    recommendations.push("Consider installing air purifiers.");
  } else {
    insights.push("Air quality is unhealthy.");
    recommendations.push("Reduce outdoor activities and install air purifiers.");
  }

  // Analyze temperature
  if (temperature < 18) {
    insights.push("Temperature is too low.");
    recommendations.push("Increase room heating systems.");
  } else if (temperature > 30) {
    insights.push("Temperature is too high.");
    recommendations.push("Increase ventilation or cooling systems.");
  } else {
    insights.push("Temperature is within a comfortable range.");
  }

  // Analyze humidity
  if (humidity < 30) {
    insights.push("Humidity is too low.");
    recommendations.push("Use humidifiers to maintain moisture.");
  } else if (humidity > 70) {
    insights.push("Humidity is too high.");
    recommendations.push("Increase dehumidification systems.");
  } else {
    insights.push("Humidity levels are optimal.");
  }

  // Return combined results
  return {
    insights,
    recommendations,
  };
};
