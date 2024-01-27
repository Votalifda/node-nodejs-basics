import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFile = path.join(__dirname, 'files', 'properFilename.md');

    const isFileExists = async (path) => {
        try {
            await fs.access(path);
            return true;
        } catch {
            return false;
        }
    }

    if (!await isFileExists(wrongFile) || await isFileExists(properFile)) {
        throw new Error('FS operation failed');
    } else {
        await fs.rename(wrongFile, properFile);
    }
};

await rename();
