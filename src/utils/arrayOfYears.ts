export const arrayOfYears = (startYear: number) => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year); // Add each year to the array
  }

  return years;
};
