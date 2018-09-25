const fs = require('fs');
const colors = require('colors/safe');

let error = colors.red;
let alert = colors.yellow;
let info = colors.blue;
let success = colors.green;

let pendingTasks = [];

let createPendingTask = (description) => {
    readDataFromFile();

    let task = {
        description,
        completed: false
    };

    return persistData(task);
};

let showAllPendingTask = () => {
    readDataFromFile();

    if(pendingTasks.length === 0)
        return alert('Is no pending tasks to show');

    let log = '';
    for(let task of pendingTasks){
        log += info('=============Pending Task=============\n');
        log += `-Task: ${task.description}\n`;
        log += `-Completed: ${task.completed? 'Yes' : 'No'}\n`;
    }
    return log;
};

let persistData = (task) => {

    pendingTasks.push(task);
    let data = JSON.stringify(pendingTasks);
    fs.writeFile('./data/data.json', data, err => {
        if (err) throw new Error(err.stack);
    });
    return success(`The pending task '${task.description}' has been registered`);

};

let readDataFromFile = () => {
    try {
        pendingTasks = require('../data/data');
    } catch (e) {
        pendingTasks = [];
    }
};

module.exports = {
    createPendingTask,
    showAllPendingTask
};
