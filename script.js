// This is a simple piece of code to reverse an string

const reversed = (str) => {
  return str.split("") // split the string to an array with space between ex. ["h", "e", "l", "l", "o"]
    .reverse() // reverse the array which made by last called function ex. ["o", "l", "l", "e", "h"]
    .join(""); // put all parts of array toghether as an string ex. "olleh"
};

// this line reperesnts defualt test for code
console.log(reversed("hello!"))
// this lines parameter can be changed 
console.log(reversed(/* her can be changed */))
