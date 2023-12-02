function defaultFn(result) {
  return result;
}

function zero(fn = defaultFn) {
  return fn(0);
}
function one(fn = defaultFn) {
  return fn(1);
}
function two(fn = defaultFn) {
  return fn(2);
}
function three(fn = defaultFn) {
  return fn(3);
}
function four(fn = defaultFn) {
  return fn(4);
}
function five(fn = defaultFn) {
  return fn(5);
}
function six(fn = defaultFn) {
  return fn(6);
}
function seven(fn = defaultFn) {
  return fn(7);
}
function eight(fn = defaultFn) {
  return fn(8);
}
function nine(fn = defaultFn) {
  return fn(9);
}

function plus(outer) {
  return (inner) => inner + outer;
}
function minus(outer) {
  return (inner) => inner - outer;
}
function times(outer) {
  return (inner) => inner * outer;
}
function dividedBy(outer) {
  return (inner) => Math.floor(inner / outer);
}
