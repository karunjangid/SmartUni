export const analyzeWellness = (heartRate, sleepHours, activityHours) => {
    const insights = {
      heartRate: "",
      sleep: "",
      activity: "",
      overall: "",
    };
  
    // Analyze heart rate
    if (heartRate < 60) {
      insights.heartRate = "Low heart rate detected. Consider consulting a healthcare provider.";
    } else if (heartRate > 100) {
      insights.heartRate = "High heart rate detected. Reduce stress or increase hydration.";
    } else {
      insights.heartRate = "Heart rate is within a healthy range.";
    }
  
    // Analyze sleep hours
    if (sleepHours < 6) {
      insights.sleep = "Not enough sleep. Aim for 7-9 hours of sleep each night.";
    } else if (sleepHours >= 6 && sleepHours <= 9) {
      insights.sleep = "Good sleep duration. Maintain your schedule!";
    } else {
      insights.sleep = "Excessive sleep detected. Ensure you're not oversleeping due to fatigue.";
    }
  
    // Analyze activity hours
    if (activityHours < 1) {
      insights.activity = "Low activity level. Aim for at least 30 minutes of exercise daily.";
    } else if (activityHours >= 1 && activityHours <= 2) {
      insights.activity = "Good activity level. Keep it up!";
    } else {
      insights.activity = "Excellent activity level. Ensure you're recovering properly.";
    }
  
    // Overall insights
    insights.overall = "Maintain a balanced routine with proper sleep, activity, and hydration.";
  
    return insights;
  };
  