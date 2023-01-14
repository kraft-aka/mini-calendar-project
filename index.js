const monthEl = document.querySelector(".month");
const weekDayEl = document.querySelector(".week-day");
const dayNumberEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");
const timeEl = document.querySelector(".time");

// weekdays
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// init date obj
const date = new Date(Date.now());

// get month
const month = date.getMonth();
monthEl.innerHTML = date.toLocaleString("en-US", { month: "long" });

// get weekday
const weekDay = weekDays[date.getDay()];
weekDayEl.innerHTML = weekDay;

// get date number
const dayNumber = date.getDate();
dayNumberEl.innerHTML = dayNumber;

// get hours
const hours = date.getHours();
const minutes = date.getMinutes();
timeEl.innerHTML = `Local time is: ${hours}:${minutes}`;

// get year
const year = date.getFullYear();
yearEl.innerHTML = year;
console.log(year);
