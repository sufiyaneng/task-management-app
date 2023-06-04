export const covertToDisplayFormat = (inputDate) => {
  const dateObj = new Date(inputDate);
  const dateComponent = dateObj.toLocaleDateString("en-GB");
  const timeComponent = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Combine the date and time components
  const formattedDate = `${dateComponent} ${timeComponent}`;
  return formattedDate;
};

export const covertFormat = (date) => {
  const originalDate = date;
  const convertedDate = originalDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });

  const [datePart, timePart] = convertedDate.split(", ");
  const [month, day, year] = datePart.split("/");
  const [hour, minute] = timePart.split(":");
  const formattedDate = `${year}-${month}-${day}T${hour}:${minute}`;

  return formattedDate;
};

export const getStatusByTime = (startTime, endTime) => {

  const currentTime = new Date();
  if (currentTime < startTime) {
    return "Scheduled";
  } else if (currentTime > startTime && currentTime < endTime) {
    return "Running";
  } else {
    return "Completed";
  }
};
