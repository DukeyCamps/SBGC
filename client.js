//@Dooki

function __main__()
{
  colorChanger()
  dayChange()
  dateChange()
  timeChange()
  scheduleChange()
  loopit()
}
function scheduleChange(){

  scheduler(7, 45, 8, 30, "class", 1);
  scheduler(8, 30, 8, 35, "break");
  scheduler(8, 35, 9, 20, "class", 2);
  scheduler(9, 20, 9, 35, "break");
  scheduler(9, 35, 10, 20, "class", 3);
  scheduler(10, 20, 10, 25, "break");
  scheduler(10, 25, 11, 10, "class", 4);
  scheduler(11, 10, 11, 20, "break");
  scheduler(11, 20, 12, 05, "class", 5);
  scheduler(12, 05, 12, 10, "break");
  scheduler(12, 10, 12, 55, "class", 6);
  scheduler(12, 55, 13, 00, "break");
  scheduler(13, 00, 13, 45, "class", 7);

  scheduler(14, 00, 14, 45, "class", 1);
  scheduler(14, 45, 14, 50, "break", 99);
  scheduler(14, 50, 15, 35, "class", 2);
  scheduler(15, 35, 15, 50, "break", 99);
  scheduler(15, 50, 16, 35, "class", 3);
  scheduler(16, 35, 16, 40, "break", 99);
  scheduler(16, 40, 17, 25, "class", 4);
  scheduler(17, 25, 17, 35, "break", 99);
  scheduler(17, 35, 18, 20, "class", 5);
  scheduler(18, 20, 18, 25, "break", 99);
  scheduler(18, 25, 19, 10, "class", 6);
  scheduler(19, 10, 19, 15, "break", 99);
  scheduler(19, 15, 20, 00, "class", 7);




  //BLANKED
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();

  nowTime = hr * 3600 + mn * 60 + sc

  //BLANKED
  if(nowTime < 27900 || nowTime > 72000)//IF THE TIME IS NOT BETWEEN 7:45 and 20:00 disable all documents

  {
  var divs = ["DAY_B", "DATE_B", "CurrentTime_B", "TN_B","AC_B","AT_B"]
  var m;
  for(m = 0; m < divs.length; m++){
  var x = document.getElementsByClassName(divs[m]);
  var i;
  for (i = 0; i < x.length; i++) {
  x[i].style.visibility = "hidden";
  console.log("HIDE ME") 
}
}
}
else{
  var divs = ["DAY_B", "DATE_B", "CurrentTime_B", "TN_B","AC_B","AT_B"]
  var m;
  for(m = 0; m < divs.length; m++){
  var x = document.getElementsByClassName(divs[m]);
  var i;
  for (i = 0; i < x.length; i++) {
  x[i].style.visibility = "visible";
  console.log("show me")
}
  }
}
  //BLANKED
}

function loopit()
{
  var t = setTimeout(__main__, 500);
}


function colorChanger(hexcolor='#000000')
{
var divs = ["DAY_B", "DATE_B", "CurrentTime_B", "TN_B"]
var m;
for(m = 0; m < divs.length; m++){
var x = document.getElementsByClassName(divs[m]);
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = hexcolor;
  
}
}

}
//scheduler(10, 45, 11, 30, class, 2)
//drugi cas od 10:45 do 11:30
//redni 99 default znaci da je odmor
function scheduler(start_hr, start_mn, end_hr, end_mn, mode, redni=99)
{
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();

  nowTime = hr * 3600 + mn * 60 + sc
  startTime = start_hr * 3600 + start_mn * 60
  endTime = end_hr * 3600 + end_mn * 60
  var leftTime;
  var leftMn;
  var leftSc;
  if(startTime <= nowTime && nowTime <= endTime)//PAY ATTENTION
  {
    leftTime = endTime - nowTime // -1
    leftMn = Math.floor(leftTime / 60)
    leftSc = leftTime - leftMn * 60
    document.getElementById("TIMELEFT").innerHTML = checkTime(leftMn) + ":"+ checkTime(leftSc)
    SWITCHMODE(mode, redni)
  }
  else
  {
    //document.getElementById("TIMELEFT").innerHTML = "?"
    //document.getElementById("TIMEEVENT").innerHTML = ""
  }

}









function timeChange()
{
  //gets the time from the today class
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();


  //sets the time to the 00:00:00 format
  hr = checkTime(hr)
  mn = checkTime(mn)
  sc = checkTime(sc)


  //finds the id of the text and changes it to the current time
  document.getElementById('hr').innerHTML = hr;
  document.getElementById('mn').innerHTML = mn;
  document.getElementById('sc').innerHTML = sc;
  console.log("Regulated Time.")
}


//a display format function
function checkTime(el_id)
{
  //Checks whether the time is in the xx:xx:xx format and automatically corrects it
  if(10 > el_id)
  {
      el_id = "0"+el_id.toString();
  }
  return el_id;

}


//assigns a day to a day of the week value
function checkDay(day)
{
  switch (day)
  {
    case 1:return "ponedeljak";break;
    case 2:return "utorak";break;
    case 3:return "sreda";break;
    case 4:return "cetvrtak";break;
    case 5:return "petak";break;
    case 6:return "subota";break;
    case 7:return "nedelja";break;
    default:return "SBG";break;
  }
}





//a function that changes the date in the upper right corner
function dateChange()
{
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth()
  var yyyy = today.getFullYear()
  currentDate =  dd + '/' + mm + '/' + yyyy;
  document.getElementById('dt').innerHTML = currentDate
}


function dayChange()
{
  var today = new Date();
  var day = today.getDay();
  dayC = checkDay(day)
  document.getElementById('dayL').innerHTML = dayC;
}




function SWITCHMODE(mode, redni)
{
  if (mode == "class")
  {
    colorChanger('#e74c3c')
    document.getElementById("TIMEEVENT").innerHTML = "Do kraja " + redni.toString() + ". casa"
  }
  else if(mode == "break")
  {
    document.getElementById("TIMEEVENT").innerHTML = "Do kraja odmora"
    colorChanger('#27ae60')
  }




}
function SHOWCLOCK()
{
  document.getElementById('everything').style.visibility = 'visible'
}


function HIDECLOCK()
{
  document.getElementById('everything').style.visibility = 'hidden'
}

//TO BE IMPLEMENTED:
/*
//use color #c82333 as primary RED
  var mm = today.getMonth() + 1
//check date array types
//transitions support
//an array for weekdates which brings out
//different dates

  scheduler(7, 45, 8, 30, "class", 1)
  scheduler(8, 30, 8, 35, "break")
  scheduler(8, 35, 9, 20, "class", 2)
  scheduler(9, 20, 9, 35, "break")
  scheduler(9, 35, 10, 20, "class", 3)
  scheduler(10, 20, 10, 25, "break")
  scheduler(10, 25, 11, 10, "class", 4)
  scheduler(11, 10, 11, 20, "break")
  scheduler(11, 20, 12, 05, "class", 5)
  scheduler(12, 05, 12, 10, "break")
  scheduler(12, 10, 12, 55, "class", 6)
  scheduler(12, 55, 13, 00, "break")
  scheduler(13, 00, 13, 45, "class", 7)
*/
