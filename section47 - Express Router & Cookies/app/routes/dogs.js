const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All dogs');
});

router.post('/', (req, res) => {
    res.send('Creating new dog');
});

router.get('/:id', (req, res) => {
    res.send('Viewing one dog');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing one dog');
});

router.put('/:id', (req, res) => {
    res.send('Updating one dog');
});

router.delete('/:id', (req, res) => {
    res.send('Deleting one dog');
});

module.exports = router;