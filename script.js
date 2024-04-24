function firstNonRepeatedChar(str) {
 // Write your code here
  let splitStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let count = 0;
    for (let j = 0; j < splitStr.length; j++) {
      if (char == splitStr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return char;
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
