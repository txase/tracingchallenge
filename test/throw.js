function thrws() {
  1+2;
  throw new Error('I blew up!');
  return 5;
}

var caught = false;
try {
  thrws();
} catch (e) {
  if (e.message === 'I blew up!') caught = true;
} finally {
  if (!caught) console.log('Bzzt! Error not propagated!');
}
