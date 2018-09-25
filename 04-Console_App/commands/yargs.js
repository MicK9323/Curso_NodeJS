const args =  require('yargs')
    .command('new', 'Creates a new pending task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'A description of the pending task'
        }
    })
    .command('update', 'Updates the state of a task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the pending task to complete'
        },
        completed: {
            alias: 'c',
            default: true,
            desc: 'Completed or not'
        }
    })
    .command('show', 'Show the list of pending tasks')
    .help()
    .argv;

module.exports = {
  args
};
