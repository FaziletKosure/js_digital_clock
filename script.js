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

    let currentTime = `<span style="min-width:150px" class="hour">${hour}</span> : 
<span  style="min-width:150px" class="min">${min}</span> : <span style="min-width:150px"  class="sec">${sec}</span> <span style="min-width:150px" class="am_pm">${am_pm}</span>`; 

    document.getElementById("clock") 
        .innerHTML = currentTime; 
   
    
} 

showTime(); 
