function timer() {
  var twoDigit = function(num) {
    var digit
    if (num < 10) {
      digit = "0" + num;
    } else {
      digit = num;
    }
    return digit;
  }

  var now = new Date();

  var hour = twoDigit(now.getHours());
  var minute = twoDigit(now.getMinutes());
  var second = twoDigit(now.getSeconds());

  document.getElementById("time").textContent = hour + ":" + minute + ":" + second;

}

setInterval(timer, 1000);
