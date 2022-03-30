var allCups = document.querySelectorAll(".cupbox > .cup.cup-sm");
const majorCup = document.getElementById("cup");
const remaining = document.getElementById("remaining");
const completed = document.getElementById("completed");
let startBtn = document.getElementById("start-btn");
const cupbox = document.getElementById("cupbox");
const h3 = document.querySelector("h3");

startBtn.addEventListener("click", () => {
  while (allCups.length > 1) {
    cupbox.removeChild[allCups[0]];
  }

  var liters = document.querySelector("input").value;
  if (liters >= 0.0001) {
    whole(liters);
  } else {
  }
});

function whole(liters) {
  h3.classList.remove("none");
  cupbox.classList.remove("none");
  allCups.forEach((cup) => {
    if (liters <= 0.25) {
      cup.innerText = `${liters * 1000}ml`;
    }
  });

  let numberOfCloneGlass = liters * 4;
  for (let i = 0; i < numberOfCloneGlass; i++) {
    let a = allCups[0].cloneNode(true);
    cupbox.appendChild(a);
  }
  cupbox.removeChild(allCups[0]);
  remaining.innerText = `${liters}L`;
  allCups = document.querySelectorAll(".cupbox > .cup.cup-sm");
  allCups.forEach((cup, index) => {
    cup.addEventListener("click", () => cupmangment(index, liters));
  });
}
function cupmangment(index, liters) {
  allCups = document.querySelectorAll(".cupbox > .cup.cup-sm");
  if (
    allCups[index].classList.contains("full") &&
    !allCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  allCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.remove("blank");
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
      cup.classList.add("blank");
    }
  });

  updateData(liters);
}
const updateData = (liters) => {
  const fullCups = document.querySelectorAll(".full");
  console.log(fullCups);

  const totalCups = allCups.length;
  const fullCupsLen = fullCups.length;

  if (fullCupsLen === 0) {
    completed.style.visibility = "hidden";
    completed.style.height = 0;
  } else {
    completed.style.visibility = "visible";
    completed.style.height = `${(fullCupsLen / totalCups) * 500}px`;
    completed.innerText = `${((fullCupsLen / totalCups) * 100).toFixed(2)}%`;
  }

  if (fullCupsLen === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else if (fullCupsLen === 0) {
    remaining.style.visibility = "visible";
    remaining.style.height = `${(fullCupsLen / totalCups) * 500}px`;
    remaining.innerText = `${liters}L`;
  } else {
    remaining.style.visibility = "visible";
    remaining.style.height = `${(fullCupsLen / totalCups) * 500}px`;
    remaining.innerText = `${liters - (250 * fullCupsLen) / 1000}L`;
  }
};
