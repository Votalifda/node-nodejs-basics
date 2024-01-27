import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await fs.access(fileToRemove, fs.constants.F_OK);
        await fs.unlink(fileToRemove);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
