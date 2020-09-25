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

    let currentTime = `${hour} : 
        ${min} : <span>${sec}    </span>     ${am_pm}`; 

    document.getElementById("clock") 
        .innerHTML = currentTime; 
    document.getElementsByTagName("span")[0].style.maxWidth="300px"
    // document.getElementsByTagName("span")[0].style.position="fixed"
    document.getElementsByTagName("span")[0].style.right="400px"
    
} 

showTime(); 
