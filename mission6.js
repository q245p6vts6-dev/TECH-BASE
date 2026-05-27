function omikujishow() {

  const omikujiData = [
    {name: "超大吉",color: "gold",comment: "確率１％の大当たり！",rate: 1},

    {name: "大吉",color: "red",comment: "運良し！",rate: 10},

    {name: "中吉",color: "orange",comment: "普通の運勢",rate: 25},

    {name: "吉",color: "green",comment: "まあまあ",rate: 30 },

    {name: "小吉",color: "blue",comment: "よくあること",rate: 30},

    {name: "凶",color: "gray",comment: "逆に珍しい",rate: 4 }
  ];

  const random = Math.floor(Math.random() * 100);

  let total = 0;

  let resultData;

  for(let i = 0; i < omikujiData.length; i++) {

    total += omikujiData[i].rate;

    if(random < total) {

      resultData = omikujiData[i];

      break;
    }
  }

  const resultElement = document.getElementById("omikuji");

  resultElement.innerHTML =
    "<strong>" + resultData.name + "</strong>";

  resultElement.style.color = resultData.color;

  resultElement.style.fontSize = "60px";

  const commentElement =
    document.getElementById("comment");

  commentElement.innerText =
    resultData.comment;

  commentElement.style.fontSize = "30px";

  let history = getHistory();

  history.push(resultData.name);

  if(history.length > 5) {

    history.shift();
  }

  document.cookie =
    "history=" + history.join(",");

  displayHistory(history);
}

function displayHistory(history) {

  const historyElement =
    document.getElementById("history");

  historyElement.innerHTML = "";

  for(let i = 0; i < history.length; i++) {

    const li =
      document.createElement("li");

    li.innerText = history[i];

    li.style.fontSize = "25px";

    historyElement.appendChild(li);
  }
}


function getHistory() {

  const cookies = document.cookie;

  if(cookies.includes("history=")) {

    const data =
      cookies.split("=")[1];

    return data.split(",");
  }

  return [];
}

function reset() {

  
  document.cookie = "history=";

  document.getElementById("history")
    .innerHTML = "";
}


window.onload = function() {

  const history = getHistory();

  displayHistory(history);
}