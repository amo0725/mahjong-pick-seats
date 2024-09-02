const allCards = ["東", "南", "西", "北"];
let drawnCards = [];

function drawCard() {
  if (drawnCards.length >= allCards.length) {
    document.getElementById("result").innerText = "所有牌已經抽完！";
    return;
  }

  let availableCards = allCards.filter((card) => !drawnCards.includes(card));
  const randomIndex = Math.floor(Math.random() * availableCards.length);
  const drawnCard = availableCards[randomIndex];
  drawnCards.push(drawnCard);

  // 更新結果
  document.getElementById("result").innerText = `抽到的牌是: ${drawnCard}`;

  // 播放抽牌音效
  const drawSound = document.getElementById("draw-sound");
  drawSound.play().catch(() => console.log("音效無法播放。"));

  // 顯示當前抽到的牌
  displayCurrentCard(drawnCard);

  // 顯示歷史結果
  displayCardImage(drawnCard, drawnCards.length);

  // 保存抽牌歷史
  saveHistory();
}

function resetGame() {
  drawnCards = [];
  document.getElementById("result").innerText = "";
  document.getElementById("current-card").innerHTML = "";
  document.getElementById("card-container").innerHTML = "";
  localStorage.removeItem("drawnCards");
}

function displayCurrentCard(card) {
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.classList.add("card-image", "large");
  svgElement.setAttribute("viewBox", "0 0 480 720");

  const useElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  useElement.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    `#card-${translateCard(card)}`
  );

  svgElement.appendChild(useElement);

  const container = document.getElementById("current-card");
  container.innerHTML = ""; // 每次只顯示最新抽到的牌
  container.appendChild(svgElement);
}

function displayCardImage(card, order) {
  const historyItem = document.createElement("div");
  historyItem.className = "history-item";

  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "50");
  svgElement.setAttribute("height", "70");
  svgElement.setAttribute("viewBox", "0 0 480 720");

  const useElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  useElement.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    `#card-${translateCard(card)}`
  );

  svgElement.appendChild(useElement);

  const orderLabel = document.createElement("span");
  orderLabel.innerText = `#${order}`;

  historyItem.appendChild(svgElement);
  historyItem.appendChild(orderLabel);

  const container = document.getElementById("card-container");
  container.appendChild(historyItem);
}

function translateCard(card) {
  switch (card) {
    case "東":
      return "east";
    case "南":
      return "south";
    case "西":
      return "west";
    case "北":
      return "north";
    default:
      return "";
  }
}

function saveHistory() {
  localStorage.setItem("drawnCards", JSON.stringify(drawnCards));
}

function loadHistory() {
  const storedCards = localStorage.getItem("drawnCards");
  if (storedCards) {
    drawnCards = JSON.parse(storedCards);
    drawnCards.forEach((card, index) => {
      displayCurrentCard(card);
      displayCardImage(card, index + 1);
    });
  }
}

function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");

  document.documentElement.style.setProperty(
    "--bg-color",
    isDarkMode ? "#333" : "white"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    isDarkMode ? "#fff" : "black"
  );

  const toggleButton = document.querySelector(".theme-toggle");
  toggleButton.innerText = isDarkMode ? "☀️" : "🌙";
}

// 加載歷史記錄
document.addEventListener("DOMContentLoaded", loadHistory);
