function execute(func, operand) {
  // ... implement this function
    console.log(func(operand))  // to show the expected return value
    return func(operand);       // actual return value from `execute`

}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"