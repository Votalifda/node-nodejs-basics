import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
    try {
        await fs.access(fileToRead, fs.constants.F_OK);
        const content = await fs.readFile(fileToRead, 'utf8');
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
