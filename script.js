("use strict");

//Measures of central tendency computation
//In the ES6 code below, for the mean, mode and median, some of their functions were declared outside the class.

//For this assignemnt, an array of numebers 10, 2, 4, 7,2 were used as an ungrouped data for this task.
const arr = [10, 2, 4, 7, 2];

//MEAN
//Initial declarations for mean //
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

//MEAN CLASS
class meanCL {
  constructor(meanSum, meanFrequency) {
    this.meanSum = meanSum;
    this.meanFrequency = meanFrequency;
  }

  calMean() {
    console.log(`The mean is ${this.meanSum / this.meanFrequency}`);
  }
}

const mean = new meanCL(sum, arr.length);
console.log(mean);
mean.calMean();

//MEDIAN
//MEDIAN CLASS
class medianCL {
  constructor(medianValue) {
    this.medianValue = medianValue;
  }
  calMedian() {
    const howManyNumebers = this.medianValue.length;
    const middleNumber = Math.floor(howManyNumebers / 2);
    if (howManyNumebers % 2 !== 0) {
      console.log(`The median is ${this.medianValue[middleNumber]}`);
    } else {
      console.log("try again");
    }
  }
}

const middleValue = new medianCL(arr);
console.log(middleValue);
middleValue.calMedian();

//MODE
//Initial declarations for mode//
const modefrequency = {};
arr.forEach((num) => {
  modefrequency[num] = (modefrequency[num] || 0) + 1;
});

let mode;
let maxOccurrences = 0;
for (const num in modefrequency) {
  if (modefrequency[num] > maxOccurrences) {
    maxOccurrences = modefrequency[num];
    mode = num;
  }
}

//MODE CLASS
class modeCL {
  constructor(modeValue) {
    this.modeValue = modeValue;
  }
  calMode() {
    console.log(`The mode is ${this.modeValue}`);
  }
}

const modal = new modeCL(mode);
console.log(modal);
modal.calMode();

//Measures of dispersion

