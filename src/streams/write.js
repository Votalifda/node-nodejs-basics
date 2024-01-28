import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');
    const stream = fs.createWriteStream(fileToWrite);

    process.stdin.on('data', (data) => {
        stream.write(data);
    })
};

await write();
