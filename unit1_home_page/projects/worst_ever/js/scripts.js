// Correct image paths (scripts.js is inside js/, so we go up one folder)
const memes = [
  "../img/meme1.jpg",
  "../img/meme2.jpg",
  "../img/meme3.jpg",
  "../img/meme4.jpg",
  "../img/meme5.jpg",
  "../img/meme6.jpg",
  "../img/meme8.jpg",
  "../img/meme9.jpg",
  "../img/meme10.jpg",
  "../img/meme11.jpg",
  "../img/meme12.jpg",
  "../img/meme13.jpg",
  "../img/meme14.jpg",
  "../img/meme67.jpg",
  "../img/meme.jpg"
];

let popupsEnabled = true;

function updatePopupStatus() {
  const status = document.getElementById("popup-status");
  if (status) {
    status.textContent = popupsEnabled
      ? "Popups are active."
      : "Popups are disabled."
  }
}

function spawnUglyPopup() {
  if (!popupsEnabled) {
    return;
  }

  const meme = memes[Math.floor(Math.random() * memes.length)];

  const w = 300 + Math.random() * 200;
  const h = 200 + Math.random() * 200;
  const x = Math.random() * (screen.width - w);
  const y = Math.random() * (screen.height - h);

  const popup = window.open(
    "",
    "",
    `width=${w},height=${h},left=${x},top=${y}`
  );

  if (popup) {
    popup.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Ugly Popup</title>
          <style>body{margin:0;background:green;}img{width:100%;height:100%;object-fit:cover;display:block;}</style>
        </head>
        <body>
          <img src="${meme}" alt="meme">
        </body>
      </html>
    `);
    popup.document.close();

    setTimeout(() => {
      if (!popup.closed) {
        popup.close();
      }
    }, 10000);
  }
}

const frontPageImages = [
  ...memes,
  "../img/freshmeme.jpg",
  "../img/freshmeme1.jpg",
  "../img/freshmeme2.jpg",
  "../img/freshmeme3.jpg"
];

function chooseRandomUnique(array, count) {
  const copy = array.slice();
  const chosen = [];

  for (let i = 0; i < count && copy.length; i++) {
    const index = Math.floor(Math.random() * copy.length);
    chosen.push(copy.splice(index, 1)[0]);
  }

  return chosen;
}

function refreshFrontMemes() {
  const memeImgs = Array.from(document.querySelectorAll(".front-memes img"));
  const picks = chooseRandomUnique(frontPageImages, memeImgs.length);

  memeImgs.forEach((img, index) => {
    img.src = picks[index];
    img.classList.add("spin");
    setTimeout(() => img.classList.remove("spin"), 2200);
  });
}

// spawn one immediately
spawnUglyPopup();

// spawn more every 3 seconds
setInterval(spawnUglyPopup, 3000);

const popupInput = document.getElementById("popup-toggle-input");
if (popupInput) {
  popupInput.addEventListener("input", (event) => {
    const value = event.target.value.trim().toLowerCase();
    popupsEnabled = value !== "meme";
    updatePopupStatus();
  });
}

updatePopupStatus();

refreshFrontMemes();
setInterval(refreshFrontMemes, 24000);

function shrinkAndGrow() {
  document.body.style.transform = "scale(0.1)";

  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 500);
}

// run once immediately
shrinkAndGrow();

// repeat every 27 seconds
setInterval(shrinkAndGrow, 2000);
