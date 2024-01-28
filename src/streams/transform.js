import { Transform } from 'stream';

const transform = async () => {
    const reversesText = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse() + '\n');
        },
    });

    process.stdin.pipe(reversesText).pipe(process.stdout);
};

await transform();
