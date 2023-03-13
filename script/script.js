// elements
const clockHour =document.getElementById('hour');
const clockMin =document.getElementById('min');
const clockSec =document.getElementById('sec');

console.log(hour);
//global variables

//functions
setInterval(() => {
   const todayDate = new Date();

   let hour =todayDate.getHours();
   let min =todayDate.getMinutes();
   let sec =todayDate.getSeconds();
   

if (hour < 10 ){
    hour = "0" + hour;
}
if (min < 10 ){
    min ="0" + min;
}
if (sec < 10 ){
    sec = "0" + sec;
}

    clockHour.innerText=hour;
    clockMin.innerText=min;
    clockSec.innerText=sec;
}, 1000);

