let crypto

try{
   crypto = require('crypto')
} catch(err) {
  console.log('crypto support is disabled!')
}
console.log('Move on, your crypto is available. Do what ever you want to do!')
