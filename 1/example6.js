function funcA(param1) { // param1 = 42 - param1 = 1
    return function funcB(param2) { // param2 = 2
      
      return param1 + param2;
    }
  }
  
  const maFuncB = funcA(42); // Mise en cache de 42
  
  const maFuncBPrime = funcA(1);
  
  console.log(maFuncB(2)); // 44