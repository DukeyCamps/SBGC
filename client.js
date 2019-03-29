//@Dooki
document.getElementById('everything');



function timeChange(){
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();
  var day = today.getDay();


  hr = checkTime(hr)
  mn = checkTime(mn)
  sc = checkTime(sc)
  dayC = checkDay(day)

  document.getElementById('hr').innerHTML = hr;
  document.getElementById('mn').innerHTML = mn;
  document.getElementById('sc').innerHTML = sc;
  document.getElementById('dayL').innerHTML = dayC;
  var t = setTimeout(timeChange, 500);
  console.log("changed time")
}

function checkTime(el_id){

  if(10 > el_id){
      el_id = "0"+el_id.toString();
                }
  return el_id;
}
function checkDay(day){
switch (day) {
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
