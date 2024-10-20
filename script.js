const input = document.querySelector("#input");
const maskButton = document.querySelector("#mask-button");
const copy = document.querySelector("#copy-button");
const output = document.querySelector(".output");
const modeText = document.querySelector("#mode-button p");
let currentMode = "redirect";

// Event listeners

try {
  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      encode(input.value);
    }
  });

  maskButton.addEventListener("click", () => {
    encode(input.value);
  });

  copy.addEventListener("click", () => {
    if (Boolean(output.querySelector("span")) == true) {
      copy.innerText = `❌ Nothing to copy`;
    } else {
      navigator.clipboard.writeText(output.innerText);
      copy.innerText = `✅ Copied Masked URL`;
    }
    setTimeout(() => {
      copy.innerText = "🔗 Copy Masked URL";
    }, 2000);
  });
} catch (e) {
  console.error(e);
}

// Change mode

function modeChange() {
  if (currentMode == "text") {
    currentMode = "redirect";
  } else {
    currentMode = "text";
  }
  modeText.style.transform = "translate(-150%, 0)";
  setTimeout(() => {
    modeText.innerText = `Mode: ${currentMode}`;
    modeText.style.transform = "translate(0, 0)";
  }, 350);
}

// Encode

function encode(value) {
  if (value.replaceAll(" ", "") == "") {
    output.innerHTML = `<span style="user-select: none">Input cannot be empty.</span>`;
  } else {
    let encodedValue = window.btoa(value);
    if (currentMode == "redirect") {
      output.innerText = `https://axorax.github.io/urlmskr/${encodedValue}`;
    } else if (currentMode == "text") {
      output.innerText = `https://axorax.github.io/urlmskr/?t=${encodedValue}`;
    }
  }
}

// Electric Surge

function createBolt() {
  const bolt = document.createElement("div");
  bolt.className = "bolt";
  bolt.style.left = `${Math.random() * 100}%`;

  const electricSurge = document.getElementById("electric-surge");
  const electricSurgeRect = electricSurge.getBoundingClientRect();
  const boltRect = bolt.getBoundingClientRect();

  if (
    boltRect.left + boltRect.width >
    electricSurgeRect.left + electricSurgeRect.width
  ) {
    const newLeft =
      electricSurgeRect.left + electricSurgeRect.width - boltRect.width;
    bolt.style.left = `${newLeft}px`;
  }

  electricSurge.appendChild(bolt);
  setTimeout(() => {
    bolt.remove();
  }, 800);
}

setInterval(createBolt, 1000);

// Stars

const numberOfStars = Math.floor((window.innerWidth + window.innerHeight) / 16);
const starContainer = document.createElement("div");
starContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `;
document.body.appendChild(starContainer);

function createStar() {
  const star = document.createElement("div");
  const starSize = Math.random() * 3 + 1;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.classList.add("star");
  star.style.width = `${starSize}px`;
  star.style.height = `${starSize}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  starContainer.appendChild(star);
}

for (let i = 0; i < numberOfStars; i++) {
  createStar();
}

window.addEventListener("resize", function () {
  while (starContainer.firstChild) {
    starContainer.removeChild(starContainer.firstChild);
  }

  for (let i = 0; i < numberOfStars; i++) {
    createStar();
  }
});
