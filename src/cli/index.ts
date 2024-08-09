import { cac } from 'cac';
import { createViteServer } from '../vite/cli.js';

const program = cac('kuuba');

program.command('server', 'Start dev server')
    .alias('serve') // the command is called 'serve' in Vite's API
    .alias('dev') // alias to align with the script name
    .option('--host [host]', `[string] specify hostname`, { type: [(v: any) => {
        if (typeof v === 'number') return String(v);
        return v
    }]} )
    .option('--port <port>', `[number] specify port`)
    .option('--force', `[boolean] force the optimizer to ignore the cache and re-bundle`)
    .action(createViteServer);

program.command('[root]', 'This help message').option('-h', 'Show this help message').action(()=>{ console.log('Correct usage: `kuuba -h`') })

program.version('1.0.0')
program.parse()
    
export { program }