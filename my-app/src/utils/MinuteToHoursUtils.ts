const minuteToHourUtils = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes.toLocaleString()} min`;
  }

  if (minutes === 0) {
    return `${hours.toLocaleString()}h`;
  }

  return `${hours.toLocaleString()}h ${minutes.toLocaleString()}min`;
};

export default minuteToHourUtils;
