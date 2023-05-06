function setAllMaxCounter(counters, maxCounter) {
  return counters.map((counter) => Math.max(counter, maxCounter));
}

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value >= 1 && value <= N) {
      counters[value - 1] = Math.max(counters[value - 1], lastMax) + 1;
      maxCounter = Math.max(maxCounter, counters[value - 1]);
    } else if (value === N + 1) {
      lastMax = maxCounter;
    }
  }

  return setAllMaxCounter(counters, lastMax);
}
//refactorizamos el codigo anterior
function solutionTest(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value >= 1 && value <= N) {
      //increase counter
      counters[value - 1] = Math.max(counters[value - 1], lastMax) + 1;
      maxCounter = Math.max(maxCounter, counters[value - 1]);
    } else if (value === N + 1) {
      //set all counter values for max counter
      lastMax = maxCounter;
      counters.fill(lastMax);
    }
  }

  return counters;
}

const N = 5;
const A = [1, 1, 4, 6, 1, 5, 5];

console.log(solutionTest(N, A));
