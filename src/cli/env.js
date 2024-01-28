const parseEnv = () => {
    const vars = Object.keys(process.env).filter(item => item.indexOf('RSS_') === 0);
    const result = vars.map(item => `${item}=${process.env[item]}`).join('; ');
    console.log(result)
};

parseEnv();
