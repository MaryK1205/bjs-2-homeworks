function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  else {
    let sum = arr.reduce((sumIten, item) => (sumIten + item), 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = Number((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
  }
}

function summElementsWorker(...arr) {
  if (arr.length != 0) {
    return (arr.reduce((sumIten, item) => (sumIten + item), 0));
  }
  else {
    return 0;
  }

}

function differenceMaxMinWorker(...arr) {
  if (arr.length != 0) {
    return (Math.max(...arr) - Math.min(...arr));
  }
  else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length != 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]
      }
      else {
        sumOddElement += arr[i]
      }
    }
    return (sumEvenElement - sumOddElement);
  }
  else {
    return 0;
  }

}

function averageEvenElementsWorker(...arr) {
  if (arr.length != 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]
        countEvenElement += 1;
      }
    }
    return (sumEvenElement / countEvenElement);
  }
  else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {

  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    let currentResult = func(...arrOfArr[i]);
    if (maxWorkerResult < currentResult)
      maxWorkerResult = currentResult;
  }
  return maxWorkerResult;
}