const router = require('express').Router();
const gameRoutes = require('./gameRoutes.js');

router.use('/game', gameRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;