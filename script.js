
                var today = new Date();  
var day = today.getDay();  
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + weekdays[day] + ".");  
const colorcode = document.getElementsByClassName("colorcode");
let currentHour = Date.now().getHours();
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";  
hour = (hour > 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Noon';  
}   
else  
{   
hour=12;  
prepand=' PM';  
}   
}   
if (hour===0 && prepand===' AM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Midnight';  
}   
else  
{   
hour=12;  
prepand=' AM';  
}   
}   
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second); 

colorcode.forEach(function(colorcodedDiv){
    let colorcodeHour = parseInt(colorcodedDiv.id);
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(colorcodedDiv, "Red");
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(colorcodedDiv, "Green");
 }else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(colorcodedDiv, "LightGrey");
    }       else {
      setColor(colorcodedDiv, "White");
    }
  }
});
function setColor(element, color) {
    element.style.backgroundColor = color;
}