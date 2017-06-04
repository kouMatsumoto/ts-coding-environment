import { spawn } from 'child_process';
import { INPUT_LINES } from './input-lines';

INPUT_LINES.forEach(inputLines => executeNodeWithInputLines(inputLines));

function executeNodeWithInputLines(inputLines: string[]) {
  const cp = spawn('node', ['./index.js']);
  cp.stdin.setDefaultEncoding('utf8');
  cp.stdout.pipe(process.stdout);

  inputLines.forEach(line => cp.stdin.write(line + '\n'));
  cp.stdin.end();
}
