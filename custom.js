let heading = document.querySelector(".heading");
let numArray = [3, 1, 10, 20];

for (i = 0; i < numArray.length - 1; i++) {
  let min = i;

  for (j = i + 1; j < numArray.length; j++) {
    if (numArray[j] < numArray[min]) {
      min = j;
    }
  }

  if (min != i) {
    let target = numArray[i];
    numArray[i] = numArray[min];
    numArray[min] = target;
  }
}

console.log(numArray);

heading.innerHTML = numArray;
