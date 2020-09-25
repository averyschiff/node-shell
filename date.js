module.exports = function date(done) {
  const day = new Date();
  const dayOfWeek = day.getDay();
  const year = day.getFullYear();
  const month = day.getMonth();
  const date = day.getDate();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();

  done(
    `${daysOfWeek[dayOfWeek]} ${date} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`
  );
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
