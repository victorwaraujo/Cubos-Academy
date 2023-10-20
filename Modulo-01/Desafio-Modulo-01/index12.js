const input = 'aSSim'

function temCaracteresMaiusculo(input) {
  if (input === input.toUpperCase()) {
    console.log(input.toLowerCase())
  } else if (input === input.toLowerCase()) {
    console.log(input)
  } else if (
    input.slice(0, 1) === input.slice(0, 1).toLowerCase() &&
    input.slice(1) === input.slice(1).toUpperCase()
  ) {
    console.log(input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase())
  } else {
    console.log(input)
  }
}
temCaracteresMaiusculo(input)
