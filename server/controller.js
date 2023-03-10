let newComplimentSubmitted = []
let newFortuneSumitted = []


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'Have a beautiful day.',
            'Go take a rest; you deserve it.',
            'Love lights up the world.',
            'You will enjoy good health.',
            'You will make change for the better.',
            'Now is the time to try something new.'
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    submitCompliment: (req, res) => {
        newComplimentSubmitted.push(req.body)
        res.status(200).send(newComplimentSubmitted)
        console.log(newComplimentSubmitted)
    },
    submitFortune: (req, res) => {
        newFortuneSumitted.push(req.body)
        res.status(200).send(newFortuneSumitted)
        console.log(newFortuneSumitted)
    },
    complimentDeleted: (req, res) => {
        const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar."]
        while (compliments.length) {
            const randomIndex = Math.floor(Math.random() * compliments.length)
            console.log(compliments[randomIndex])
            compliments.splice(randomIndex, 1)
            res.status(200).send(`"${compliments[randomIndex]}" was deleted.`)
        }
    }
}
