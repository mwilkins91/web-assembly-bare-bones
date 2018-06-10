const ready = new Promise((res, rej) => {
  Module.onRuntimeInitialized = () => {
    res(Module);
  }
});

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function count(count) {
  let counter = 0;
  for (let i = 0; i < count; i++) {
    counter++;
  }
  return count;
}

function winner(data) {
  const sortedData = data.sort((a,b) => a[1] - b[1]);
  const [winnerName, winnerVal] = sortedData[0];
  const [loserName, loserVal] = sortedData[1];
  console.log(`${winnerName} was the winner, it took ${winnerVal} miliseconds to complete the task. ${loserName} lost, and took ${loserVal} miliseconds to complete the task.`)
  console.log(`${winnerName} improved performance by %c${(((loserVal - winnerVal) / loserVal) * 100).toFixed(2)}% %ccompared to ${loserName}. (${loserVal - winnerVal}ms faster)`, 'color: green;', '')
}

const init = () => {
  const {_fib, _count} = Module.asm;
  let t1 = performance.now();
  _count(1000000000);
  const cPerformance = (performance.now() - t1);
  const c = 'C++: ' + cPerformance;

  let t0 = performance.now();
  count(1000000000);

  const jsPerformance = (performance.now() - t0);
  
  console.log(winner([
    ['JS', jsPerformance],
    ['C++', cPerformance],
  ]
  ))
}
ready.then(init);




