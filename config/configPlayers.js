globalThis.players = []
function configPlayers() {
  const krill = new Player(['/assets/character/mr.krill.png'], 1000, 350, 10, 'Space', 30)
  globalThis.players.push(krill)
}
