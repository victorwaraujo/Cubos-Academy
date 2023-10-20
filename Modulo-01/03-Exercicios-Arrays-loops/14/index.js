const arrayA = [3, 18, 67, 44, 6]
const arrayB = [22, 7, 56, 2, 14]

if (arrayA.length === arrayB.length) {
  for (i = 0; i < arrayB.length; i++) {
    if (arrayA[i] < arrayB[i]) {
      console.log(arrayA[i])
    } else {
      console.log(arrayB[i])
    }
  }
}
