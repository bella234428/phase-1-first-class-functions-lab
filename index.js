// Code your solution in this file!
// 1. returnFirstTwoDrivers: anonymous function assigned to const
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers: anonymous function assigned to const
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers array with two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier: higher-order function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler: uses createFareMultiplier to double the fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler: uses createFareMultiplier to triple the fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers: chooses between two functions to select drivers
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

// Exporting functions if needed
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};