function omikujishow() {
  var omikuji = ["大吉", "中吉", "小吉"];

  var colors = {
    "大吉": "red",
    "中吉": "orange",
    "小吉": "green"
  };

  var number = Math.floor(Math.random() * 3);

  var message = omikuji[number];

  var element = document.getElementById("omikuji");

  element.innerHTML = "<strong>" + message + "</strong>";
  
  element.style.color = colors[message];
}