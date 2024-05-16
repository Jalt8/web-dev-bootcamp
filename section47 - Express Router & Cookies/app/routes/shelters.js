const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All shelters');
});

router.post('/', (req, res) => {
    res.send('Creating new shelter');
});

router.get('/:id', (req, res) => {
    res.send('Viewing one shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing one shelter');
});

router.put('/:id', (req, res) => {
    res.send('Updating one shelter');
});

router.delete('/:id', (req, res) => {
    res.send('Deleting one shelter');
});

module.exports = router;