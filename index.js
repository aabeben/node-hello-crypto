const { Certificate } = require('crypto')

const spkac = getSpkacSomehow()
const challenge = Certificate.exportChallenge(spkac)
console.log(challenge.toString('utf-8'))
