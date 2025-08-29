function aggregate(a, b, c, arithmetic) {
  const firstResult = arithmetic(a, b);
  const secondResult = arithmetic(firstResult, c);
  return secondResult;
}
function main() {
  const sum = aggregate(2, 3, 4, add);
  // sum is 9
  const product = aggregate(2, 3, 4, mul);
  // product is 24
}