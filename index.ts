process.stdin.resume();
process.stdin.setEncoding('utf8');
let input_string = '';

process.stdin.on('data', (chunk: string) => {
  input_string += chunk;
});

process.stdin.on('end', () => {
  const lines = input_string.split('\n');
  console.log('lines', lines);
});


export function myFunc() {
  return 'hello!';
}
