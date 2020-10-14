class Clock {
  constructor() {
    this.timer = null;
  }
  formatDateToString() {
    throw new Error("Not implemented!");
  }

  render() {
    const timeElement1 = this.formatDateToString();
    for (let i = 0; i < timeElement1.length; i++) {
      const square = document.createElement("span");
      document.body.appendChild(square);
    }
  }

  addElement() {
    const timeElement2 = this.formatDateToString();
    for (
      let i = 0, j = 0;
      i < timeElement2.length, j < document.querySelectorAll("span").length;
      i++, j++
    ) {
      document.querySelectorAll("span")[j].innerText = timeElement2[i];
    }
  }

  start() {
    this.timer = setInterval(() => this.addElement(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}
class LocalTime extends Clock {
  formatDateToString() {
    let date = new Date();
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;

    let mins = date.getMinutes();
    mins = mins < 10 ? "0" + mins : mins;
    let secs = date.getSeconds();
    secs = secs < 10 ? "0" + secs : secs;

    const result = `${hours} : ${mins} : ${secs}`;

    return result;
  }
}

class ShortTime extends Clock {
  formatDateToString() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + secondss : seconds;
    let ampm = hours >= 12 ? "pm" : "am";
    hours = (ampm == "pm") & ((hours > 12) & (hours < 24)) ? hours - 12 : hours;
    hours = hours == 0 ? 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const strTime = `${hours} : ${minutes}:${seconds}:${ampm}`;

    return strTime;
  }
}

function createClock(format) {
  switch (format) {
    case "local":
      return new LocalTime();
    case "short":
      return new ShortTime();
    default:
      return null;
  }
}

const clock = createClock("local");
clock.render();
if (clock !== null) {
  clock.start();
}

const clock1 = createClock("short");

if (clock1 !== null) {
  selectElement();
}

function selectElement() {
  const selectElement = document.querySelector("select");
  selectElement.addEventListener("change", () => {
    if (selectElement.options[0].selected) {
      clock.start();
      clock1.stop();
    } else if (selectElement.options[1].selected) {
      clock.stop();
      clock1.start();
    } else {
      return null;
    }
  });
}
