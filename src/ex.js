const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin  =require("firebase-admin")

admin.initializeApp(functions.config().firebase)


const stripe = require("stripe")
    ("sk_test_51MmHeaSEHZcG38Hb8dTV1qJ1M8nv8EcPgwvuUpJUnUtwNhyjt6LxNStuxfyvjaklfvd6kFLbb0ZEaHnB2V95Atk200TdgdFT7B");
// API

// App Config
const app = express();

// Middleware

app.use(cors({ origin : true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('Hello world'));

app.post('/payments/create' , async (req, res) => {
    const total = req.query.total;

    console.log('Payment total is   BOOOOOM     ....... ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "inr"
    });

    res.status(201).send({
        clientSecret : paymentIntent.client_secret, 
    });
});



//Listen Commands
exports.api = functions.https.onRequest(app)

// This was all that was need to get the backend running


// Api Endpoint (http://127.0.0.1:5001/clone-c61ac/us-central1/api)
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
