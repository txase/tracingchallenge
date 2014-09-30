function one() {
  two();
}

function two() {
  three();
}

function three() {
  1+2;
}

one();
