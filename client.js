//@Dooki
function timeChange(){
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();

  hr = checkTime(hr)
  mn = checkTime(mn)
  sc = checkTime(sc)

  document.getElementById('hr').innerHTML = hr;
  document.getElementById('mn').innerHTML = mn;
  document.getElementById('sc').innerHTML = sc;

  var t = setTimeout(timeChange, 500);
  console.log("changed time")
}

function checkTime(el_id){

  if(10 > el_id){
      el_id = "0"+el_id.toString();
                }
  return el_id;
}
