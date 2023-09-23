

document.querySelector("#btnGetAverage").addEventListener("click", ()=>{
    console.log("HEllo")
});

const getAverage = (num1, num2) => {
  return (num1 + num2) / 2;
};

const convertToLetter = (score) => {
  let letter = "";

  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else if (score >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

  return letter;
};

const isScoreValid = (score) => {
  return !!score && score >= 0 && score <= 100;
};

/* console.log(isScoreValid(null));
console.log(isScoreValid(""));
console.log(isScoreValid(undefined));
console.log(isScoreValid(NaN));
console.log(isScoreValid(false));
console.log(isScoreValid(50));
console.log(isScoreValid(150));
console.log(isScoreValid(-150)); */
