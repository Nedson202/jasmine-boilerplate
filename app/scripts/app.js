module.exports = {
  multiplesAdd: function(number) {
    let counter,
      arrayOfNumbers = [],
      total = 0;
  
    //return all numbers in the range 0 - number to arrayOfNumbers
    for (counter = 0; counter < number; counter++) {
      arrayOfNumbers.push(counter);
    }
  
    /*loop through the new arrayOfNumbers to get all multiples 
    of 3 or 5 and add them together
    */
    for (counter = 3; counter < arrayOfNumbers.length; counter++) {
      if (
        arrayOfNumbers[counter] % 3 === 0 ||
        arrayOfNumbers[counter] % 5 === 0
      ) {
        total += arrayOfNumbers[counter];
      }
    }
    return total;
  },

  inputChecker: function(number) {
    if(typeof number !== 'number') {
      return 'Please enter a positive number'     
    }

    if(number <= 0) {
      return 'Please enter a number greater than 0'     
    }

    return this.multiplesAdd(number);
  }
}

