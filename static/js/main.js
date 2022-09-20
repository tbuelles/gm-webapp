{"use strict";
function __weatherwidget_init(){
  var a=document.getElementsByClassName("weatherwidget-io"),i=[];
  if(0!==a.length){
    for(
      var t=function(t){
        var e=a[t],o={};
        o.id="weatherwidget-io-"+t,o.href=e.href,o.label_1=getDate(),o.label_2=e.getAttribute("data-label_2"),o.font=e.getAttribute("data-font"),o.icons=e.getAttribute("data-icons"),o.mode=e.getAttribute("data-mode"),o.days=e.getAttribute("data-days"),o.theme=e.getAttribute("data-theme"),o.basecolor=e.getAttribute("data-basecolor"),o.accent=e.getAttribute("data-accent"),o.textcolor=e.getAttribute("data-textcolor"),o.textAccent=e.getAttribute("data-textAccent"),o.highcolor=e.getAttribute("data-highcolor"),o.lowcolor=e.getAttribute("data-lowcolor"),o.suncolor=e.getAttribute("data-suncolor"),o.mooncolor=e.getAttribute("data-mooncolor"),o.cloudcolor=e.getAttribute("data-cloudcolor"),o.cloudfill=e.getAttribute("data-cloudfill"),o.raincolor=e.getAttribute("data-raincolor"),o.snowcolor=e.getAttribute("data-snowcolor"),o.windcolor=e.getAttribute("data-windcolor"),o.fogcolor=e.getAttribute("data-fogcolor"),o.thundercolor=e.getAttribute("data-thundercolor"),o.hailcolor=e.getAttribute("data-hailcolor"),o.dayscolor=e.getAttribute("data-dayscolor"),o.tempcolor=e.getAttribute("data-tempcolor"),o.desccolor=e.getAttribute("data-desccolor"),o.label1color=e.getAttribute("data-label1color"),o.label2color=e.getAttribute("data-label2color"),o.shadow=e.getAttribute("data-shadow"),o.scale=e.getAttribute("data-scale"),

        (r=document.getElementById(o.id))&&e.removeChild(r),i[o.id]=document.createElement("iframe"),i[o.id].setAttribute("id",o.id),i[o.id].setAttribute("class","weatherwidget-io-frame"),i[o.id].setAttribute("title","Weather Widget"),i[o.id].setAttribute("scrolling","no"),i[o.id].setAttribute("frameBorder","0"),i[o.id].setAttribute("width","100%"),
        i[o.id].setAttribute("src","https://weatherwidget.io/w"),i[o.id].style.display="block",i[o.id].style.position="absolute",i[o.id].style.top="0",
        i[o.id].onload=function(){i[o.id].contentWindow.postMessage(o,"https://weatherwidget.io")},e.style.display="block",e.style.position="relative",e.style.height="150px",e.style.padding="0",e.style.overflow="hidden",e.style.textAlign="left",e.style.textIndent="-299rem",e.appendChild(i[o.id])
        },
      e=0,o=Math.min(a.length,10);e<o;e++
    )
    {var r;t(e)}
//
// window.addEventListener("message",function(t){
//   "https://weatherwidget.io"===t.origin&&i[t.data.wwId]&&i[t.data.wwId].parentNode&&(i[t.data.wwId].style.height=t.data.wwHeight+"px",i[t.data.wwId].parentNode.style.height=t.data.wwHeight+"px")
//   })
//
}
else setTimeout(__weatherwidget_init,1500);
}


!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');

}

document.onkeydown = function(e) {
  if (e.which == 67) {
    toggleDiv('clock');
  }
  else if (e.which == 86) {
    toggleDiv('stopwatch');
  }
  else if (e.which == 82) {
    clickReset();
  }
  else if (e.which == 13 && running == false) {
    clickStart();
  }
  else if (e.which == 13 && running == true) {
    clickStop();
  }
};

// (Un)mute YouTube
// function toggleMute(id) {
//   let url = document.getElementById(id).src
//   url = url.replace('mute=1', 'mute=0')
//   document.getElementById(id).src = url
// }
// Toggle
function toggleDiv(id) {
  var div = document.getElementById(id);
  div.style.visibility = div.style.visibility == "hidden" ? "visible" : "hidden";
}
// Date
// Date
function getDate () {
    const today = new Date();
    let weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    let day = weekday[today.getDay()];
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
    yy = yy.toString().substr(-2);
    let strDate = day + ' ' + mm + '/' + dd + '/' + yy;
    return strDate;
  }

// Clock
//
// function startClock () {
//     const today = new Date();
//     let offset = today.getTimezoneOffset();
//     offset /= 60;
//     let timezone = 'UTC-' + offset;
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     let ampm = h >= 12 ? 'PM' : 'AM';
//     h = h % 12;
//     h = h ? h : 12;
//     m = checkTime(m);
//     s = checkTime(s);
//     let strTime = h + ":" + m + ":" + s + ' ' + ampm + ' (' + timezone + ')';
//     document.getElementById('clock').innerHTML =  strTime;
//     setTimeout(startClock, 1000);
//   }

function getClock () {
    const today = new Date();
    let offset = today.getTimezoneOffset();
    offset /= 60;
    let timezone = 'UTC-' + offset;
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    s = checkTime(s);
    let strTime = h + ":" + m + ":" + s + ' ' + ampm + ' (' + timezone + ')';
    document.getElementById('clock').innerHTML = strTime;
    setTimeout(getClock, 1000);
    return strTime;
  }


  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


window.onload = function () {
  document.getElementById("date").innerHTML = getDate();
  __weatherwidget_init();
  getClock();
  }


    // Stopwatch
  var seconds = 00;
  var tens = 00;
  var mins = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMins = document.getElementById("mins")
  //
  // var buttonStart = document.getElementById('button-start');
  // var buttonStop = document.getElementById('button-stop');
  // var buttonReset = document.getElementById('button-reset');
  //
  var Interval;
  var running = false;

  function clickStart() {
    running = true;
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    }

  function clickStop() {
    running = false;
    clearInterval(Interval);
    }

  function clickReset() {
    running = false;
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins;
    }
  //
  // buttonStart.onclick = clickStart;
  //
  // buttonStop.onclick = clickStop;
  //
  // buttonReset.onclick = clickReset;


  function startTimer () {
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 59) {
      console.log("mins");
      mins++;
      appendMins.innerHTML = "0" + mins;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
