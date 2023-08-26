const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

hour.addEventListener("click", function () {
  console.log("Hour Clicked");
});

function updateClock() {
  // get hours, minutes, seconds instead real time
  let h = new Date().getHours() + 12;
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ckampm;

  if (h > 12 && h < 24) {
    h = h >= 22 ? h - 12 : "0" + (h - 12);
    ckampm = "PM";
  } else if (h >= 0 && h <= 12) {
    h = h >= 10 ? h : "0" + h;
    ckampm = "AM";
  }
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = ckampm;

  // rekursif every 1 seconds
  setTimeout(() => {
    return updateClock();
  }, 1000);
}
// call in function
updateClock();
