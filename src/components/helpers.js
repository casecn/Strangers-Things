//COMMON FUNCTIONS THAT MAY BE USEFUL ACROSS MULTIPLE COMPONENTS

export const timeHelper = (timeStamp) => {
  let createdAt = timeStamp;
  let date = new Date(createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  let localTime = new Date(createdAt).toLocaleTimeString("en-US", {
    localeMatcher: "best fit",
    timeZoneName: "short",
  });
  timeStamp = date + ", " + localTime;
  return timeStamp;
};

