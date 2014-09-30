function ifelse() {
  1+2;
}

if (true) ifelse()
else 1+2

if (false) 1+2
else ifelse()

if (true) {
  ifelse()
} else {
  1+2
}

if (false) {
  1+2
} else {
  ifelse()
}
