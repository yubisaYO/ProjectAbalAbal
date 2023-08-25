const containerEl = document.querySelector(".container");
const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let idxCareer = 0;
let idxCharacter = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `<h1>I am ${
    careers[idxCareer][0] === "I" ? "an" : "a"
  } ${careers[idxCareer].slice(0, idxCharacter++)}</h1>`;

  if (idxCharacter == careers[idxCareer].length + 1) {
    idxCareer++;
    idxCharacter = 0;
  } else {
    console.log(idxCharacter);
  }

  if (idxCareer == careers.length) {
    idxCareer = 0;
  }
  setTimeout(() => {
    updateText();
  }, 400);
}
