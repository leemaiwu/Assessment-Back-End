const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getCompliment,
    getFortune,
    submitCompliment,
    submitFortune,
    complimentDeleted
} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get('/api/fortune', getFortune)

app.post('/api/compliment', submitCompliment)

app.post('/api/fortune', submitFortune)

app.delete('/api/compliment', complimentDeleted)

app.listen(4000, () => console.log("Server running on 4000"));
