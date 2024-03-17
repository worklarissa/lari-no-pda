function init() {
    let frutas = ["Banana", "Maçã", "Morango", "Abacaxi"]; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(frutas); // use variable declared in the parent function
    }
    displayName();
  }
  init();