
//Days
let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let time = new Date();
document.getElementById("demo").innerHTML = time.toDateString().slice(3);
console.log(time);
let DateString = '';
for (let i = 0; i < dayNames.length; i++) {
  if (i == time.getDay()) {
    DateString += "<span class='clock__date--curr'>" + dayNames[i] + "</span> ";
  } else {
    DateString += "<span>" + dayNames[i] + "</span> ";
  }
}
document.querySelector(".clock__date").innerHTML=DateString;

//digital Clock
setInterval(showTime, 1000); 

function showTime() { 
    let time = new Date();
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 

    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 

    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = `<span class="hour">${hour} : </span>  
<span  class="min">${min} : </span><span  class="sec">${sec}</span> <span class="am_pm">${am_pm}</span>`; 

   let clock= document.getElementById("clock") 
        clock.innerHTML = currentTime;   
} 

showTime(); 
