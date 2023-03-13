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
    deleteCompliment,
    deleteFortune,
    updateCompliment,
    updateFortune,
    getAllCompliments,
    getAllFortunes
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)

app.post('/api/compliment', submitCompliment)
app.post('/api/fortune', submitFortune)

app.delete('/api/compliment', deleteCompliment)
app.delete('/api/fortune', deleteFortune)

app.put('/api/compliments', updateCompliment)
app.put('/api/fortunes', updateFortune)

app.get('/api/allcompliments', getAllCompliments)
app.get('/api/allFortunes', getAllFortunes)

app.listen(4000, () => console.log("Server running on 4000"));
