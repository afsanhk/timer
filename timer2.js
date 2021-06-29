// COPIED FROM ../test.js
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Written for this code
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
  
  // Beeps if b
  if (key === 'b') {
    process.stdout.write('\x07');
  
  // Beeps after x seconds
  } else if (Number.isNaN(key) === false && Number(key) >= 1 && Number(key) <=9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07') , key*1000);
  
  // \u0003 maps to ctrl+c input
  } else if (key === '\u0003') {
      console.log(`Thanks for using me, ciao!`);
      process.exit();
  }
});