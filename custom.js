let heading = document.querySelector(".heading");
let arr = [2, 1, 7, 3, 5, 6, 9, 11, 10, 15, 14, 12, 13, 4];

heading.innerHTML = arr.sort((a, b) => {
  return a - b;
});
