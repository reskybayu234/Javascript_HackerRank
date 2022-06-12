let ar = [1, 2, 3, 4, 10, 11];

function jumlah(ar) {
  let array = 0;
  for (let i = 0; i < ar.length; i++) {
    array = array + ar[i];
  }
  return array;
}

console.log(jumlah(ar));
