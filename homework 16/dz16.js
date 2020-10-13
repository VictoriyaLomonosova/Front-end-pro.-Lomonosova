class Clock {
    constructor() {
    
        this.intervalId = null;
        this.render()
    }

    formatDateToString() {
let  date=new Date().toTimeString()
return date
      /*  throw new Error("Not implemented!")*/
    }

    render() {
    
            let timeElement = this.formatDateToString();
            for (let i = 0; i < timeElement.length; i++) {
              var square = document.createElement("span");
              document.body.appendChild(square);
            }
    
        }
       
        addElement(){
            const timeElement = this.formatDateToString();
            for (
              let i = 0, j = 0;
              i < timeElement.length, j < document.querySelectorAll("span").length;
              i++, j++
            ) {
              document.querySelectorAll("span")[j].innerText = timeElement[i];
              //console.log(timeElement);//
            }
          
        }
        // Create HTML element
    

    start() {
        this.intervalId = setInterval(() => this.addElement(), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

class LocalClock extends Clock {
    formatDateToString() {
        let date =new Date()
        let hours = date.getHours();
        hours = hours < 10 ? "0" + hours : hours;
    
        let mins = date.getMinutes();
        mins = mins < 10 ? "0" + mins : mins;
        let secs = date.getSeconds();
        secs = secs < 10 ? "0" + secs : secs;
    
      const result= `${hours}: ${mins}: ${secs}`;
        return result;
    }
}

class ShortClock extends Clock {
    formatDateToString() {

            let nowTimeDate = new Date();
            let nowHour = nowTimeDate.getHours();
            let nowMinutes = nowTimeDate.getMinutes();
            let nowSeconds = nowTimeDate.getSeconds();
          nowSeconds = nowSeconds < 10 ? "0" + nowSeconds : nowSeconds;
            let suffix = nowHour >= 12 ? "pm" : "am";
            nowHour = (suffix == "pm" & (nowHour > 12 & nowHour < 24)) ? (nowHour - 12) : nowHour;
            nowHour = nowHour == 0 ? 12 : nowHour;
            nowMinutes = nowMinutes < 10 ? "0" + nowMinutes : nowMinutes;
            const currentTime = `${nowHour} : ${nowMinutes}: ${nowSeconds} : ${suffix}`
            return currentTime
    
    }
}

// local, short
function createClock(format) {
    switch (format) {
        case "local" :return new LocalClock();
        case "short": return new ShortClock();
        default: return null;
    }
}



const clock = createClock("local");
if (clock !== null) {
    clock.start();
}


const clock1=createClock("short")
/*clock1.start()*/


/*clock1.start()*/
    /*selectElement()*/

 /*function selectElement(){


    
    const selectElement=document.querySelector("select")
    selectElement.addEventListener("change", () =>{
        
if (selectElement.options[0].selected && clock !== null){
   return clock
}  
  if(selectElement.options[1].selected && clock1!==null){
    return clock1
  
  }


})}
*/