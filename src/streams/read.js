import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(fileToRead, { encoding: 'utf-8' });
    let content = '';

    stream.on('data', (data) => {
        content += data;
    });

    stream.on('end', () => {
        process.stdout.write(content);
    });
};

await read();
