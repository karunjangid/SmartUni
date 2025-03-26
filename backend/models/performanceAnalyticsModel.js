export const analyzePerformance = (students) => {
  return students.map((student) => {
    let riskLevel = "Low Risk";
    if (student.grades < 50 & student.attendance < 75) {
      riskLevel = "High Risk";
    } else if (student.grades < 50) {
      riskLevel = "Moderate Risk";
    }
    return { name: student.name, riskLevel };
  });
};
