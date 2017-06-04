import { spawn } from 'child_process';
import { INPUT_LINES } from './input-lines';
const cp = spawn('node', ['./index.js']);

cp.stdin.setDefaultEncoding('utf8');
cp.stdout.pipe(process.stdout);

INPUT_LINES.forEach(line => cp.stdin.write(line + '\n'));
cp.stdin.end();

cp.on('exit', code => console.log('child exited with code:', code));
