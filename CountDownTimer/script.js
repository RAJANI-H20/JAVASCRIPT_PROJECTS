const enddate = "01 January, 2025 12:00 AM";
document.getElementById('end-date').innerHTML = enddate;

const inputs = document.querySelectorAll("input[type='text']");

function clock() {
  let end = new Date(Date.parse(enddate));
  let now = new Date();
  let diff = (end - now) / 1000;

  if (now >= end) {
    console.log("EndDate is in the past!");
    return;
  }

  let days = Math.floor(diff / 3600 / 24);
  let hours = Math.floor((diff / 3600) % 24);
  let minutes = Math.floor((diff / 60) % 60);
  let seconds = Math.floor(diff % 60);

  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
}

clock();
setInterval(clock, 1000);