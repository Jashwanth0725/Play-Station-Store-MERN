import express from 'express';

const app = express();

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



const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});