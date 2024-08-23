const containerElement = document.querySelector(".container");

const careers = [
  "Welcome to my Portfolio!",
  "I am a Fullstack Web Developer",
  "I am a UI/UX Designer",
  "I am a Freelancer",
  " And  a Yoruba Language Instrsructor and Translator",
];

let careerI = 0;
let characterI = 0;
updateCareer();

function updateCareer() {
  characterI++;
  containerElement.innerHTML = `
  <h1> ${careers[careerI].slice(0, characterI)}</h1>`;
  if (characterI === careers[careerI].length) {
    careerI++;
    characterI = 0;
  }
  if (careerI === careers.length) {
    careerI = 0;
  }
  setTimeout(updateCareer, 200);
}
