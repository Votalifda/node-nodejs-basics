import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const scriptFile = path.join(__dirname, 'files', 'script.js');
    const childProcess = spawn('node', [scriptFile, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    process.stdin.on('end', () => childProcess.stdin.end());
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);

