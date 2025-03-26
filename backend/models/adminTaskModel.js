export const automateTask = (taskDescription) => {
  let feedback = "";
  if (taskDescription.includes("send reminder")) {
    feedback = "Reminder sent successfully.";
  } else if (taskDescription.includes("generate report")) {
    feedback = "Report generated successfully.";
  } else {
    feedback = "Task could not be automated.";
  }

  return feedback;
};
