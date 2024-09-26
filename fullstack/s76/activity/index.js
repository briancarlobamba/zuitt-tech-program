// Question #1: Create a program that calculate the total order amount. 
// Input should be an array, if not an array, return undefined. 

function calculateTotalAmount(orderAmounts) {
  if (!Array.isArray(orderAmounts) || !orderAmounts.every(amount => typeof amount === 'number')) {
    return undefined;
  }

  let total = 0;
  for (let i = 0; i < orderAmounts.length; i++) {
    total += orderAmounts[i];
  }

  return total;
}


// Question #2: Create a program that takes an array of blog post titles and a keyword. 
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

/*function filterTitlesByKeyword(titles, keyword) {
  if (!Array.isArray(titles) || typeof keyword !== 'string' || !titles.every(title => typeof title === 'string')) {
    return undefined;
  }

  keyword = keyword.toLowerCase();
  return titles.filter(title => title.toLowerCase().includes(keyword));
}
*/

function filterTitlesByKeyword(titles, keyword) {
  if (!Array.isArray(titles) || typeof keyword !== 'string' || !titles.every(title => typeof title === 'string')) {
    return undefined;
  }

  keyword = keyword.toLowerCase();
  const matchingTitles = titles.filter(title => title.toLowerCase().includes(keyword));
  
  if (matchingTitles.length === 0) {
    return "No matching titles found.";
  }
  
  return matchingTitles;
}

// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

/*function formatUsernames(usernames) {
  if (!Array.isArray(usernames) || !usernames.every(name => typeof name === 'string')) {
    return undefined;
  }

  return usernames.map(username => {
    if (username.length === 0) return "User:";
    return `User:${username.charAt(0).toUpperCase() + username.slice(1)}`;
  });
}*/

function formatUsernames(usernames) {
  if (!Array.isArray(usernames) || !usernames.every(name => typeof name === 'string')) {
    return undefined;
  }

  return usernames.map(username => {
    if (username.length === 0) return "User: ";
    return `User: ${username.charAt(0).toUpperCase()}${username.slice(1)}`;
  });
}


// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inputs are arrays and contain only integers, if not return undefined

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
  if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2) ||
      !datesWarehouse1.every(date => Number.isInteger(date)) ||
      !datesWarehouse2.every(date => Number.isInteger(date))) {
    return undefined;
  }

  const combinedDates = datesWarehouse1.concat(datesWarehouse2);
  const uniqueDates = [];
  
  for (let i = 0; i < combinedDates.length; i++) {
    if (uniqueDates.indexOf(combinedDates[i]) === -1) {
      uniqueDates.push(combinedDates[i]);
    }
  }
  
  uniqueDates.sort((a, b) => a - b);
  return uniqueDates;
}


// Question #5: Develop a program that removes all scores that are below a certain threshold. 
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places. 
// If after filtering there are no scores left or the input is invalid, return undefined

/*function removeLowScoresAndCalculateAverage(scores, threshold) {
  if (!Array.isArray(scores) || !scores.every(score => Number.isInteger(score))) {
    return undefined;
  }

  const filteredScores = scores.filter(score => score >= threshold);
  
  if (filteredScores.length === 0) {
    return undefined;
  }

  let total = 0;
  for (let i = 0; i < filteredScores.length; i++) {
    total += filteredScores[i];
  }

  const average = total / filteredScores.length;
  return Math.round(average * 100) / 100;
}*/

function removeLowScoresAndCalculateAverage(scores, threshold) {
  if (!Array.isArray(scores) || !scores.every(score => Number.isInteger(score) && score >= 0 && score <= 100)) {
    return undefined;
  }

  const filteredScores = scores.filter(score => score >= threshold);
  
  if (filteredScores.length === 0) {
    return undefined;
  }

  let total = 0;
  for (let i = 0; i < filteredScores.length; i++) {
    total += filteredScores[i];
  }

  const average = total / filteredScores.length;
  return Math.round(average * 100) / 100;
}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        calculateTotalAmount: typeof calculateTotalAmount !== 'undefined' ? calculateTotalAmount : null,
        filterTitlesByKeyword: typeof filterTitlesByKeyword !== 'undefined' ? filterTitlesByKeyword : null,
        formatUsernames: typeof formatUsernames !== 'undefined' ? formatUsernames : null,
        optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== 'undefined' ? optimizeDeliverySchedule : null,
        removeLowScoresAndCalculateAverage: typeof removeLowScoresAndCalculateAverage !== 'undefined' ? removeLowScoresAndCalculateAverage : null,
    }
} catch(err){

}
