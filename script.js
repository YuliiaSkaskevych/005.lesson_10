const lenArray = prompt('Please enter the length of your array', '5');
const elemArray = prompt('Please enter the elements of your array', '1 2 3 4 5');
const newArray = elemArray.split(' ', Number(lenArray));

alert(`Your array:\r\n${newArray}`);

let sortedArray = newArray.sort();
alert(`Sorted array in ascending order:\r\n${sortedArray}`);

let deletedElemArray = newArray.splice(1, 3);
alert(`New array without elements from the array from 2 to 4 (inclusive!):\r\n${newArray}\r\n
Deleted elements: ${deletedElemArray}`);
