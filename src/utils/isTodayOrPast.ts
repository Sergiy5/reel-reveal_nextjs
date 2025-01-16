export const isTodayOrPast = (dateString: string): boolean => {
  
  const inputDate = new Date(dateString); //"YYYY-MM-DD"

  // Get the current date
  const currentDate = new Date();

  // Reset the time on both dates to ignore the time during comparison
  currentDate.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  // Check if the input date is today or in the past
  return inputDate.getTime() <= currentDate.getTime();
};
