var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  return arr.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}