let otherLinks =   document.querySelector(".other");
let mega       =   document.querySelector(".mega-menu");
let nums       =   document.querySelectorAll(".stats .container .box .number");
let section    =   document.querySelector(".stats");
let ourSkills  =   document.getElementById("our-skills");
let progress   =   document.querySelectorAll(".our-skills  .the-progress span");
let started    =   false;

/********** Mega Menu ********** */
function megaMenu() {
  mega.classList.toggle("act");
}
otherLinks.addEventListener("click", megaMenu);
/********** startCount ********** */
window.onscroll = function () {
  if (window.scrollY > section.offsetTop) {  
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started  = true; 
  }
  if (window.scrollY > ourSkills.offsetTop) {
    progress.forEach((e) => {
        e.style.width = e.dataset.prog;
    });
  };
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
          clearInterval(count);
      };
  }, 2000 / goal);
};

/********** CountDown ********** */

let Days    = document.querySelector(".events .days-number");
let Hours   = document.querySelector(".events .hours-number");
let Minutes = document.querySelector(".events .minutes-number");
let Seconds = document.querySelector(".events .seconds-number");
let datecounter = new Date("Dec 31, 2021  23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = datecounter - dateNow;

  let leftDays    = Math.floor(dateDiff / (1000 *60 * 60 * 24));
  let leftHours   = Math.floor((dateDiff % (1000 *60 * 60 * 24)) / (1000 * 60 * 60));
  let leftMinutes = Math.floor(((dateDiff % (1000 *60 * 60)) / (1000 * 60)));
  let leftSeconds = Math.floor(((dateDiff % (1000 * 60)) / 1000));
  
  Days.innerHTML    = leftDays    < 10 ? "0" + leftDays    : leftDays;
  Hours.innerHTML   = leftHours   < 10 ? "0" + leftHours   : leftHours;
  Minutes.innerHTML = leftMinutes < 10 ? "0" + leftMinutes : leftMinutes;
  Seconds.innerHTML = leftSeconds < 10 ? "0" + leftSeconds : leftSeconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);