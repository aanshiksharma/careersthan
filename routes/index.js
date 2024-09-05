const express = require("express");
const router = express.Router();
require('../middlewares/isLoggedIn');

router.get('/', (req, res) => {
    res.render(index)
});

module.exports = router;
