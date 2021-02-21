const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const result = document.querySelector(".result");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  result.textContent = input.value;
});
