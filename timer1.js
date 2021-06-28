let args = process.argv.slice(2).sort((a,b) => a-b);

for (let arg of args) {
  arg = Number(arg);
  if (arg > 0) {
    setTimeout(() => process.stdout.write('\x07'), arg*1000)
  }
}