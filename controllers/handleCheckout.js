const axios = require('axios');
// ---- Setup your test stripe --------------------------------
const stripe = require('stripe')(process.env.Stripe_Private_Key); // ---- Pass the private key.

const clientSide_Domain = 'http://localhost:3000/checkout'

exports.handleCheckout = async (req, res) => {
    // // ---- Testing is the route is working
    // res.status(200).json({ msg: "Route is working" });
    // res.end(); // ---- End responses
    // //------------------------------------------------

  // ----- Create a checkout session
    const session = await stripe.checkout.sessions.create({ // --- Create a checkout session
        line_items: [ // ---- Pass the data of the product to list in checkout session
            {
                price: 'price_1LnVYkJUoS1NQM2Ld71CaXyY',
                quantity:1
            }
        ],
        phone_number_collection: {
            enabled:true,
        },
        mode: 'payment', // ---- define the mdoe of payment
        success_url: `${clientSide_Domain}?success=true`,  // query for success
        cancel_url:`${clientSide_Domain}?canceled=true`, // query for failure
    })
    res.status(303).redirect(session.url); // redirect user to the session url for stripe checkout form
};

exports.handleCheckoutFlutter_wave = async(req, res) => {
    // get user information
    const { username, useremail, amount } = req.body;

    // create a transaction object
    const transaction_details = {
        tx_ref: "qwert_y",
        amount:Number(amount),
        currency: "NGN",
        customer: {
            name: username,
            email:useremail
        },
        redirect_url: "http://localhost:3000",
        payment_options:"card"
    }

    // make a post request to flutter wave
    const response = await axios({
        url: "https://api.flutterwave.com/v3/payments",
        method: "post",
        headers: {
            Authorization: `Bearer ${process.env.FLW_Secret_Key}`,
        },
        data: transaction_details
    });

    // redirect the user to the checkout page
    res.status(200).json({msg:"generated link already",link:response.data.data.link})
}