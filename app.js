const btn = document.querySelector(".btn");
const loveNumber = document.querySelector(".number");
const personOne = document.querySelector(".person-one");
const personTwo = document.querySelector(".person-two");
const title = document.querySelector(".title");
const loveContainer = document.querySelector(".container");

const calculateLove = () => {
  if (personOne.value === "" || personTwo.value === "") {
    return alert("You have to fill both fields");
  }

  const randonNum = Math.floor(Math.random() * 101);
  loveNumber.textContent = randonNum;
  if (randonNum === 100) {
    alert("You are a perfect match");
  }
};

title.addEventListener("click", () => {
  title.style.display = "none";
  loveContainer.style.display = "inline-flex";
});
btn.addEventListener("click", calculateLove);
