let a = [2, 16, 3];
let b = [1, 17, 3];
function compareTriplets(a, b) {
  // Write your code here
  let alicePoint = 0;
  let bobPoint = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoint = alicePoint + 1;
    } else if (a[i] < b[i]) {
      bobPoint = bobPoint + 1;
    }
  }
  let total = [alicePoint, bobPoint];
  return total;
}
console.log(compareTriplets(a, b));
