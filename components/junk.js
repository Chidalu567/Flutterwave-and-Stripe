// import { CheckoutForm } from "../components/checkoutForm";


// // ---- Load the stripe plugin --------------------------------
// const stripePromise = loadStripe("pk_test_51LmPGTJUoS1NQM2Lh9s91AwqQc5PxUyW2wfKRuMMec8OVKgBRAivL9rBfvYtmMHuXN69iisogMSr0FTnSS7cyJ1y00OeeGRame"); // ---- Public key from the stripe dashoard


// const checkoutPage = () => {

//     // ----- State to store payment intent secret -----
//     const [clientSecret,setClientSecret] = useState(""); // ---- UseState hook definition

//     // ---- function to fetch payment intention
//     const fetchPaymentIntention = async () => {
//         const response_payment_intention = await axios.get("http://localhost:5000/checkout", { item: [{ id: "xl_donation" }] }).then(resp => resp.data.clientSecret);
//         setClientSecret(response_payment_intention); // ---- State handler call
//     }

//     useEffect(() => {
//         fetchPaymentIntention();
//     },[])

//     // --- Stripe elements options
//     const appearance = {
//         theme:'stripe', // ---- Set the theme to be like the stripe theme
//     }
//     const options = {
//         clientSecret,
//         appearance,
//     }
//     return (
//         <div>
//             {/*Set the header information for the page */}
//             <Head>
//                 <title>Checkout Page</title>
//             </Head>

//             {clientSecret &&
//                 <Elements options={options} stripe={stripePromise}>

//                     <CheckoutForm/>
//                     {/* <Button>Checkout</Button> */}
//                 </Elements>
//             }
//         </div>
//     )
// }

// export default checkoutPage; // ---- export this page defaultly