const weekday = document.querySelector("#weekday");
const phrase = document.querySelector("#phrase");
const date = new Date().getDay();

const dateArray = [
  ["Sunday", "Time to chillax!"],
  ["Monday", "Monday morning blues!"],
  ["Tuesday", "Taco Time!"],
  ["Wednesday", "Two more days to the weekend."],
  ["Thursday", "The weekend is almost here..."],
  ["Friday", "Weekend is here!"],
  ["Saturday", "Time to party!"],
];

[weekday.innerText, phrase.innerText] = dateArray[date];
