import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fullPath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.writeFile(fullPath, 'I am fresh and young', { flag: 'wx', encoding: 'utf-8' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
