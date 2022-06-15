// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnLastTwoDrivers = function (name){
    const driverNames = [...name.slice((name.length)-2)]
    return(driverNames)
}

const returnFirstTwoDrivers = function (name){
    const driverNames = [...name.slice(0,2)]
    return(driverNames)
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const fareDoubler= function (integer){
  return (integer*2)
}

const fareTripler= function (integer){
  return (integer*3)
}

function createFareMultiplier(integer){
  const fareMultiplier = function(fare){
    return(fare*integer)
  }
  return fareMultiplier
}

function selectDifferentDrivers(arrayOfDrivers, argument2){ 
  return(argument2(arrayOfDrivers))
}