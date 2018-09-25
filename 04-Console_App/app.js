const colors = require('colors/safe');
const args = require('./commands/yargs').args;
const functions = require('./functionality/tasks');

let command = args._[0];

switch (command) {
    case 'new':
        console.log(functions.createPendingTask(args.description));
        break;
    case 'show':
        console.log(functions.showAllPendingTask());
        break;
    case 'update':
        console.log(args);
        break;
    default:
        console.log(colors.yellow(`The introduced command '${command}' is not recognized`));
}
