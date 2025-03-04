const Task = require('../models/taskModel');

const tasks = [
    new Task(1, 'Complete project documentation'),
    new Task(2, 'Review pull requests'),
    new Task(3, 'Update task management API'),
    new Task(4, 'Prepare for the client meeting'),
    new Task(5, 'Optimize database queries')
]; // Simulated database

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const newTask = new Task(tasks.length + 1, title);
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (!title) return res.status(400).json({ message: 'Title is required' });

    task.title = title;
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));

    if (index === -1) return res.status(404).json({ message: 'Task not found' });

    tasks.splice(index, 1);
    res.json({ message: 'Task deleted' });
};
