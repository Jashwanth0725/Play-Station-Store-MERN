import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import connectDB from './index.js';
import dotenv from 'dotenv';

dotenv.config()

connectDB({
    path: './.env'
});

const stripe = new Stripe(`${process.env.STRIPE_KEY}`)

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is ready');
});


//get jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { "joke": "Why did the chicken cross the road?" },
        { "joke": "Knock, knock. Who’s there?" }
    ];
    res.json(jokes);
})


app.post('/payment', async (req, res) => {

    const product = await stripe.products.create({
        name: "T-Shirt"

    })

    if (product) {
        var price = await stripe.prices.create({
            product: `${product.id}`,
            unit_amount: 100 * 100,
            currency: 'inr',

        });
    }

    if (price.id) {
        var session = await stripe.checkout.sessions.create({
            line_items: [{
                price: `${price.id}`,
                quantity: 1,

            }],
            mode: 'payment',
            success_url: 'http://localhost:5000/success',
            cancel_url: 'http://localhost:5000/cancel',
            customer_email: 'demo@gmail.com'
        })
    }

    res.json(session)

})


const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});