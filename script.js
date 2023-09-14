const form = document.querySelector(".form");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const p = document.querySelector(".p");
const nicePara = document.querySelector(".p1");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  
    let input =  form.querySelector(".input").value;
    console.log(input);

    btn2.addEventListener("click", () => {
      p.innerHTML = input;
      p.classList.toggle("pat");
    })


  function cipher(){
    let firstLetter = input[0].toUpperCase();
  console.log(firstLetter);

  let lastLetter = input.charAt(input.length - 1).toUpperCase();
  console.log(lastLetter);

  let middleCharacters = input.slice(1, -1);
  console.log(middleCharacters);


  let newTwo = firstLetter + lastLetter;
  console.log(newTwo);


  let reversedString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
console.log(reversedString);

const middleIndex = Math.floor(input.length / 2);
let realMiddle = input[middleIndex];
console.log(middleIndex);
console.log(realMiddle);
  let newCipher = newTwo + reversedString + realMiddle;
  console.log(newCipher);


  btn3.addEventListener("click", () => {
    nicePara.innerHTML = newCipher;
    nicePara.classList.toggle("prat")
  });

}

 cipher()

 
});
