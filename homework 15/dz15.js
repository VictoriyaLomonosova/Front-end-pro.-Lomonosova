class Clock {
  constructor({ temp }) {
    this.temp = temp;
    this.timer = null;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;

    let mins = date.getMinutes();
    mins = mins < 10 ? "0" + mins : mins;
    let secs = date.getSeconds();
    secs = secs < 10 ? "0" + secs : secs;

    let timeResult = this.temp

      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    return timeResult;
  }
  createDiv() {
    let timeElement = this.render();
    for (let i = 0; i < timeElement.length; i++) {
      var square = document.createElement("span");
      document.body.appendChild(square);
    }
  }
  addElement() {
    const timeElement = this.render();
    for (let i = 0; i < timeElement.length; i++) {
      document.querySelectorAll("span")[i].innerText = timeElement[i];
      //console.log(timeElement);//
    }
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(() => this.addElement(), 1000);
  }
}

const clock = new Clock({ temp: "h:m:s" });
clock.createDiv();
clock.start();
