function isLandscape (___, ___) {
  if (___ == ___) return 'Square'; //must be first, return will not allow rest of code to run
  return (___ > ___) ? 'Landscape' : 'Portrait'; //returns the value of the expression
}

let width = 800;
let height = 800;
console.log("This display geometry is", isLandscape (width, height)); //Difference between calling functions with arguements and sending to parameter's, local variables
