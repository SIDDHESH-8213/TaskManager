const express = require('express');
const Task = require('../models/Task');
const router = express.Router();


router.post('/', async (req, res) => {
    const task = await Task.create(req.body)
    res.json({ task });
});


router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});


router.patch('/:id', async (req, res) => {
    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return (`No task with id : ${taskID}`)
    }

    res.json({ task })
});

router.delete('/:id', async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.json({ task })
});




module.exports = router;
