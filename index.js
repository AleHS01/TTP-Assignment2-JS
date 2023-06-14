// Assignment 2 - Alejandro Hernandez

// forEach()
function myForEach(myArray, paramFunction) {
  for (element of myArray) {
    paramFunction(element);
  }
}

// map()
function myMap(myArray, paramFunction) {
  let newArray = [];
  let index = 0;
  for (element of myArray) {
    newArray[index] = paramFunction(element);
    index++;
  }

  return newArray;
}

// filter()
function myFilter(myArray, paramFunction) {
  let newArray = [];

  for (element of myArray) {
    let index = 0;
    if (paramFunction(element)) {
      newArray[index] = element;
      index++;
    }
  }

  return newArray;
}

//some (any)
function mySome_Any(myArray, paramFunction) {
  for (element of myArray) {
    if (paramFunction(element)) {
      return true;
    }
  }

  return false;
}

//every
function myEvery(myArray, paramFunction) {
  for (element of myArray) {
    if (!paramFunction(element)) {
      return false;
    }
  }

  return true;
}

//reduce

//includes()
function myIncludes(myArray, target) {
  for (element of myArray) {
    if (element === target) {
      return true;
    }
  }

  return false;
}

//indexof()
function myIndexOf(myArray, target) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == target) {
      return i;
    }
  }

  return -1;
}

//lastIndexOf()
function myLastIndexOf(myArray, target) {
  for (let i = myArray.length - 1; i >= 0; i--) {
    if (myArray[i] == target) {
      return i;
    }
  }

  return -1;
}

//push
function myPush(array, ...listOfElements) {
  let length = array.length;
  for (let i = 0; i < listOfElements.length; i++) {
    array[length + i] = listOfElements[i];
  }
  return array.length;
}

//Object.keys()
function getKeys(object) {
  let keysArray = [];
  let index = 0;

  for (let property in object) {
    keysArray[index] = property;
    index++;
  }

  return keysArray;
}

//Object.values()
function getValues(object) {
  let valuesArray = [];
  let index = 0;

  for (let property in object) {
    valuesArray[index] = object[property];
  }

  return valuesArray;
}

//---------Part 2---------

//Miscellaneous Problems

//Sum of a Range
function range(a, b) {
  let rangeArray = [];

  for (let i = a; i <= b; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

function sum(myArray) {
  let sum = 0;

  for (let x of myArray) {
    sum += x;
  }
  return sum;
}

//Reversing an array
function myReverseArray(originalArray) {
  let reverseArray = [];
  for (let i = originalArray.length - 1; i >= 0; i++) {
    reverseArray.unshift(originalArray[i]);
  }

  return reverseArray;
}

//Reversing an array in place
function myReverseInPlace(myArray) {
  for (let i = 0, j = myArray.length - 1; i < j; i++, j--) {
    const temp = myArray[i];
    myArray[i] = myArray[j];
    myArray[j] = temp;
  }

  //no need to return since we are not creating any new array and we are working with a reference instead of a normal value
}

//  A list

function myPrepend(value, list) {
  return {
    value: value,
    rest: list,
  };
}

function myArrayToList(myArray) {
  let aList = null; //so that the last rest will be null

  for (let element of myArray) {
    aList = myPrepend(element, aList);
  }

  return aList;
}

function myListToArray(list) {
  let myArray = [];

  while (list !== null) {
    myArray.push(list.value);
    list = list.rest;
  }
  return myArray;
}

function myNth(list, index) {
  while (list !== null && index > 0) {
    list = list.rest;
    index--;
  }

  if (lsit !== null && index === 0) {
    return list.value;
  }
  return undefined;
}

// Deep Comparison
function myDeepComparison(objectA, objectB) {
  if (
    typeof objectA !== "object" ||
    objectA === null ||
    typeof objectB !== "object" ||
    objectB === null
  ) {
    return false;
  }

  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }

  for (let property in objectA) {
    if (!myDeepComparison(objectA[property], objectB[property])) {
      return false;
    }
  }

  return true;
}
