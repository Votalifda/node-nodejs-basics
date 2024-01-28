const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args.reduce((acc, current, idx) => {
        if (idx % 2 === 0) {
            acc.push(`${current.replace('--', '')} is ${args[idx + 1]}`);
        }
        return acc;
    }, []);
    console.log(result.join(', '));
};

parseArgs();
