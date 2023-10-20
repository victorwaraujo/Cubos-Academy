const email = 'jose.@cubos'

email.includes('@')
email.includes('.')
email.indexOf('.', 0)

if (email.includes('@') && email.includes('.')) {
  if (email.indexOf('.') !== 0 && email.lastIndexOf('.') !== email.length - 1) {
    console.log('Email Válido')
  } else {
    console.log('email inválido')
  }
} else {
  console.log('email inválido')
}
