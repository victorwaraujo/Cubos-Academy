const jogada1 = 4
const jogada2 = 7

const parOuImpar = (jogada1 + jogada2) % 2 === 0
if (parOuImpar) {
  console.log('O jogador que escolheu par venceu')
} else {
  console.log('O jogador que escolheu impar venceu')
}
