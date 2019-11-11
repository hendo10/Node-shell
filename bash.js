process.stdout.write('prompt >');
// const exportsFromFileB = require('./fileB')

process.stdin.on('data', (data) => {
     
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(`${process.cwd(cmd)}`);
    }
 

    // process.stdout.write('\nprompt > ');
});

