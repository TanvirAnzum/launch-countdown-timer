const digit = document.querySelectorAll(".digit");
const front = document.querySelectorAll(".card-face-front");
const back = document.querySelectorAll(".card-face-back");
const card = document.querySelectorAll(".card");

let upper_bound = new Date(2022, 6, 0);
let lower_bound = new Date();
let total = upper_bound - lower_bound; /// in ms

///remaining time

let seconds = Math.floor(total / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

// console.log(seconds);
// console.log(minutes);
// console.log(hours);
// console.log(days);

hours = hours % 24;
minutes = minutes % 60;
seconds = seconds % 60;

digit[0].setAttribute("data-digit-before", days);
digit[1].setAttribute("data-digit-before", hours);
digit[2].setAttribute("data-digit-before", minutes);
digit[3].setAttribute("data-digit-before", seconds);

front[0].innerHTML = days;
front[1].innerHTML = hours;
front[2].innerHTML = minutes;
front[3].innerHTML = seconds;

// console.log(card);

let twen_s = gsap.to(card[3], 1, { rotationX: 180, duration: 0.5, delay: 0.5 });
let x = setInterval(timing, 1000);
let temp_s = seconds;

let temp_m = minutes;
let stat_m = false;
let twen_m;

let temp_h = hours;
let stat_h = false;
let twen_h;

let temp_d = days;
let stat_d = false;
let twen_d;

function timing() {
  console.log('start');
  digit[3].setAttribute("data-digit-before", temp_s);
  front[3].innerHTML = temp_s;

  if (temp_s == 0) {
    temp_s = 60;
  }
  digit[3].setAttribute("data-digit-after", --temp_s);
  back[3].innerHTML = temp_s;
  twen_s.restart();
  if (temp_s == 59) {
    digit[2].setAttribute("data-digit-before", temp_m);
    front[2].innerHTML = temp_m;
    if (temp_m == 0) {
      temp_m = 60;
    } 
    digit[2].setAttribute("data-digit-after", --temp_m);
    back[2].innerHTML = temp_m;
    if (!stat_m) {
      twen_m = gsap.to(card[2], 1, {
        rotationX: 180,
        duration: 0.5,
        delay: 0.5,
      });
      stat_m = true;
    } else twen_m.restart();

    if (temp_m == 59) {
      digit[1].setAttribute("data-digit-before", temp_h);
      front[1].innerHTML = temp_h;
      if (temp_h == 0) {
        temp_h = 24
      }
      digit[1].setAttribute("data-digit-after", --temp_h);
      back[1].innerHTML = temp_h;
      if (!stat_h) {
        twen_h = gsap.to(card[1], 1, {
          rotationX: 180,
          duration: 0.5,
          delay: 0.5,
        });
        stat_h = true;
      } else twen_h.restart();

      if (temp_h == 23) {
        digit[0].setAttribute("data-digit-before", temp_d);
        front[0].innerHTML = temp_d;
        if (temp_d == 0) {
          clearInterval(x);
          reset(0,0,0,0);
          return ;
        }
        digit[0].setAttribute("data-digit-after", --temp_d);
        back[0].innerHTML = temp_d;
        if (!stat_d) {
          twen_d = gsap.to(card[0], 1, {
            rotationX: 180,
            duration: 0.5,
            delay: 0.5,
          });
          stat_d = true;
        } else twen_d.restart();
      }
    }
  }
}


function reset(days,hours,minutes,seconds) {
  digit[0].setAttribute("data-digit-before", days);
  digit[1].setAttribute("data-digit-before", hours);
  digit[2].setAttribute("data-digit-before", minutes);
  digit[3].setAttribute("data-digit-before", seconds);

  digit[0].setAttribute("data-digit-after", days);
  digit[1].setAttribute("data-digit-after", hours);
  digit[2].setAttribute("data-digit-after", minutes);
  digit[3].setAttribute("data-digit-after", seconds);

  front[0].innerHTML = days;
  front[1].innerHTML = hours;
  front[2].innerHTML = minutes;
  front[3].innerHTML = seconds;

  back[0].innerHTML = days;
  back[1].innerHTML = hours;
  back[2].innerHTML = minutes;
  back[3].innerHTML = seconds;
}