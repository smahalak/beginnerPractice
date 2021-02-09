//give 5   1*2*3*4*5 = 120

let factorizlize = (num) => {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
    console.log(result);
  }
};

factorizlize(5);
