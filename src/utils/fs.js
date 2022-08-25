const fs = require('fs');
function imprimir() {
  console.log("Hola!!!");
}
fs.readFile('fileSample.txt','utf-8',imprimir);
console.log('\nHaciendo otra cosa\n');
