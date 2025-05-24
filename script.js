//Accessing the HTML elememts
const palindromeInput = document.querySelector("#text-input");
const verifyBtn = document.querySelector("#check-btn");
const resultSpan = document.querySelector("#result");

//Creating the function that checks for a palindrome
function checkForPalindrome() {
   if(palindromeInput.value !== "") {
   
  const regex = /[\s-_@:,.)(;?\*$&\^/\|€}{=+×÷><\[\]%`'"~£¥₩#]/g;
  const word = palindromeInput.value;
  let refinedWord = "";
  if(word.replace(regex, "")) {
    refinedWord = word.replace(regex, "");
  }else {
    refinedWord = word;
  }
  
  let reversedWord = refinedWord.trim().toLowerCase().split("").reverse().join("");
  
  if(reversedWord === refinedWord.trim().toLowerCase()) {
    resultSpan.innerText = `${word} is a palindrome.`;
    palindromeInput.style.borderBottom = "2px solid green";
  }else {
    resultSpan.innerText = `${word} is not a palindrome.`;
    palindromeInput.style.borderBottom = "2px solid red";
  };
  
  palindromeInput.value = "";
  palindromeInput.focus();
  }else {
    alert("Please input a word");
  };
}

verifyBtn.addEventListener("click", checkForPalindrome);
