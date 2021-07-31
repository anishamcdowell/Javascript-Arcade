const router = require('express').Router();
const path = require('path');

router.get('/tictactoe', (req, res) => {
    res.sendFile('tictactoe.html', {root: 'public/pages'});
})

module.exports = router;