const express = require('express');
const router = express.Router(); // create an express router

// ----- Custom route handler
const c = require('../controllers/handleCheckout');

router.post('/create-checkout-session', c.handleCheckout);
router.post('/create-checkout-session-flutter_wave', c.handleCheckoutFlutter_wave);

// ---- home route Handling
router.get('/', (req, res) => {
    res.status(200).json({ msg: "get request from the client" });
    res.end(); // ---- End the response
})

module.exports = router;