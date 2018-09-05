var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  return arr.push(element);
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.push(element);
  return arr;
}