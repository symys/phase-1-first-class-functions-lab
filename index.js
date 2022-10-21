// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
    const arr2 = [...arr]
    return arr2.slice(0, 2)
}


const returnLastTwoDrivers = (arr) => {
    const arr2 = [...arr];
    return arr2.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(price){
   return (x) =>  x*price;
}

const fareDoubler = (arg) => arg * 2;

const fareTripler = (arg) => arg * 3;

const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers);
}